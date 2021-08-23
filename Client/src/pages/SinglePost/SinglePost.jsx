import React from 'react';
import "../SinglePost/SinglePost.scss";
import Topbar from '../../components/TopBar/Topbar';
import Sidebar from '../../components/SideBar/Sidebar';
import SinglePage from '../../components/SinglePage/SinglePage';

export default function SinglePost() {
    return (
        <>
        <Topbar/>
        <div className="singlepost">
            
           <SinglePage/>

            <Sidebar/>
        </div></>
    )
}
