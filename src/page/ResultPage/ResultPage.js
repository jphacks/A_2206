import { Link } from "react-router-dom";
import styles from "./ResultPage.module.css";

export default function ResultPage() {
    return (
        <>
            <div className={styles.title}>YAGA終了！</div>
            <div className={styles.message}>お疲れ様でした！</div>

            <Link to={"/home/"}>
                <button>ログイン</button>
            </Link>
        </>
    );
}
