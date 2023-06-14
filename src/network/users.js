import request from "./fetch";

export async function createAccount(newUser) {
  return await request("/api/v1/users", "POST", newUser);
}

export async function loginStatus() {
  return await request("/api/v1/logged_in");
}

export async function logOutUser() {
  return await request("/api/v1/logout", "DELETE");
}

export async function logIn(credentials) {
  return await request("/api/v1/login", "POST", credentials);
}
