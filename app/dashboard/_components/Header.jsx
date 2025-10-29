import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b'>
        <div className=' text-2xl font-bold  '>
         AI shortvideo generator     
        </div>
        <div className='flex items-center gap-4'>
            <Button>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header