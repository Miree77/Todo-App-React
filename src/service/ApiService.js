import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
  let options = {
    Headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 2000) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}
