import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import styles from "./MyPage.module.css";

export default HomePage;
function HomePage() {
    return (
        <div className={styles["bg"]}>
            <div className={styles["nav-bar"]}>
                <div className={styles["nav-items"]}>
                    <Link className={styles["nav-item"]} to={"/"}>TOP</Link>
                    <Link className={styles["nav-item"]} to={"/course/"}>YOGA START</Link>
                    <Link className={styles["nav-item"]} to={"/goal/"}>LOG OUT</Link>
                </div>
            </div>
            <div className={styles["xx"]}>
                <Goal />
                <UserInfo />
            </div>
            {/* <LogOutButton /> */}
        </div>
    );
}

function Goal() {
    return(
        <div className={styles["goal"]}>
            <h2>目標</h2>
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