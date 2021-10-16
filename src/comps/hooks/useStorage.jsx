import { useEffect, useState } from "react";
import { firestroage } from "../firebase/firebase";
 const useStorage = (file) => {
     const [progress, setProgress] = useState(0)
     const [error, setError] = useState(null)
     const [url, setUrl] = useState(null)
     
     useEffect(() => {
         //references
         const storageRef = firestroage.ref(file.name)

         storageRef.put(file).on('state_changed', (snap) =>{
             let percentage =(snap.bytesTransferred /snap.totalBytes ) *100
             setProgress(percentage);
             console.log(snap);
         }, (err)=>{
             setError(err)
         }, async () =>{
             const url = await storageRef.getDownloadURL();
             setUrl(url)
         })
     }, [file])
     return {progress, url, error}
 }
  
 export default useStorage;