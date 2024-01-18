import { NextResponse } from "next/server";
import connectDB from "@/lib/connect-db";
import { BloodDonor } from "@/models/Donor.model";

export const GET = async (request) => {
  try {
    await connectDB();
    const bloodDonor = await BloodDonor.find();
    return new NextResponse(JSON.stringify(bloodDonor), { status: 200 });
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
    const bloodDonor = await BloodDonor.create(person);
    return new NextResponse(JSON.stringify(bloodDonor), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};
