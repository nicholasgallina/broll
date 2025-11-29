import { NextRequest, NextResponse } from "next/server";
import  prisma  from "@/lib/prisma"; // your prisma singleton
import bcrypt from "bcrypt";


const client = prisma;


export async function POST(req: NextRequest) {
 try {
   const body = await req.json();
   const { username, email, password } = body;


   if (!username || !email || !password) {
     return NextResponse.json(
       { error: "Missing username, email, or password" },
       { status: 400 }
     );
   }


   const hashedPassword = await bcrypt.hash(password, 10);


   const user = await client.user.create({
     data: {
       username,
       email,
       password: hashedPassword,
     },
   });


   const { password: _pw, ...userWithoutPassword } = user;


   return NextResponse.json(userWithoutPassword, { status: 201 });
  
 } catch (error: any) {
   if (error.code === "P2002") {
     return NextResponse.json(
       { error: "Username or email already exists" },
       { status: 400 }
     );
   }


   console.error("Signup error:", error);
   return NextResponse.json(
     { error: "Internal server error" },
     { status: 500 }
   );
 }
}



