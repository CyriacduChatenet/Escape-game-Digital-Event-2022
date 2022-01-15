import { useEffect } from 'react';
import './Homepage.scss';
import {LoaderPage} from "../LoaderPage/LoaderPage"
import { useNavigate } from "react-router-dom"

export const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/choix-de-personnages");
        }, 3000)
    },[])

    return (
        <div>
            <LoaderPage />
        </div>
    )
}