
import { React,useState,createContext } from 'react';

export const UserContext = createContext();

function UserContextProvider({ children }) {
    
    
    const [userState, setUserState] = useState({
        user: null,
        isLoggedIn: false,
      });
  return (
    <>
   <UserContext.Provider value={[userState, setUserState]}>
    {children}
   </UserContext.Provider>
   </>
  )
}

export default UserContextProvider