import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./page/TopPage/TopPage";
import MyPage from "./page/MyPage/MyPage";
import RulePage from "./page/RulePage/RulePage";
import StagePage from "./page/StagePage/StagePage";
import GamePage from "./page/GamePage/GamePage";
import ResultPage from "./page/ResultPage/ResultPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<TopPage />} />
                <Route path={`/mypage/`} element={<MyPage />} />
                <Route path={`/rule/`} element={<RulePage />} />
                <Route path={`/stage/`} element={<StagePage />} />
                <Route path={`/game/`} element={<GamePage />} />
                <Route path={`/result/`} element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}
