import styles from "./TopPage.module.css";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Title() {
    return (
        <div className={styles["top-title"]}>
            <p>
                ChillChill<br/>
                YOGAFIRE
                </p>
        </div>
    );
}

export default TopPage;

function TopPage() {
    const [user] = useAuthState(auth);

    return (
        <div className={styles["bg"]}>
            <Title />
            <div>
                {user ? <LogOutButton /> : <LogInButton />}
            </div>
        </div>
    );
}

function LogInButton() {
    const logInWithGoogle = () => {
        signInWithPopup(auth, provider).catch((err) => alert(err.message));
    };
    return (
        <>
            <a className={styles["login-btn"]} to={"/rule/"} onClick={logInWithGoogle}>ログイン</a>
        </>
    );
}

function LogOutButton() {
    return (
        <>
            <div className={styles["top-nav-bar"]}>
                <Link to={"/goal/"}>目標設定画面へ</Link>
                <Link to={"/home/"}>ホーム</Link>
                <Link to={"/course/"}>コース選択画面へ</Link>
            </div>
            <button onClick={() => auth.signOut(auth)}>
                <p>Log Out</p>
            </button>
        </>
    );
}
