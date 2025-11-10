import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema de validación
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  company: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar datos
    const validatedData = contactSchema.parse(body);

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Pulse Bariloche <onboarding@resend.dev>", // Dominio temporal de Resend
      to: [process.env.CONTACT_EMAIL || "federicopiaggio26@gmail.com"], // Tu email de destino
      replyTo: validatedData.email, // El email del usuario para poder responder
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h2 style="color: #5359aa;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            ${
              validatedData.company
                ? `<p><strong>Company:</strong> ${validatedData.company}</p>`
                : ""
            }
            <p><strong>Email:</strong> ${validatedData.email}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from the Pulse Bariloche contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
