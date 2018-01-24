
export const getData = (url) => (
  fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.info(err);
      return err;
    })
);
