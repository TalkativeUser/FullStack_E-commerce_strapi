import { ToastId, useToast } from "@chakra-ui/react"
import {SearchIcon  } from "@chakra-ui/icons"
import { ReactNode, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { networkMode } from "../app/features/networkSlice"



const InternetConnectionsProvider=({children}:{children:ReactNode} ) =>{

const toast=useToast()
const dispatch=useDispatch()
const [isOnline,setIsOnline]=useState <boolean> (true)
const toastRef = useRef<ToastId | undefined>(undefined)
const close = () => {
  if (toastRef.current) {
    toast.close(toastRef.current)
  }
}

const addToast=()=>{

    toastRef.current=toast({
        
        title:"you'r offline.",
        description:"please make sure you have internet connection",
        status:"warning",
        duration:null,
        isClosable:true,
        icon:<SearchIcon/>



    })



}

useEffect(()=>{

    setIsOnline(navigator.onLine)

},[])

useEffect(() => {
  if (!isOnline) {
    addToast()
  }
}, [isOnline])



useEffect(() => {
  const handleOffline = () => {

      setIsOnline(false)
      dispatch(networkMode(false))
      console.log('you are offline');
      
  } 
  const handleOnline = () => {
    setIsOnline(true)
   dispatch(networkMode(true))

    close()
          console.log('you are online');

  }

  window.addEventListener('offline', handleOffline)
  window.addEventListener('online', handleOnline)

  return () => {
    window.removeEventListener('offline', handleOffline)
    window.removeEventListener('online', handleOnline)
  }
}, [])






return children



}
export default InternetConnectionsProvider