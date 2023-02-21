export function callMSGraph(endpoint: string, token: string, callback: any) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers
  };

  console.log(`request made to Graph API at: ${new Date().toString()}`);

  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => callback(response, endpoint))
    .catch(error => console.log(error));
}
