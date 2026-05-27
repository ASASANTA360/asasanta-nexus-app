import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        reply:
          "OpenAI API key not configured yet.",
      });
    }

    const openai = new OpenAI({
      apiKey:
        process.env.OPENAI_API_KEY,
    });

    const body = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are Nexus AI, an enterprise AI verification assistant.",
          },

          {
            role: "user",
            content: body.message,
          },
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message
          .content,
    });

  } catch (error) {

    return NextResponse.json({
      error:
        "AI request failed.",
    });

  }
}