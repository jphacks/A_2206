import React from 'react';
import { Link } from 'react-router-dom';

export default function RulePage() {
    return (
        <>
            <h1>RulePage</h1>
            <div>
                <Link to={'/stage/'}>ステージ選択画面へ</Link>
            </div>
        </>
    )
}