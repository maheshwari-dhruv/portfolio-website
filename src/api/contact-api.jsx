import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: CONTACT_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMail = (contactData) => {
  return api.post("/sendmail", contactData);
};
