import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import { promises as fs } from "fs";
import { tmpdir } from "os";
import { join } from "path";

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
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    await connectDB();
    const data = await request.formData();
    const file = data.get("photo");

    let missingPerson = [];

    if (file) {
      // Read the file contents
      const fileBuffer = await file.arrayBuffer();

      // Create a temporary file with the Buffer content
      const tempFilePath = join(tmpdir(), `temp_${Date.now()}.png`);
      await fs.writeFile(tempFilePath, Buffer.from(fileBuffer));

      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(tempFilePath, {
        resource_type: "auto", // Set the resource type based on the file content
      });

      // Delete the temporary file
      await fs.unlink(tempFilePath);

      const person = {
        name: data.get("name"),
        photo: result.secure_url,
        age: data.get("age"),
        skinColor: data.get("skinColor"),
        languages: data.get("languages"),
        reportedBy: data.get("reportedBy"),
        phoneNumber: data.get("phoneNumber"),
        relationshipWithPerson: data.get("relationshipWithPerson"),
      };

      missingPerson = await MissingPerson.create(person);
    } else {
      // Handle the case when no file is provided
      console.log("No file provided");
    }

    return new NextResponse(JSON.stringify(missingPerson), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};
