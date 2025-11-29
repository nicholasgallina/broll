import { NextRequest, NextResponse } from "next/server";
import  prisma  from "@/lib/prisma"; // Prisma singleton
import bcrypt from "bcrypt";


const client = prisma;


export async function POST(req: NextRequest) {
 try {
   const body = await req.json();
   const { username, password } = body;


   // Basic validation
   if (!username || !password) {
     return NextResponse.json(
       { error: "Missing username or password" },
       { status: 400 }
     );
   }


   // Find the user by username
   const user = await client.user.findUnique({ where: { username } });
   if (!user) {
     return NextResponse.json(
       { error: "Invalid credentials" },
       { status: 401 }
     );
   }


   // Compare the password
   const isValid = await bcrypt.compare(password, user.password);
   if (!isValid) {
     return NextResponse.json(
       { error: "Invalid credentials" },
       { status: 401 }
     );
   }


   // Exclude password from response
   const { password: _pw, ...userWithoutPassword } = user;


   return NextResponse.json(userWithoutPassword, { status: 200 });


 } catch (error: any) {
   console.error("Login error:", error);
   return NextResponse.json(
     { error: "Internal server error" },
     { status: 500 }
   );
 }
}



