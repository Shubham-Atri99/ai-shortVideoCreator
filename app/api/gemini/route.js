import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
      });
    }

    console.log("🧠 Sending text-only request to Gemini 2.5 model...");

    // Initialize Gemini client
    const ai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

    // ✅ Use the latest model (text-only and fast)
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Generate text response
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("✅ Gemini Response:", text);

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Gemini API Error:", error);

    return new Response(
      JSON.stringify({
        error: error.message || "Internal Server Error",
        details: error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
