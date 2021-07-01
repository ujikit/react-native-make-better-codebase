const config = {
  screens: {
    Home: 'home',
    ComplaintDetail: 'complaintdetail/:id',
  },
};

const linking = {
  prefixes: ['lrtcitytechnician://app', 'https://www.lrtcitytechnicianapp.com'],
  config,
};

export default linking;
