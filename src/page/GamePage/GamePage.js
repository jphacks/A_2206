import { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// TODO1 - import required model here
// e.g.
import Webcam from "react-webcam";
// TODO2 - import drawing utility here
import { drawRect } from "./utilities";
import styles from "./GamePage.module.css";
// import senshi from "./senshi.png";

export default function GamePage() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runCoco = async () => {
        // 3. TODO - Load network
        const net = await tf.loadGraphModel(
            "https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json"
        );

        setInterval(() => {
            detect(net);
        }, 16.7);
    };

    const detect = async (net) => {
        // check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width;
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // TODO4 Make Detection
            const img = tf.browser.fromPixels(video);
            const resized = tf.image.resizeBilinear(img, [640, 480]);
            const casted = resized.cast("int32");
            const expanded = casted.expandDims(0);
            const obj = await net.executeAsync(expanded);
            console.log(obj);

            const boxes = await obj[1].array();
            const classes = await obj[2].array();
            const scores = await obj[4].array();

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");

            // TODO5 Update drawing utility
            requestAnimationFrame(() => {
                drawRect(
                    boxes[0],
                    classes[0],
                    scores[0],
                    0.8,
                    videoWidth,
                    videoHeight,
                    ctx
                );
            });

            tf.dispose(img);
            tf.dispose(resized);
            tf.dispose(casted);
            tf.dispose(expanded);
            tf.dispose(obj);
        }
    };

    useEffect(() => {
        runCoco();
    }, []);

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <Webcam
                    ref={webcamRef}
                    muted={true}
                    mirrored={true}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 8,
                        width: 640,
                        height: 480,
                    }}
                />
            </header>
        </div>
    );
}
