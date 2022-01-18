import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState } from 'react/cjs/react.development';
import DashboardJustice from './DashboardJustice';
import LoginJustice from './LoginJustice';
import "./justice.scss"
import PagesJustice from './PagesJustice';
import ReglagesJustice from './ReglagesJustice';
import CodeFakeJustice from './CodeFakeJustice';

const IndexJustice = () => {
    const [currentPage, setCurrentPage] = useState("login")
    const [isLogin, setIsLogin] = useState(false)
    const updatePage = (page) => {
        setCurrentPage(page)
    }

    return ( 
        <div className = 'containerJustice'>
        {!isLogin && <LoginJustice setIsLogin={setIsLogin} setCurrentPage={setCurrentPage} />}
        {isLogin && (
            <>
                <div className="nav-bar">
                    <ul className='justiceList'>
                        <li onClick={() => updatePage("dashboard")} style={currentPage === "dashboard" ? {backgroundColor:'#ECECEC'}:{backgroundColor:'transparent'}}>Dashboard</li>
                        <li onClick={() => updatePage("reglages")} style={currentPage === "reglages" ? {backgroundColor:'#ECECEC'}:{backgroundColor:'transparent'}}>Réglages</li>
                        <li onClick={() => updatePage("pages")} style={currentPage === "pages" ? {backgroundColor:'#ECECEC'}:{backgroundColor:'transparent'}}>Pages</li>
                        <li onClick={() => updatePage("goodLayer")} style={currentPage === "goodLayer" ? {backgroundColor:'#ECECEC'}:{backgroundColor:'transparent'}}>goodLayer</li>
                    </ul>
                </div>
                <div className="content">
                    {currentPage === "dashboard" && <DashboardJustice />}
                    {currentPage === "reglages" && <ReglagesJustice />}
                    {currentPage === "pages" && <PagesJustice />}
                    {currentPage === "goodLayer" && <CodeFakeJustice />}
                </div>
            </>
        )}
        </div>
     );
}
 
export default IndexJustice;