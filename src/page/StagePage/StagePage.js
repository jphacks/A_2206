import { Link, useNavigate } from "react-router-dom";
import styles from "./StagePage.module.css";
import backarrow from "./backarrow.png";

const StageButton = ({ className, text }) => {
    return (
        <Link to={"/rule/"}>
            <button className={`${className} ${styles.buttonparent}`}>
                {text}
            </button>
        </Link>
    );
};

export default function StagePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.stages}>
                <img
                    src={backarrow}
                    onClick={() => {
                        navigate(-1);
                    }}
                    className={styles.backarrow}
                />
                <h1 className={styles.title}>ステージ選択</h1>
                <br />
                <div className={styles.buttons1}>
                    <StageButton className={styles.topleft} text={"morning"} />
                    <StageButton className={styles.topcenter} text={"noon"} />
                    <StageButton className={styles.topright} text={"night"} />
                </div>

                <div className={styles.buttons2}>
                    <StageButton
                        className={styles.bottomleft}
                        text={"fat burning"}
                    />
                    <StageButton
                        className={styles.bottomcenter}
                        text={"rerax"}
                    />
                    <StageButton className={styles.bottomright} text={"fun"} />
                </div>
            </div>
        </>
    );
}
