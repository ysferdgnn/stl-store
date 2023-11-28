import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user-context";
import { collection, addDoc, Firestore } from "firebase/firestore"; 
import { fireStore } from "../../firebase";
import { StlListContext } from "../contexts/stl-list-context";
import stlService from "../../service/firebase-stl-service";
function AddDialog({afterInsertCallback}) {

    const [image,setImage] =useState();
    const [link,setLink] = useState();
    const [name,setName] = useState();

    const [userState,setUserState] = useContext(UserContext);
    const [stls,setStls] = useContext(StlListContext);


   const onSubmit  = async (event) =>{

    console.log('userState',userState);
        event.preventDefault();
        const dataToSave = {
            image: image,
            link: link,
            name: name,
            userId: userState.user.uid
        }

        const data = stlService.addStl(dataToSave);

        console.log('dataToSave',dataToSave)
        console.log("Document written with ID: ", data.id);
        stlService.fetchStls(userState.user.uid,setStls,5000);
   }
  return (
    <dialog id="add_modal_dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add an Stl File</h3>
        <p className="py-4">upload stl and image files a service( eg:  yandex disk) and paste links here</p>

        <form method="submit" onSubmit={onSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="md:mb-0 pr-4">Image: </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs block mt-2"
                onChange={(val)=> setImage(val.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="md:mb-0 pr-4">Link: </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs block mt-2"
                onChange={(val) => setLink(val.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="md:mb-0 pr-4">Name: </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs block mt-2"
                onChange={(val) => setName(val.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
             
              <button className="btn" type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>

        <p>dadad</p>
      </form>
    </dialog>
  );
}

export default AddDialog;
