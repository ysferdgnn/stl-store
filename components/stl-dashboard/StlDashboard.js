
import React, { useEffect } from 'react'
import {useState} from 'react';
import {auth, fireStore,onAuthStateChanged} from '../../firebase';
import {collection, doc, getDoc,where,getDocs,query, Firestore, orderBy, limit,} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


   function StlDashboard() {

    const[stls,setStls] = useState([]);
    const[lastVisible,setLastVisible] = useState(undefined);
  
        const getData = async (uid)=>{
            try {
             
                const q = query(collection(fireStore, "stls"), where("userId", "==", uid),orderBy("name","asc"),limit(5));
                let data = [];
                const querySnapshot = await getDocs(q);


                 querySnapshot.forEach(element => {
                    data.push(element.data())
                });
    
                setStls(data);
               
            } catch (error) {
                console.error('Error signing out:', error);
            }
        }

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) { // User is signed in
                    console.log('User email:', user.email);
                    console.log('User display name:', user.displayName);
                    getData(user.uid);
                } else { // User is not signed in
                    console.log('User is not signed in');
                }
            });
    
            return() => unsubscribe();
           
        },[])
   
 
    return (
        <div className='grid grid-cols-3 gap-3 justify-between '>
            {
            stls?.map((stl, i) => {
                return <div key={i}>

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={
                                    stl.img
                                }
                                alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {
                                stl.name
                            }</h2>
                            <p>{
                                stl.desc
                            }</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
        })
        } </div>
    )
}
export default StlDashboard;


