import global from './global';
import config from '../lib/config';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

export async function makeInit(){

  var storage = new Storage({
  	size: 1000,
  	storageBackend: AsyncStorage,
  	defaultExpires: 1000 * 3600 * 24,
  	enableCache: true,
  	sync : {}
  });

  global.storage = storage;

  await storage.load({
    	key: config.ACCESS_TOKEN,
    }).then(ret => {
      global.accessToken = ret;
    }).catch(err => {
    	console.warn(err.message);
    	switch (err.name) {
    	    case 'NotFoundError':
    	        // TODO;
    	        break;
            case 'ExpiredError':
                // TODO
                break;
    	}
    });
}
