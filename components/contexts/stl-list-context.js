
import { React,useState,createContext } from 'react';

export const StlListContext = createContext();

function StlListContextProvider({ children }) {
    
    
    const [stls, setStls] = useState([]);
  return (
    <>
   <StlListContext.Provider value={[stls, setStls] }>
    {children}
   </StlListContext.Provider>
   </>
  )
}

export default StlListContextProvider