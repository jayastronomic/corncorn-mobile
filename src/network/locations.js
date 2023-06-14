import request from "./fetch";

export async function createOrUpdateLocation(newLocation) {
  return await request("/api/v1/locations", "POST", newLocation);
}

export async function getAllLocations() {
  return await request("/api/v1/locations");
}
