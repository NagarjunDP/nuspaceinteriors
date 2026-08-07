import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, location, budget, message, source, quizAnswers } = body;

    const emailPayloadPrimary = {
      _subject: `New Inquiry from ${name || "Website Lead"} - Nuspace Creations`,
      _template: "table",
      _cc: "nuspacedecor@gmail.com",
      "Full Name": name || "N/A",
      "Phone Number": phone || "N/A",
      "Email Address": email || "N/A",
      "Project Type": projectType || "N/A",
      "Location / Area": location || "N/A",
      "Approximate Budget": budget || "N/A",
      "Project Details / Message": message || "N/A",
      "Form Source": source || "Main Contact Form",
      ...(quizAnswers ? { "Quiz Vibe": quizAnswers.vibe, "Quiz Space": quizAnswers.space, "Quiz Budget": quizAnswers.budget } : {}),
    };

    const emailPayloadSecondary = {
      _subject: `New Inquiry from ${name || "Website Lead"} - Nuspace Creations`,
      _template: "table",
      _cc: "nuspacebangalore@gmail.com",
      "Full Name": name || "N/A",
      "Phone Number": phone || "N/A",
      "Email Address": email || "N/A",
      "Project Type": projectType || "N/A",
      "Location / Area": location || "N/A",
      "Approximate Budget": budget || "N/A",
      "Project Details / Message": message || "N/A",
      "Form Source": source || "Main Contact Form",
      ...(quizAnswers ? { "Quiz Vibe": quizAnswers.vibe, "Quiz Space": quizAnswers.space, "Quiz Budget": quizAnswers.budget } : {}),
    };

    // Trigger emails to both endpoints simultaneously
    await Promise.allSettled([
      fetch("https://formsubmit.co/ajax/nuspacebangalore@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(emailPayloadPrimary),
      }),
      fetch("https://formsubmit.co/ajax/nuspacedecor@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(emailPayloadSecondary),
      }),
    ]);

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error: any) {
    console.error("Error sending enquiry email:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
