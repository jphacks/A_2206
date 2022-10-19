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
}

export default function GamePage() {
    return (
        <>
            <h1>GamePage</h1>
        </>
    );
}
