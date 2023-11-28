'use client'
 import React from 'react'
import {signOut} from "firebase/auth";
import Router from 'next/router'
import {auth, onAuthStateChanged} from "../../firebase";
import {useEffect} from 'react';
import withAuth from '../../components/withAuth';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import StlDashboard from '../../components/stl-dashboard/StlDashboard';
import Navbar from '../../components/navbar/Navbar';
import StlListContextProvider from '../../components/contexts/stl-list-context';

const Home = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) { // User is signed in
                console.log('User email:', user.email);
                console.log('User display name:', user.displayName);
            } else { // User is not signed in
                console.log('User is not signed in');
            }
        });

        return() => unsubscribe();
    }, []);




    return (
        <StlListContextProvider>
            <Navbar></Navbar>
            <StlDashboard></StlDashboard>
        </StlListContextProvider>

    )
}
export default withAuth(Home);
