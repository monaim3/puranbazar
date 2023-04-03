import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;