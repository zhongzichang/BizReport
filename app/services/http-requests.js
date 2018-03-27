import global from './global';
import config from '../lib/config';

function buildHttpHeaders(){
  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
  if(global.accessToken){
    headers[config.ACCESS_TOKEN] = global.accessToken;
  }
  return headers;
}

export async function getData(url){
  var conn = url.indexOf("?") >= 0 ? "&" : "?";
  var urlx = url;
  if( global.username && global.passwordMd5)
    urlx += conn + "username=" + global.username + "&password=" + global.passwordMd5;
  console.info(urlx);
  try {
    let response = await fetch(urlx,{
      method: 'GET',
      headers: buildHttpHeaders(),
      cache: 'default'
    });
    let accessToken = response.headers.get(config.ACCESS_TOKEN);
    if( accessToken ){
      // save it
      global.accessToken = accessToken;
      global.storage.save({key:config.ACCESS_TOKEN,data:accessToken});
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
      global.storage.save({key:config.ACCESS_TOKEN,data:accessToken});
    }
    let responseJson = await response.json();
    return responseJson;
  } catch ( error ) {
    console.error(error);
    return error;
  }
};
