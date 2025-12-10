import React from 'react'
import TextInputField from './TextInputField'
import getUserId from '@/lib/supabase/getUserId'

const   TextInputFieldServer = async() => {

    const userId = await getUserId()
  return (
    <>
    <TextInputField userId={userId}/>
    </>
  )
}

export default   TextInputFieldServer
