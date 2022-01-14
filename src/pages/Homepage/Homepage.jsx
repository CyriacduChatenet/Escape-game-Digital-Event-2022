import { useEffect } from 'react';
import './Homepage.scss';

export const Homepage = () => {

    useEffect(() => {
        const Redirection = () => {
            setTimeout(() => {
            }, 3000)
        }

        Redirection();
    },[])

    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}