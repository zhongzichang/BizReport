import global from './global';
import config from '../lib/config';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

export default function init(){
  var storage = new Storage({
  	// maximum capacity, default 1000
  	size: 1000,

  	// Use AsyncStorage for RN, or window.localStorage for web.
  	// If not set, data would be lost after reload.
  	storageBackend: AsyncStorage,

  	// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  	// can be null, which means never expire.
  	defaultExpires: 1000 * 3600 * 24,

  	// cache data in the memory. default is true.
  	enableCache: true,

  	// if data was not found in storage or expired,
  	// the corresponding sync method will be invoked and return
  	// the latest data.
  	sync : {
  		// we'll talk about the details later.
  	}
  });
  global.storage = storage;

  storage.load({
    	key: config.ACCESS_TOKEN,
    }).then(ret => {
    	// found data goes to then()
    	console.log(data);
      global.accessToken = data;
    }).catch(err => {
    	// any exception including data not found
    	// goes to catch()
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
