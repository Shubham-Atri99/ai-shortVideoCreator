import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const { email, name, imageUrl } = await req.json();
    console.log("📩 Received data in API:", { email, name, imageUrl });

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    let user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("🆕 Creating new user...");
      user = await db.user.create({
        data: { email, name, imageUrl },
      });
    } else {
      console.log("✅ User already exists");
    }

    console.log("✅ Done:", user);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("❌ Error in /api/checkUser:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
