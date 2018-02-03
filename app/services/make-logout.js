import global from './global';
import config from '../lib/config';

export async function makeLogout(){

  global.accessToken = null;
  if( global.storage != null){
    await global.storage.remove({
    	key: config.ACCESS_TOKEN
    });
  }
}
