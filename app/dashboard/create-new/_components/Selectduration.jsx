import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Selectduration = ({selectedInput}) => {
  return (
    <div className=' flex flex-col shadow p-3 mt-4 space-y-4  border-2'>
        <div className=' text-2xl font-bold mt-2  '>Select the duration of the video</div>
        <div className=' mt-2 p-3'>
            <Select   onValueChange={(value) =>  selectedInput('duration',value)} >
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Duration in seconds" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="30">30</SelectItem>
    <SelectItem value="60">60</SelectItem>
    
  </SelectContent>
</Select>
        </div>
    </div>
  )
}

export default Selectduration