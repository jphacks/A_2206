import React from 'react';
import { Link } from 'react-router-dom';

export default function StagePage() {
    return (
        <>
            <h1>StagePage</h1>
            <div>
                <Link to={'/game/'}>ゲーム画面へ</Link>
            </div>
        </>
    )
}