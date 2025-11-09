import fs from "fs";
import path from "path";
import { promisify } from "util";
import gTTS from "gtts";

const writeFile = promisify(fs.writeFile);

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text || text.trim() === "") {
      return new Response(JSON.stringify({ error: "Text is required" }), {
        status: 400,
      });
    }

    // Generate a unique filename
    const fileName = `speech-${Date.now()}.mp3`;
    const filePath = path.join(process.cwd(), "public", "audio", fileName);

    // Make sure the folder exists
    const audioDir = path.join(process.cwd(), "public", "audio");
    if (!fs.existsSync(audioDir)) {
      fs.mkdirSync(audioDir, { recursive: true });
    }

    // Generate and save the audio
    const tts = new gTTS(text, "en");
    await new Promise((resolve, reject) => {
      tts.save(filePath, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    console.log("✅ Audio saved at:", filePath);

    // Return the local public URL
    const url = `/audio/${fileName}`;

    return new Response(JSON.stringify({ url }), { status: 200 });
  } catch (error) {
    console.error("❌ TTS Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate speech", details: error.message }),
      { status: 500 }
    );
  }
}
