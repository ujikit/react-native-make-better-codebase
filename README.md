# HunianAja Technician Mobile Apps

Team squad:
- Rahmat Agus Nuryady (Agus)
- Fauzi Zaki Ma'ruf (Ujik)
- Denandra Prasetya Laksma Putra (Adra)

Code base React Native terbaru menggunakan versi RN v0.63.0 dan javascript base,
sudah terpasang modul:
1. react-native-i18n untuk switch bahasa
2. react-navigation sebagai navigation route management
3. redux dan redux persist sebagai global state dan permanent local memory
4. react-native-svg untuk asset icon yang berformat svg menjadi js.

tersedia global component antara lain:
1. Alert
2. Button
3. Card
4. Header
5. Input
 
- tersedia started Screen example biasa dan juga hooks yg terstruktur agar mudah dipahami.

- dalam codebase ini juga sudah terpasang enviroment switch agar memudahkan proses development, staging sampai ke production.

## How to use

Untuk developer yang ingin menggunakan codebase ini silahkan ikuti intruksi dibawah ini:

1. setelah mengclone atau mendownload codebase ini, buka filenya di programing tools seperti VS Code atau yang sejenisnya
2. jika clone dari repo dengan url segera hapus `.git` folder, atau jalankan > `rm -rf .git`
3. buka terminal lalu jalankan > `yarn` atau `npm install`
4. lalu jalan kan > `cd ios && pod install && cd ..`
5. lalu jalan kan > `npx react-native-fix-image`
6. lalu jalankan > `react-native link`
7. lalu jalankan > `chmod +x prepare-env.sh` khusus mac atau bisa dijalankan di gitbash terminal pada windows
8. setelah itu buat file 'local.properties' dengan isi directori sdk android di komputer anda, taruh di dalam file android agar dapat menjalankan emulator android
9. selanjutnya jalankan > `yarn env:dev` atau `npm run npmenv:dev` , atau enviroment lainnya sesuai script yg terdapat di package.json
10. terakhir jalankan > `yarn ios` atau `npm run ios` atau > `yarn android` atau `npm run android` untuk running RN di device atau emulator

## How to contribute

1. fork repository utama ke akun git masing-masing
2. tambahkan git remote dari repo utama `git remote add origin "link repo"`
3. tambahkan git remote dari repo akun masing-masing hasil dari fork repo utama `git remote add upstream "link repo"`
4. pull terlebih dahulu `git pull origin develop`
5. pindah ke branch develop `git checkout develop`
6. jalankan `git add .`
7. commit hasil pekerjaan dengan menjalankan `git commit -m "judul pekerjaan"`
8. selalu pull terlebih dahulu setiap akan mengupload progress `git pull origin develop`
9. check apakah ada konflik atau tidak jika ada sesuaikan terlebih dahulu lalu git add dan git commit lagi
10. jika sudah tidak ada error dan konflik pada project silahkan push hasil pekerjaan kalian, jalankan `git push upstream develop`
11. lalu check akun git kalian dan buat merge request ke repo utama, isi form dengan teliti dan detail
12. konfirm merge request kalian pada maintener repositori utama agar dapat segera di cek dan di merge
13. ulangi dari step 6 setiap ada progress baru.

## first launch on
01-03-2021
