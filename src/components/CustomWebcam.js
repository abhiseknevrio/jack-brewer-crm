import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
// import * as faceapi from 'face-api.js';


const CustomWebcam = () => {

    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const videoConstraints = {
        width: 400,
        height: 400,
        facingMode: "user"
    };

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setCapturedImage(imageSrc)
        },
        [webcamRef]
    );


    // const capture = async () => {
    //     try {
    //         const imageSrc = webcamRef.current.getScreenshot();

    //         if (!imageSrc) {
    //             console.log('No image captured');
    //             return;
    //         }

    //         await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');

    //         const img = await faceapi.fetchImage(imageSrc);

    //         const detections = await faceapi.detectSingleFace(img)
    //             .withFaceLandmarks()
    //             .withFaceDescriptor();

    //         if (detections) {
    //             console.log('Face detected:', detections);

    //             setCapturedImage(imageSrc);
    //         } else {
    //             console.log('No face detected');
    //         }
    //     } catch (error) {
    //         console.error('Error capturing image:', error);
    //     }
    // };


    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onClick={capture}
                imageSmoothing={true}
                mirrored={true}
            />

            <div>
                {capturedImage && (
                    <div>
                        <h2>Captured Image</h2>
                        <img src={capturedImage} alt="Captured" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomWebcam