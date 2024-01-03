import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import Webcam from 'react-webcam';

const MODEL_PATH = '/model/model.json'

const WebcamComponent = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [model, setModel] = useState(null);

    console.log(model)

    useEffect(() => {

        const loadModel = async () => {
            try {
                const loadedModel = await tf.loadLayersModel(MODEL_PATH,)
                // console.log(tf.zeros([1, 224, 224, 3]))
                setModel(loadedModel)
                setInterval(() => {
                    detect(loadedModel);
                }, 1000);
            } catch (error) {
                console.error('Error loading the model:', error);
            }
        };

        loadModel();
    }, []);

    const detect = async (model) => {
        if (webcamRef.current !== undefined &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4) {

            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // for detections
            const obj = await model.predict(video)
            console.log("model", obj)
        }
    }


    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored={true}
                style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex: 9,
                    width: 640,
                    height: 480,
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex: 9,
                    width: 640,
                    height: 480,
                }}
            />
        </div>
    )
}

export default WebcamComponent