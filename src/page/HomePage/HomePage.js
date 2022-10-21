import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import styles from "./MyPage.module.css";
import achieve from "./achieve.jpeg";

export default HomePage;
function HomePage() {
    return (
        <div className={styles["bg"]}>
            <div className={styles["nav-bar"]}>
                <div className={styles["nav-items"]}>
                    <Link className={styles["nav-item"]} to={"/"}>TOP</Link>
                    <Link className={styles["nav-item"]} to={"/goal/"}>LOG OUT</Link>
                    {/* <LogOutButton /> */}
                </div>
            </div>
            <div className={styles["my-page-main"]}>
                <Goal />
                <Achievement />
                <UserInfo />
            </div>
        </div>
    );
}

function Goal() {
    return(
        <div className={styles["goal-area"]}>
            <h1>目標</h1>
            <div className={styles["goal-bg"]}>
                <p className={styles["goal-sentence"]}>毎日15分ヨガを続ける</p>
            </div>
        </div>

    );
}

function Achievement() {
    return(
        <div className={styles["achieve-area"]}>
            <h1 className={styles["achieve-title"]}>目標達成度</h1>
            <div className={styles["achieve-content"]}>
                <img className={styles["achieve-img"]} src={ achieve } />
            </div>
        </div>
    );
}

function UserInfo() {
    return(
        <div className={styles["user-info"]}>
            <img className={styles["user-icon"]} src={auth.currentUser.photoURL} alt="ユーザーのアイコン" />
            <h2>{auth.currentUser.displayName}</h2>
        </div>
    );
}

// function LogOutButton() {
//     return (
//         <link to="../top/" onClick={() => auth.signOut(auth)}>Logout</link>   
//     );
// }