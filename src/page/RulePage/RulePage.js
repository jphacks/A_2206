import { Link } from "react-router-dom";

export default function RulePage() {
    return (
        <div id="rule-page" style={backgroundStyle}>
            <div id="title" style={titleStyle}>
                ルール説明
            </div>

            <div id="explain" style={explainStyle}>
                <div>画面に全身が映る位置で行ってください。</div>
                <div>ポーズを無理にとろうとしないでください。</div>
                <div>動きやすくリラックスできる服装で行なってください。</div>
                <p></p>
                <div>* 心と体に優しくヨガを楽しみましょう</div>
                <p></p>
            </div>

            <Link to={`/stage/`}>
                <button className="toStage-button" style={toStageButton}>
                    ステージ選択へ
                </button>
            </Link>
        </div>
    );
}

const titleStyle = {
    textalign: "center",
    padding: "20px 0",
    fontSize: "80px",
    color: "#000000",
};

const toStageButton = {
    bottom: "20%",
    right: "100%",
    width: "30%",
    height: "100px",
    lineheight: "70px",
    fontFamily: "Inter",
    fontStyle: "italic",
    fontSize: "40px",
    lineHeight: "120px",
    textalign: "center",
    background: "#8866FF",
};

const backgroundStyle = {
    background: "#99BBFF",
    height: "100vh",
};

const explainStyle = {
    fontSize: "40px",
};
