// pages/login.js
import Router from 'next/router'
import {auth} from '../firebase';
import {signInAnonymously, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Login = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            Router.push("/home");
        }).catch((error) => {
            console.log(error);
        })
    };

    const signAnonymously = () => {

        signInAnonymously(auth).then((userCredential) => {
            Router.push("/home");
        });

    };

    return (
        <div className='w-3/6 m-auto flex'>
          

            <div className="card mt-20 m-auto bg-base-100 shadow-xl ">
                <div className="card-body">
                    <div className="card-actions justify-end flex flex-col items-center">
                        <h1>STL Store Login</h1>
                        <button className="btn btn-neutral "
                            onClick={signInWithGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                            Sign in with Google
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;
