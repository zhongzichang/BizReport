import {INIT_APP_START} from '../../constants/action-names';

export const initAppStart = () => (
  {
    type: INIT_APP_START,
    payload: {isStarting: true},
  }
);
