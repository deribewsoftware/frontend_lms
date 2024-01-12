import { ReactNode } from "react";
import useAuth from "./useAuth";
import { redirect } from "next/navigation";
interface ProtectedProps{
  children:ReactNode
}

const Protected:React.FC<ProtectedProps> = ({children}) => {
  const isAuthenticated=useAuth();
  return isAuthenticated? <>{children}</>:redirect("/")
}
 
export default Protected;