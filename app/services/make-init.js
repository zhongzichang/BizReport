import global from './global';
import config from '../lib/config';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import {setUrlPrefix} from './utils';

export async function makeInit(){

  var storage = new Storage({
  	size: 1000,
  	storageBackend: AsyncStorage,
  	defaultExpires: 1000 * 3600 * 24,
  	enableCache: true,
  	sync : {}
  });

  // 建立存储器
  global.storage = storage;

  // 加载 ACCESS_TOKEN
  await storage.load(
    {key: config.ACCESS_TOKEN}
  ).then(
    ret => {global.accessToken = ret;}
  ).catch(
    err => {
      switch (err.name) {
        case 'NotFoundError':
        break;
        case 'ExpiredError':
        break;
      }
    }
  );

  // 加载URL_PREFIX
  await storage.load(
    {key: config.URL_PREFIX}
  ).then(
    ret =>{
      setUrlPrefix(ret);
    }
  ).catch(
    err => {
      global.accessToken = null;
      switch (err.name) {
        case 'NotFoundError':
        break;
        case 'ExpiredError':
        break;
      }
    }
  );

  // 加载用户名
  await storage.load(
    {key: config.USERNAME}
  ).then(
    ret =>{
      global.username = ret;
    }
  ).catch(
    err => {
      global.accessToken = null;
      switch (err.name) {
        case 'NotFoundError':
        break;
        case 'ExpiredError':
        break;
      }
    }
  );

  // 加载密码
  await storage.load(
    {key: config.PASSWORD}
  ).then(
    ret =>{
      global.password = ret;
    }
  ).catch(
    err => {
      global.accessToken = null;
      switch (err.name) {
        case 'NotFoundError':
        break;
        case 'ExpiredError':
        break;
      }
    }
  );

  // 加载密码MD5
  await storage.load(
    {key: config.PASSWORD_MD5}
  ).then(
    ret =>{
      global.passwordMd5 = ret;
    }
  ).catch(
    err => {
      global.accessToken = null;
      switch (err.name) {
        case 'NotFoundError':
        break;
        case 'ExpiredError':
        break;
      }
    }
  );
}
