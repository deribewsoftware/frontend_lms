"use client"
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
interface ProvidersProps{
  children:ReactNode;
}
const Providers:FC<ProvidersProps> = ({children}) => {
  return ( <Provider store={store}>
    <SessionProvider>{children}</SessionProvider>
  </Provider> );
}
 
export default Providers;