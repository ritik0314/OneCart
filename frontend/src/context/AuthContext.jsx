import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()
function AuthContext({children}) {
<<<<<<< Updated upstream
    let serverUrl = "https://onecart-backend11.onrender.com"
=======
    let serverUrl = "https://onecart-copy-1.onrender.com"
>>>>>>> Stashed changes

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
