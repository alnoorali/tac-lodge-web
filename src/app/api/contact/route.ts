import { NextResponse } from "next/server";
import { API_ENDPOINTS } from "../../api/api";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Prepare the data to match your backend API expectations
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      subject,
      message
    };

    // Simulate email sending or saving to a database
    console.log("formData :", formData);

    // Submit to your backend API
    const response = await fetch(API_ENDPOINTS.CONTACTFORM.SUBMIT_CONTACTFORM, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit contact form');
    }

    const data = await response.json();

    return NextResponse.json(
      { message: data.message || "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing form submission:", error); // ✅ Fix: Log the error
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}
