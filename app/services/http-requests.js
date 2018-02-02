import storage from './storage';
import global from './global';
import config from '../lib/config';

function buildHttpHeaders(){
  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if(global.accessToken){
    headers[config.ACCESS_TOKEN] = global.accessToken;
  }
  return headers;
}

export async function getData(url){
  console.info(url);
  try {
    let response = await fetch(url,{
      method: 'GET',
      headers: buildHttpHeaders(),
      cache: 'default'
    });
    let accessToken = response.headers.get(config.ACCESS_TOKEN);
    if( accessToken ){
      // save it
      global.accessToken = accessToken;
      storage.save({key:ccs.ACCESS_TOKEN,data:accessToken});
    }
    console.info(response);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return error;
  }
}


export async function postData(url, data) {
  console.info(url);
  console.info(data);
  try {
    let response = await fetch(url,
      {
        method: 'POST',
        headers: buildHttpHeaders(),
        body: JSON.stringify(data),
      });
    let accessToken = response.headers.get(config.ACCESS_TOKEN);
    if( accessToken ){
      // save it
      global.accessToken = accessToken;
      storage.save({key:config.ACCESS_TOKEN,data:accessToken});
    }
    let responseJson = await response.json();
    return responseJson;
  } catch ( error ) {
    console.error(error);
    return error;
  }
};
