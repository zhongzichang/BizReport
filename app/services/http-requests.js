
export const getData = (url) => {
  console.info(url);
  return fetch(url)
    .then((res) => {
      console.info(res);
      return res.json()
    })
    .catch((err) => {
      console.info(err);
      return err;
    })
}

export const postData = (url, data) => {
  console.info(url);
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
