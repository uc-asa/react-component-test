import createApiInstance from "./createApiInstance";

// export const endPoint = "https://5jpfwblro0.execute-api.us-east-1.amazonaws.com";
export const endPoint = "https://dev-login.medsi.mx";


const api = createApiInstance(endPoint, "McmApi");

export default api.instance;
