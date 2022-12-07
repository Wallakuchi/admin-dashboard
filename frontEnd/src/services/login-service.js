import { URL } from "../constants/urls";

export async function loginService(username, password) {
    const payload = { username, password };

    const options = {
      method: "post",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(URL.Login, options);
    return await response.json();
}