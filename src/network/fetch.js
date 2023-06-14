const backend = "http://localhost:4000";

export default async function request(endpoint, method = "GET", payload = {}) {
  const path = backend + endpoint;
  let options = {};
  options.headers = {};
  if (method === "POST") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(payload);
  }
  options.method = method;
  options.credentials = "include";
  const response = await fetch(path, options);
  return await response.json();
}
