import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import styles from "./MyPage.module.css";

export default HomePage;
function HomePage() {
    return (
        <div className={styles["bg"]}>
            <>
                <div className={styles["nav-bar"]}>
                    <Link to={"/"}>Top</Link>
                    <Link to={"/goal/"}>目標設定画面へ</Link>
                    <Link to={"/course/"}>コース選択画面へ</Link>
                </div>
                <h1>My Page</h1>
                <UserInfo />
                {/* <LogOutButton /> */}
            </>
        </div>
    );
}

function UserInfo() {
    return (
        <div className="userInfo">
            <img
                src={auth.currentUser.photoURL}
                alt="googleアカウントのプロフィール画像"
            />
            <h3>{auth.currentUser.displayName}</h3>
        </div>
    );
}

// function LogOutButton() {
//     return (
//         <link to="../top/" onClick={() => auth.signOut(auth)}>Logout</link>   
//     );
// }