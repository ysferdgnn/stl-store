import React from 'react'
import {auth, onAuthStateChanged} from "../../firebase";
import AddDialog from '../add-dialog/add-dialog';
function Navbar() {
    const handleLogOut = async () => {
        try {

            await auth.signOut(); // Sign the user out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
  return (
    <div className="navbar bg-base-100">

                <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                        <img src="https://shorturl.at/DT189"/>
                    </div>
                </div>

                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <button className="btn" onClick={()=>document.getElementById('add_modal_dialog').showModal()}>Ekle</button>
                            </li>

                            
                           
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">STL STORE</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle"
                        onClick={handleLogOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
                    </button>

                </div>

                <AddDialog></AddDialog>
            </div>
            
  )
}

export default Navbar