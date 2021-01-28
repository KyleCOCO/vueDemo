import axios from 'axios'
import { config } from 'shelljs'

export function request(config) {
  
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 30000
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

export function instance2() {
  
  const instance = axios.create({
    baseURL: 'http://nm.chnphoto.cn/chnphoto_mobile_app',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    // console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)

}