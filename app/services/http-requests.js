import config from '../lib/config';

export const fetchPerformanceData = () => (
  fetch(config.API_URL_PERFORMANCE)
    .then((res) => res.json())
    .then((data) => data.currently)
    .catch((err) => err)
);
