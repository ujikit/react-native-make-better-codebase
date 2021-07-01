@Library('shared-library')_
pipeline {

    parameters {
        
    
 string(name: 'CHAT_ID',                    description: 'chat id of telegram group',            defaultValue: '-1001215679728')
        string(name: 'CHAT_ID_PRIVATE',                    description: 'chat id of telegram group',            defaultValue: '')



    }
    agent none
   
    options {
        skipDefaultCheckout()
    }
    stages {
        stage ( "Kill old Build " ){
            steps{
                script{
                    KillOldBuild()
                }
            }
        }
        stage('Checkout SCM') {
            agent { label "nodejs" }
            steps {
                script { sh "rm -Rf *"}
                checkout scm
                script {
                    echo "get COMMIT_ID"
                    sh "touch file.txt"
                    sh 'echo -n $(git rev-parse --short HEAD) > ./commit-id'
                    commitId = readFile('./commit-id')
                }
                stash(name: 'ws', includes:'**,./commit-id')
            }
        }


                stage("Agent: nodejs") {
                    agent { label "nodejs" }
                    steps {
                        cleanWs()
                        script{
                             unstash 'ws'
                              def node = tool name: 'NodeJS-10', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                              env.PATH = "${node}/bin:${env.PATH}"
                              
                                               //   sh "cp  android/build.gradle  android/build.versions";
                                               //   sh "sed -i 's/\"//g' android/build.versions"
                                               //   def versionInfo = sh ( script: 'cat android/build.versions  | grep versionName= | cut -d = -f 2 ',returnStdout: true).trim()
                                                  

                             
                            
                    
                             if ( env.BRANCH_NAME == 'master' ){

                                                   envStage = "master"
                                                   artifactId= "master"
                                                   output= "android/app/build/outputs/apk/release/app-release.apk"
                                                   generate= "npx jetify && cd android && ./gradlew assembleRelease"
                                               
                                              

                                } else if ( env.BRANCH_NAME == 'release'){
                                                
                                                   envStage = "Staging"
                                                   artifactId= "staging"
                                                   output= "android/app/build/outputs/apk/release/app-release.apk"
                                                   generate= "npx jetify && cd android && ./gradlew assembleRelease"
                                               
                                            
                                            
                                } else if ( env.BRANCH_NAME == 'develop'){
                                                   envStage = "develop"
                                                   artifactId= "develop"
                                                   output= "android/app/build/outputs/apk/release/app-release.apk"
                                                   generate= "npx jetify && cd android && ./gradlew assembleRelease"
                                                  
                                         
                                }

                                
                       
                              
                              
                        



                        }
                    }
                }

  stage("Agent: Download env") {
                    agent { label "nodejs" }
                    steps {
                        cleanWs()
                       
                           script { 
                               
                               
                              unstash 'ws'
                              withCredentials([usernamePassword(credentialsId: 'nexus-credential', usernameVariable: 'username', passwordVariable: 'password')]) {

                                    //sh "wget --user=${username} --password=${password} -O .env http://nexus3-nexus3-playcourt.vsan-apps.playcourt.id/repository/xxx.env"
                                }
                                stash(name: 'ws', includes:'**')
                            
                            
    
                                    
                             }

                    }
                }
                
         
        
        stage('Unit Testing dan Sonarqube') {
            parallel {
             stage('Unit Test') {
                agent { label "nodejs" }
                steps {
                 
                            script { 
                                        echo "Do Unit Test Here"
                                    
                
                                }


                }    
            }

            stage('SonarQube Scan') {
                        agent { label "nodejs" }
                        steps {
                            script { sh "rm -Rf *"}
                            unstash 'ws' 
                            echo "Run SonarQube"
                            script {
                                echo "defining sonar-scanner"
                                //sh 'npm install'
                                //sh 'npm run test:cover'
                                def scannerHome = tool 'SonarScanner' ;
                                withSonarQubeEnv('SonarQube') {
                                    sh "${scannerHome}/bin/sonar-scanner"
                                }
                                 stash(name: 'ws', includes:'**')
                            
                            }
                        }
                    }
            }
         }
        


            stage('Build Apk Android') {
                agent { label "android"}
                        steps {
                                unstash 'ws'
                                script { 
                                        def node = tool name: 'NodeJS-10', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                                        env.PATH = "${node}/bin:${env.PATH}"
                                        
                                        //sh ' npm install'
                                        //sh "${generate}"

                                       stash(name: 'ws', includes:'**')
                                }
                        }    
            }
           
       
        stage('Publish apk') {
         parallel {
            stage('Send Apk android Telegram ') { 
                        agent { label "nodejs"}
                        steps {
                          unstash 'ws'

                                script { 
                                    
     withCredentials([string(credentialsId: 'new-telegram-token', variable: 'TELEGRAM_TOKEN')]) {
                                              
                                            //sh "curl -F document=@\"${output}\" https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendDocument?chat_id=${params.CHAT_ID_PRIVATE}"


      
                                }

                                       
                                       

                                }             
                        }
        
            }
            
            



         }
       }
  
       
    }
   
   
    post {
        
        always{
            node("Docker"){
                script{
                                                  
                              
                            TelegramNotif(currentBuild.currentResult) 

                       
                }
            }
        }
        
        
        
        
    }


}

