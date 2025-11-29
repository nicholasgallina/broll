import jwt, { SignOptions } from "jsonwebtoken";


if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET must be set in .env");
const JWT_SECRET = process.env.JWT_SECRET;


export function signToken(payload: object, expiresIn = "1h"): string {
 const options: SignOptions = { expiresIn };
 return jwt.sign(payload, JWT_SECRET, options);
}


export function verifyToken(token: string) {
 try {
   return jwt.verify(token, JWT_SECRET);
 } catch {
   return null;
 }
}



