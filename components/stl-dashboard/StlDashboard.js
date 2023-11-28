import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { auth, fireStore, onAuthStateChanged } from "../../firebase";

import { StlListContext } from "../contexts/stl-list-context";
import stlService from "../../service/firebase-stl-service";
import { UserContext } from "../contexts/user-context";

function StlDashboard() {
  const [stls, setStls] = useContext(StlListContext);
  const [userState,setUserState] = useContext(UserContext);

  useEffect(() => {
    stlService.fetchStls(userState?.user?.uid, setStls, 5000);
  }, []);

  
  const deleteStl =async (stl) =>{
    await stlService.deleteStl(stl);
    stlService.fetchStls(userState.user.uid, setStls, 5000)

  }

  return (
    <div>
      <div className="mb-20">
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 justify-between mt-5">
        {stls?.map((stl, i) => {
          return (
            <div key={i}>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={stl.data().image} alt="Stl" />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button className="btn btn-square btn-sm" onClick={()=>deleteStl(stl)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <h2 className="card-title">{stl.data().name}</h2>
                  <p>{stl.data().desc}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Download</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
export default StlDashboard;
