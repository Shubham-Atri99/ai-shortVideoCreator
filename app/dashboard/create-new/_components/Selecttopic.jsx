"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { useState } from "react"

const Selecttopic = ({selectedInput}) => {
  const topics = ["motivational", "scary story", "random ai story", "funny", "custom prompt"]
  const [selectedTopic, setSelectedTopic] = useState("")

  return (
    <div className='flex flex-col border-2 shadow p-5 mt-4 space-y-4'>
      <div className='text-2xl font-bold'>
        Select topic
      </div>

      <Select onValueChange={(value) => {
        setSelectedTopic(value)
        value!=="custom prompt" && selectedInput('topic',value)
      }}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select the topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedTopic === "custom prompt" && (
        <Textarea placeholder="Enter your prompt here..." className="mt-2" 
        onChange={(e) => selectedInput('topic',e.target.value)}/>
      )}
    </div>
  )
}

export default Selecttopic
