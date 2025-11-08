"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Selecttopic from './_components/Selecttopic'
import Selectstyle from './_components/Selectstyle'
import Selectduration from './_components/Selectduration'
import { Button } from '@/components/ui/button'

const page = () => {
  const [formData, setFormData] = useState([])
  const onhandleInputchange=(feildname,feildvalue)=>{
    
    console.log(feildvalue);
    setFormData({...formData,[feildname]:feildvalue})

  }
  const onclickhandler=async()=>{
    getvideoScript();
    
  }
  const getvideoScript=async()=>{
   const prompt ='write a script to generate '+formData.duration+' seconds on topic '+formData.topic+' along with AI image prompt in '+formData.style+' style for each scene and give me result in JSON format with imagePrompt and ContentText as feild , no plain text'
   
   console.log(prompt);
   const result = await axios.post('/api/gemini',{
    prompt:prompt
   })
   console.log(result.data);
   
  }
  return (
    <div className='  md:p-10'>
      <h2 className=' text-4xl font-bold text-center justify-center items-center '>Create new</h2>
      <div>
        {/* topic */}
        <Selecttopic selectedInput={onhandleInputchange}/>
        {/* style */} 
        <Selectstyle selectedInput={onhandleInputchange}/>
        {/* duration */}
        <Selectduration selectedInput={onhandleInputchange}/>
        {/* button */}
        <Button 
        className=' mt-5'
         onClick={onclickhandler}>Create short video</Button>
      </div>
    </div>
  )
}

export default page