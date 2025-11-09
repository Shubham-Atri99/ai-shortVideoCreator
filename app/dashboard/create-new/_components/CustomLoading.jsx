import React from 'react'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog"

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white flex flex-col justify-center items-center p-10 space-y-5">
        <Image src="/software-update.gif" width={200} height={200} alt="loading" />
        <p className="text-center text-lg font-medium">
          Loading... please don’t refresh the page
        </p>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomLoading
