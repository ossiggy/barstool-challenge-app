import { API_URL } from "../../config";

export const callApi = async (endpoint: string) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
