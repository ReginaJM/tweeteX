import { settings } from "./config.js";

export const httpClient = async (resource, method = "GET", data) => {
  const endpoint = `${settings.api.localhost}${settings.api.port}/${resource}`;
  const options = { method: method };

  switch (method) {
    case "POST":
    case "PUT":
      options.headers = {
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(data);
      break;
  }

  try {
    const response = await fetch(endpoint, options);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
};
