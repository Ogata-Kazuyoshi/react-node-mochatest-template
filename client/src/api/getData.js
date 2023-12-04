import axiosClient from './axiosClient';

const dbApi = {
  getDB: () => {
    console.log('OLLLL');
    return axiosClient.get('db');
  },
  postDB: (params) => axiosClient.post('/db', params),
};

export default dbApi;
