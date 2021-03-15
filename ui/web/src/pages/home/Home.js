import React from "react";
import './home.scss';
import Header from '../../components/header/Header';
import Main from '../../components/main/main';
import SideBar from "../../components/sidebar/SideBar";

function Home(){
    return (
        <>
            <Header />
            <div className='grid-container'>
                <SideBar />
                <Main />
            </div>

        </>
        );
}

export default Home;