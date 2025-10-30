
import React from 'react'

import Link from 'next/link';
import { Button } from '../../../components/ui/button';


const Emptystate = () => {
  return (
    <div className=' p-10 flex justify-center items-center border-2  mt-10 '>
        <div className=' flex  flex-col items-center  p-2'>
            <h1>no video found</h1>
            <Link 
            href="/dashboard/create-new">
            <Button>Create New video</Button>
            </Link>
            
        </div>
    </div>
  )
}

export default Emptystate