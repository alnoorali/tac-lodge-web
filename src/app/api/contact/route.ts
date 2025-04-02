import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Simulate email sending or saving to a database
    console.log("✅ Form Submitted:", body);

    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error processing form submission:", error); // ✅ Fix: Log the error
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}
