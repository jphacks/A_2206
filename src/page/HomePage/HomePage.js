import { auth } from "../../firebase";
import { Link } from "react-router-dom";

export default HomePage;
function HomePage() {
    return (
        <div>
            <>
                <h1>HomePage</h1>
                <UserInfo />
                <div>
                    <Link to={"/"}>Top</Link>
                    <Link to={"/goal/"}>目標設定画面へ</Link>
                    <Link to={"/course/"}>コース選択画面へ</Link>
                </div>
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