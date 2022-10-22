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
                <h1 className={styles.title}>STAGE SELECTION</h1>
                <br />
                <div className={styles.buttons1}>
                    <StageButton className={styles.topleft} text={"MORNING"} />
                    <StageButton className={styles.topcenter} text={"NOON"} />
                    <StageButton className={styles.topright} text={"NIGHT"} />
                </div>

                <div className={styles.buttons2}>
                    <StageButton
                        className={styles.bottomleft}
                        text={"FAT BURNING"}
                    />
                    <StageButton
                        className={styles.bottomcenter}
                        text={"RELAX"}
                    />
                    <StageButton className={styles.bottomright} text={"FUN"} />
                </div>
            </div>
        </>
    );
}
