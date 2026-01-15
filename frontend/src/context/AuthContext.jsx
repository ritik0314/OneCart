import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()
function AuthContext({children}) {
    // read from Vite env var when deployed; fallback to the deployed backend
    let serverUrl = import.meta.env.VITE_SERVER_URL || "https://onecart-backend11.onrender.com"

    let value = {
       serverUrl
    }
  return (

    
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
