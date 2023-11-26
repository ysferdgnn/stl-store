// components/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase';


const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();



    useEffect(() => {  
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          // Redirect to the login page if the user is not authenticated
          router.push('/login');
        }
      });

      return () => unsubscribe();
     }, []);
     
     return<WrappedComponent {...props} />;

  };
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};


export default withAuth;
