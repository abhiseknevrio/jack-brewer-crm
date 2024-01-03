import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import drawRect from "../utilities";

const WebcamComponent = () => {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    // Flag to prevent continuous capturing
    let capturing = false;

    // Main function
    const runCoco = async () => {
        const model = await cocossd.load();
        setInterval(() => {
            detect(model);
        }, 10);
    };

    const detect = async (model) => {
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

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const obj = await model.detect(video);

            if (obj && obj.length > 0 && obj[0].class === 'person' && obj[0].score > 0.92) {
                capture();
            }

            console.log("object", obj[0])

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx);
        }
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    // console.log("capture", imgSrc)

    useEffect(() => {
        runCoco()
    }, []);

    return (
        <div>
            {
                imgSrc ? (
                    <img
                        src={imgSrc}
                    />
                )
                    :
                    <>
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
                    </>
            }
        </div>
    )
}

export default WebcamComponent