import { Link } from "react-router-dom";
import styles from "./StagePage.module.css";

const StageButton = ({ className, text }) => {
    return (
        <Link to={"/game/"}>
            <button className={`${className} ${styles.buttonparent}`}>
                {text}
            </button>
        </Link>
    );
};

export default function StagePage() {
    return (
        <>
            <div className={styles.stages}>
                <h1 className={styles.title}>ステージ選択</h1>
                <div className={styles.buttons1}>
                    <StageButton className={styles.topleft} text={"Hello"} />
                    <StageButton
                        className={styles.topcenter}
                        text={"Morning"}
                    />
                    <StageButton className={styles.topright} text={"Noon"} />
                </div>
                <div className={styles.buttons2}>
                    <StageButton
                        className={styles.bottomleft}
                        text={"Morning"}
                    />
                    <StageButton
                        className={styles.bottomcenter}
                        text={"Morning"}
                    />
                    <StageButton
                        className={styles.bottomright}
                        text={"Morning"}
                    />
                </div>
            </div>
        </>
    );
}
