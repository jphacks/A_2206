import backgroundImage from "./background.jpg";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
};

const titleStyle = {
    width: "299px",
    height: "116px",
    left: "108px",
    top: "227px",
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "96px",
    lineHeight: "116px",
    color: "#000000",
};

const loginButton = {
    position: "absolute",
    width: "180px",
    height: "50px",
    left: "1069px",
    top: "60px",
    fontSize: "18px",
    display: "inline-block",
    padding: "0.5em 1em 0.3em",
    border: "none",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(#0ba6ee 0%, #539ccc 100%)",
    cursor: "pointer",
};

function Title() {
    return (
        <div id="title" style={titleStyle}>
            ChillChill YOGAFIRE
        </div>
    );
}

export default TopPage;

function TopPage() {
    const [user] = useAuthState(auth);

    return (
        <div className="top-page" style={backgroundStyle}>
            <Title />
            <div className="top-buttons">
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
            <button
                to={"/rule/"}
                onClick={logInWithGoogle}
                className="login-button"
                style={loginButton}
            >
                ログイン
            </button>
        </>
    );
}

function LogOutButton() {
    return (
        <>
            <div>
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
