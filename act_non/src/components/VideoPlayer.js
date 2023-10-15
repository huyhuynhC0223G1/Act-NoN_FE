import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = new Plyr(videoRef.current);
        return () => {
            player.destroy();
        };
    }, []);

    return (
        <div className="video">
            <div style={{ overflow: 'hidden' }}>
                <div className="video-content position-relative open-up">
                    <div className="video-bg" style={{ color: 'white' }}>
                        <video ref={videoRef} playsInline controls>
                            <source src="https://youtu.be/cpx2r52E08o" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;