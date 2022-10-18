import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursePage() {
    return (
        <>
            <h1>CoursePage</h1>
            <div>
                <Link to={'/rule/'}>ルール説明へ</Link>
            </div>
        </>
    )
}