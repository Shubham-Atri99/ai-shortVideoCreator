"use client"
import React, { useState } from "react"

const Selectstyle = ({ selectedInput }) => {
  const styles = ["realistic", "cartoonish", "comic", "watercolor"]
  const [selectedStyle, setSelectedStyle] = useState("")

  const handleSelect = (style) => {
    setSelectedStyle(style)
    selectedInput && selectedInput("style", style)
  }

  return (
    <div className="flex flex-col border-2 shadow p-5 mt-4 space-y-4">
      <div className="text-2xl font-bold">Select Style</div>
      <p>it tells about the style of pictures</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {styles.map((style) => (
          <div
            key={style}
            onClick={() => {
              handleSelect(style)
              selectedInput("style", style)
            }}
            className={`cursor-pointer p-4 text-center rounded-xl border-2 font-semibold capitalize transition-all duration-200
              ${
                selectedStyle === style
                  ? "  bg-gray-600 text-white border-gray-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {style}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Selectstyle
