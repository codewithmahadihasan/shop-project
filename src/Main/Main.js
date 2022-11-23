import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Header/Nav';


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='pt-20'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default Main;