import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <>
            <h1>RegisterPage</h1>
            <div>
                <Link to={'/home/'}>Homeへ</Link>
            </div>
        </>
    )
}