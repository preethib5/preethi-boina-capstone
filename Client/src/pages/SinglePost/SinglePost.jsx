import React from 'react';
import "../SinglePost/SinglePost.scss";
import Topbar from '../../components/TopBar/Topbar';
import Sidebar from '../../components/SideBar/Sidebar';
import SinglePage from '../../components/SinglePage/SinglePage';
import Posts from '../../components/Posts/Posts';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';

export default function SinglePost() {
    return (
        <>
        <Header/>
        <div className="singlepost">
           <Post/>
            <Sidebar/>
        </div></>
    )
}