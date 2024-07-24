import { createContext, useState } from "react"

export const progressContext = createContext();

const ProgressProvider = ({children}) => {
    const [progress,setProgress] = useState(0);
  return (
    <progressContext.Provider value={{progress,setProgress}}>
        {children}
    </progressContext.Provider>
  )
}

export default ProgressProvider