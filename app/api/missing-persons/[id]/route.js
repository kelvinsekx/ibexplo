import { NextResponse } from "next/server";

import connectDB from "@/lib/connect-db";
import { MissingPerson } from "@/models/MissingPerson";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const missingPerson = await MissingPerson.findById(params.id);
    return new NextResponse(JSON.stringify(missingPerson), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};
