import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./StagePage.module.css";

function StageButton(props) {
    return (
        <Link to={'/game/'}>
            <button className={props.className}>PUSH</button>
        </Link>
    )
}

export default function StagePage() {
    return (
        <>
            <div className={styles.stages}>
                <h1 className='title'>ステージ選択</h1>
                <div className={styles.buttons1}>
                    <StageButton className={styles.topleft}/>
                    <StageButton className={styles.topcenter}/>
                    <StageButton className={styles.topright}/>
                </div>
                <div className={styles.buttons2}>
                    <StageButton className={styles.bottomleft}/>
                    <StageButton className={styles.bottomcenter}/>
                    <StageButton className={styles.bottomright}/>
                </div>
                <Link to={'/game/'}>ゲーム画面へ</Link>
            </div>
        </>
    )
}