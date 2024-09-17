
interface JwtPayload {
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid": string;
    email: string;
    role: string;
    unique_name: string;
    nbf: number;
    exp: number;
    iat: number;
  }

export default JwtPayload;