import React,{ useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// TODO1 - import required model here
// e.g.
import Webcam from 'react-webcam';
import "./GamePage.module.css";
// TODO2 - import drawing utility here

const runCoco = async () => {
    // 3. TODO - Load network
    const net = await tf.loadGraphModel('url')

    setInterval(() => {
        detect(net);
    }, 16.7)
}

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
    }
}

export default function GamePage() {
    return (
        <>
            <h1>GamePage</h1>
        </>
    );
}
