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
        <>
        {!isLogin && <LoginJustice setIsLogin={setIsLogin} setCurrentPage={setCurrentPage} />}
        {isLogin && (
            <>
                <div className="nav-bar">
                    <ul className='justiceList'>
                        <li onClick={() => updatePage("dashboard")}>Dashboard</li>
                        <li onClick={() => updatePage("reglages")}>Réglages</li>
                        <li onClick={() => updatePage("pages")}>Pages</li>
                        <li onClick={() => updatePage("goodLayer")}>goodLayer</li>
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
        </>
     );
}
 
export default IndexJustice;