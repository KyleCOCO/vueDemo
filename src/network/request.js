import axios from 'axios'

export function request(config) {
  
  const instance = axios.create({
    baseURL: '/chnphoto_mobile_app',
    timeout: 30000,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data;
  },err => {
    console.log(err);
  })
  return instance(config)

}
