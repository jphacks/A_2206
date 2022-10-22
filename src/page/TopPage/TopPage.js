import styles from "./TopPage.module.css";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default TopPage;
function TopPage() {
    const [user] = useAuthState(auth);

    return (
        <div className={styles["bg"]}>
            <div className={styles["border-back"]}></div>
            <div className={styles["border-top"]}>
                {user ? (
                    // ログイン中の画面
                    <>
                        {/* <DisplayGoal /> */}
                        <StartYoga />
                        <TreePose />
                        <MyPageButton />
                    </>
                ) : (
                    // ログアウト中の画面
                    <>
                        <Title />
                        <WarriorPose />
                        <LogInButton />
                    </>
                )}
            </div>
        </div>
    );
}

function Title() {
    return (
        <div className={styles["top-title"]}>
            <p>Chill Chill</p>
            <p>YOGAFIRE</p>
        </div>
    );
}

// const DisplayGoal = ({ className }) => {
//     return (
//         <a className={className}>PUSH</a>
//     );
// };

function StartYoga() {

    return (
        <Link className={styles["start-yoga-btn"]} to={"/stage/"}>
            YOGA&nbsp;START
        </Link>
    );
}

function WarriorPose() {
    return <div className={styles["warrior-pose"]}></div>;
}

function TreePose() {
    return <div className={styles["tree-pose"]}></div>;
}

function LogInButton() {
    const logInWithGoogle = () => {
        signInWithPopup(auth, provider).catch((err) => alert(err.message));
    };
    return (
        <>
            <a className={styles["log-io-btn"]} onClick={logInWithGoogle}>
                Login
                <span className={styles["btn-underline"]}></span>
            </a>
        </>
    );
}

function MyPageButton() {
    return (
        <Link className={styles["my-page-btn"]} to={"/mypage/"}>
            My Page
        </Link>
    );
}
