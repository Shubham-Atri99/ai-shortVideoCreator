"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const Provider = ({ children }) => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    // Get the primary email
    const email =
      user.email || (user.emailAddresses?.[0]?.emailAddress) || undefined;

    if (!email) {
      console.log("❌ No email available yet");
      return;
    }

    const sendUserToAPI = async () => {
      try {
        console.log("👤 Sending data to /api/checkUser...", { email });
        const res = await fetch("/api/checkUser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: user.fullName || "No Name",
            imageUrl:
              user.imageUrl ||
              "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
          }),
        });

        const data = await res.json();
        console.log("📦 Response:", data);
      } catch (err) {
        console.error("❌ Error calling /api/checkUser:", err);
      }
    };

    sendUserToAPI();
  }, [user, isLoaded]);

  return <>{children}</>;
};

export default Provider;
