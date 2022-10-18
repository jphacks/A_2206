import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopPage from "./page/TopPage/TopPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import HomePage from "./page/HomePage/HomePage";
import GoalInputPage from "./page/GoalInputPage/GoalInputPage";
import RulePage from "./page/RulePage/RulePage";
import CoursePage from "./page/CoursePage/CoursePage";
import StagePage from "./page/StagePage/StagePage";
import GamePage from "./page/GamePage/GamePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<TopPage />} />
                <Route path={`/login/`} element={<LoginPage />} />
                <Route path={`/register/`} element={<RegisterPage />} />
                <Route path={`/home/`} element={<HomePage />} />
                <Route path={`/goal/`} element={<GoalInputPage />} />
                <Route path={`/rule/`} element={<RulePage />} />
                <Route path={`/course/`} element={<CoursePage />} />
                <Route path={`/stage/`} element={<StagePage />} />
                <Route path={`/game`} element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}
