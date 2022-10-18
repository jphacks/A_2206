import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <div>
                <Link to={"/goal/"}>目標設定画面へ</Link>
                <Link to={"/course/"}>コース選択画面へ</Link>
            </div>
        </>
    );
}
