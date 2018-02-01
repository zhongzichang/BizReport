
export async function getData(url){
  console.info(url);
  try {
    let response = await fetch(url);
    console.info(response);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return error;
  }
}


export async function postData(url, data) {
  console.info(url);
  console.info(data);
  try {
    let response = await fetch(url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch ( error ) {
    console.error(error);
    return error;
  }
};
