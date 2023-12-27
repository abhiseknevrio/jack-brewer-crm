import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
    const webcamRef = useRef(null);
    // const [capturedImage, setCapturedImage] = useState(null)

    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            const loadedModel = await tf.loadLayersModel('/model/face-detection-yolo-model.pt');
            setModel(loadedModel);
        };

        loadModel();
    }, []);

    const handlePredictClick = async () => {
        if (webcamRef.current) {
            const imageCapture = webcamRef.current.getScreenshot();
            const imageElement = new Image();
            imageElement.src = imageCapture;
            imageElement.width = 640; // adjust width if needed

            const imageTensor = tf.browser.fromPixels(imageElement);
            const expandedImage = imageTensor.expandDims(0);

            const predictions = await model.predict(expandedImage);

            console.log(predictions);
            setPredictions(predictions.dataSync());
        }
    };


    // const capture = useCallback(
    //     () => {
    //         const imageSrc = webcamRef.current.getScreenshot();
    //         setCapturedImage(imageSrc)
    //     },
    //     [webcamRef]
    // );


    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />

            <div>
                <button onClick={handlePredictClick}>Predict</button>
                {predictions && <div>{predictions}</div>}
            </div>
        </>
    )
}

export default WebcamComponent