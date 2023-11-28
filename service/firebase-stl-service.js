       
 import {collection,where,getDocs,query, orderBy, limit,addDoc, deleteDoc, doc} from 'firebase/firestore';
 import { fireStore } from '../firebase';

 const stlService ={

    async fetchStls  (uid,refreshCallback,limitBy) {
        try {
         
            const q = query(collection(fireStore, "stls"), where("userId", "==", uid),orderBy("name","asc"),limit(limitBy));
            let data = [];
            const querySnapshot = await getDocs(q);
    
    
             querySnapshot.forEach(element => {
                data.push(element)
                console.log('element.data',element);
            });
    
            refreshCallback(data);
           
        } catch (error) {
            console.error('Error signing out:', error);
        }
    },

    async addStl(data){
        const docRef = await addDoc(collection(fireStore, "stls"), data);
    },

    async deleteStl(snapshot){
        console.log('delete snapshot',snapshot);
        await deleteDoc(doc(fireStore,"stls",snapshot.id));
    }

 }


export default stlService;