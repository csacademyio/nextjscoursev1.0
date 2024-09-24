import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

//If request: NextRequest is removed as a parameter
//Next JS will automatically cache the data from the get request
export async function GET(request: NextRequest) {
  const req = request.cache
  console.log(req)
  const users = await prisma.user.findMany()
  return NextResponse.json(users, {status: 200});
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body)
  if(!validation.success)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(user, { status: 201 });
}