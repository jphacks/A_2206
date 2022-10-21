import { Link } from "react-router-dom";

export default function GamePage() {
    return (
        <>
            <h1>GamePage</h1>

            <Link to={"/result/"}>ゲーム終了</Link>
        </>
    );
}
