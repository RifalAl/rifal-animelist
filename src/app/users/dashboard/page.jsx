import React from 'react'
import Dashboard from '@/components/Dashboard/Dashboard'

import { getUser } from "@/service/auth-service";
const page = async () => {
  const user = await getUser();
  
  return (
    <Dashboard user={user}/>
  )
}

export default page