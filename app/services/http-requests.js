import config from '../lib/config';

export const fetchPerformanceData = () => (
  fetch(config.API_URL_PERFORMANCE)
    .then((res) => res.json())
    .catch((err) => {
      console.info(err);
      return err;
    })
);
