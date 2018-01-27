
export const getData = (url) => (
  fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      return err;
    })
);

export const postData = (url, data) => {
  console.info(data);
  return fetch(url,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((res) => {
      console.info(res);
      return res.json()
    })
    .catch((err) => {
      console.error(err);
      return err;
    })
};
