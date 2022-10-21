import { Link } from "react-router-dom";
import styles from "./ResultPage.module.css";

export default function ResultPage() {
    return (
        <div className={styles.Result}>
            <div className={styles.title}>WELL DONE!!</div>
            <div className={styles.message}>THANK YOU FOR PLAYING</div>

            <div className={styles.button}>
                <Link to={`/`}>
                    <a href="#" className="btn btn-border">
                        TO HOME
                    </a>
                </Link>
            </div>
        </div>
    );
}
