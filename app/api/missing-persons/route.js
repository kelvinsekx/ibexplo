process.noDeprecation = true;

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

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

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const POST = async (request) => {
  let missingPerson = [];

  const data = await request.formData();
  const file = data.get("photo");

  try {
    await connectDB();

    if (file) {
      // Read the file contents
      const fileBuffer = await file.arrayBuffer();

      var mime = file.type;
      var encoding = "base64";
      var base64Data = Buffer.from(fileBuffer).toString("base64");
      var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;

      // Upload the file to Cloudinary
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          var result = cloudinary.uploader
            .upload(fileUri, {
              invalidate: true,
            })
            .then((result) => {
              console.log(result);
              resolve(result);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      };

      const result = await uploadToCloudinary();

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
      return new NextResponse(JSON.stringify(missingPerson), { status: 200 });
    } else {
      // Handle the case when no file is provided
      return new NextResponse("No File", {
        status: 500,
      });
    }
  } catch (err) {
    return new NextResponse("Error in fetching resources " + err.message, {
      status: 500,
    });
  }
};
