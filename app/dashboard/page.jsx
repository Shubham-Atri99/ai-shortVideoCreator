"use client"
import React, { useState } from 'react'
import { Button } from '../../components/ui/button';
import Emptystate from './_components/Emptystate';


const page = () => {
  const [videos, setVideos] = useState([]);

  return (
    <div>
        <div className=' text-2xl text-gray-700  font-bold text-shadow-2xs flex justify-between'>
          dashboard
          <Button>create new </Button>
        </div>
        {videos.length==0&& <div>
          <Emptystate />
          </div>}
    </div>
  )
}

export default page