import {INIT_APP_COMPLETED} from '../../constants/action-names';

export const initAppCompleted = () => (
  {
    type: INIT_APP_COMPLETED,
    payload: {completed: true},
  }
);
