"use client"
import React, { useState } from 'react'

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
        <Button className=' mt-5'>Create short video</Button>
      </div>
    </div>
  )
}

export default page