import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "You are Asasanta Nexus AI Assistant for African businesses and communities.",
      },
      {
        role: "user",
        content: body.message,
      },
    ],
  });

  return Response.json({
    reply: completion.choices[0].message.content,
  });
}