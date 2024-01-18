import { NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import { MissingPerson } from "@/models/MissingPerson";

export const GET = async (request) => {
  try {
    await connectDB();
    const missingPerson = await MissingPerson.find();
    return new NextResponse(JSON.stringify(missingPerson), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();
    const person = await request.json();
    const missingPerson = await MissingPerson.create(person);
    return new NextResponse(JSON.stringify(missingPerson), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};
