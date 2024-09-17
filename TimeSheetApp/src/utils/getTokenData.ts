import { jwtDecode } from "jwt-decode";
import JwtPayloadType from "../types/JwtPayloadType";

export const getNameFromToken = () =>{
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const decoded: JwtPayloadType = jwtDecode<JwtPayloadType>(authToken);
    return decoded.unique_name;
  }
};

export const getEmailFromToken = () => {
    const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const decoded: JwtPayloadType = jwtDecode<JwtPayloadType>(authToken);
    return decoded.email;
  }
};

export const getUserIdFromToken = () => {
    const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const decoded: JwtPayloadType = jwtDecode<JwtPayloadType>(authToken);
    return decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"];
  }
};

export const getRoleFromToken = () => {
    const authToken = localStorage.getItem("authToken");
  if (authToken) {
    const decoded: JwtPayloadType = jwtDecode<JwtPayloadType>(authToken);
    return decoded.role;
  }
};



