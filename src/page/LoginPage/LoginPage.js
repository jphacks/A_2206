import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div>
            <h1>Log in</h1>
            <Link to={'/home/'}><button>ログイン</button></Link>
        </div>
    )
}