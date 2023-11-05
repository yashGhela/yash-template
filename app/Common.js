//import { doc, getDoc } from "firebase/firestore"
//import { db } from "./firebaseConfig"

export const grabPro=async({user, setisPro})=>{

    let ref=doc(db,'Users',user)

   

    await getDoc(ref).then((snap)=>{
        if (snap.data().paid){
            setisPro(true)
        }
    })

  

}
