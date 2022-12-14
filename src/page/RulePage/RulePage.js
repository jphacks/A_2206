import { Link, useNavigate } from "react-router-dom";
import styles from "./RulePage.module.css";
import backarrow from "./backarrow.png";

export default function RulePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.rules}>
            <img
                src={backarrow}
                onClick={() => {
                    navigate(-1);
                }}
                className={styles.backarrow}
            />

            <h1 className={styles.title}>⚠️CAUTION⚠️</h1>

            <ul className={styles.explains}>
                <li className={styles.explain1}>
                    画面に全身が映る位置で行ってください。
                </li>
                <p></p>

                <li className={styles.explain1}>
                    ポーズを無理にとろうとしないでください。
                </li>
                <p></p>
                <li className={styles.explain1}>
                    動きやすくリラックスできる服装で行ってください。
                </li>
            </ul>

            <div className={styles.messages}>
                心と体に優しくYOGAを楽しみましょう !!
            </div>
            <p></p>

            <div className={styles.button}>
                <Link to={`/game/`}>
                    <a href="#" className="btn btn-border">
                        CLICK
                    </a>
                </Link>
            </div>
        </div>
    );
}

/*const titleStyle = {
    textalign: "center",
    padding: "20px 0",
    fontSize: "80px",
    color: "#000000",
};

const toStageButton = {
    bottom: "20%",
    right: "100%",
    width: "30%",
    height: "100px",
    lineheight: "70px",
    fontFamily: "Inter",
    fontStyle: "italic",
    fontSize: "40px",
    lineHeight: "120px",
    textalign: "center",
    background: "#8866FF",
};

const backgroundStyle = {
    background: "#99BBFF",
    height: "100vh",
};

const explainStyle = {
    fontSize: "40px",
};*/
