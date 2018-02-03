import config from '../../lib/config';
import {makeInit} from '../../services/make-init';
import {initAppStart} from './init-app-start';
import {initAppCompleted} from './init-app-completed';


export const initApp = () => (
  (dispatch : Function) => {
    dispatch(initAppStart());
    (async () => {
        await makeInit();
        dispatch(initAppCompleted());
    })();
  }
);
