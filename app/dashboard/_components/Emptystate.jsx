import React from 'react'
import { Button } from '@/components/ui/button';

const Emptystate = () => {
  return (
    <div className=' p-10 flex justify-center items-center border-2  mt-10 '>
        <div className=' flex  flex-col items-center  p-2'>
            <h1>no video found</h1>
            <Button>Create New video</Button>
        </div>
    </div>
  )
}

export default Emptystate