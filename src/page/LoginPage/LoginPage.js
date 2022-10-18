import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <h1>LoginPage</h1>
            <div>
                <Link to={'/home/'}>Homeへ</Link>
            </div>
        </>
    )
}