"use client";
import React, { useState } from "react";
import axios from "axios";
import Selecttopic from "./_components/Selecttopic";
import Selectstyle from "./_components/Selectstyle";
import Selectduration from "./_components/Selectduration";
import { Button } from "@/components/ui/button";
import CustomLoading from "./_components/CustomLoading";

const Page = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState([]);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const onClickHandler = async () => {
    await getVideoScript();
  };

  const getVideoScript = async () => {
    const prompt = `write a script to generate ${formData.duration} seconds on topic ${formData.topic} along with AI image prompt in ${formData.style} style for each scene and give me result in JSON format with imagePrompt and contentText as fields, no plain text`;

    console.log("Prompt:", prompt);
    setLoading(true);

    try {
      const result = await axios.post("/api/gemini", { prompt });
      let rawText = result.data.text || "";

      console.log("Raw Gemini Output:", rawText);

      // 🧹 Clean extra code fences (```json ... ```)
      rawText = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      let parsedData;

      try {
        parsedData = JSON.parse(rawText);
      } catch (err) {
        console.error("JSON parse error:", err, "\nCleaned text:", rawText);
        alert("Error: Invalid JSON format from AI response");
        setLoading(false);
        return;
      }

      console.log("Parsed Data:", parsedData);

      const scenes = parsedData.scenes || parsedData;
      if (!Array.isArray(scenes)) {
        console.error("Invalid scenes data:", scenes);
        alert("Error: Unexpected AI response structure");
        setLoading(false);
        return;
      }

      setVideoScript(scenes);
      await getScript(scenes);
    } catch (error) {
      console.error("Error fetching script:", error);
      alert("Failed to fetch video script");
    } finally {
      setLoading(false);
    }
  };

  const getScript = async (videoData) => {
    let script = "";
    videoData.forEach((element) => {
      script += element.contentText + " ";
    });

    console.log("Final Combined Script:", script);

    try {
      const res = await axios.post("/api/speech", { text: script });

      console.log("Speech API Response:", res.data);

      if (res.data.url) {
        const audio = new Audio(res.data.url);
        audio.play();
      } else {
        alert("No audio URL returned from /api/speech");
      }
    } catch (error) {
      console.error("Error generating audio:", error);
      alert("Failed to convert text to speech");
    }
  };

  return (
    <div className="md:p-10">
      <h2 className="text-4xl font-bold text-center mb-5">Create New</h2>

      <div>
        {/* topic */}
        <Selecttopic selectedInput={onHandleInputChange} />

        {/* style */}
        <Selectstyle selectedInput={onHandleInputChange} />

        {/* duration */}
        <Selectduration selectedInput={onHandleInputChange} />

        {/* button */}
        <Button className="mt-5" onClick={onClickHandler}>
          Create Short Video
        </Button>

        <CustomLoading loading={loading} />
      </div>
    </div>
  );
};

export default Page;
