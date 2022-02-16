import React, {createContext, useState} from "react";

const UserContext = createContext()

function UserProvider({children}){
    const currenUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
    }
    const [user, setUser] = useState(currenUser)
    const value = [user, setUser]
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}