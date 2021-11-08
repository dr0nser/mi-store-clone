import React from 'react';
import VideoCard from './VideoCard';
import "../styles/Videos.css";

const Videos = ({videos}) => {
    return (
        <div className="videos">
            <div className="innerVideos">
                {
                    videos.map((item, index) => (
                        <VideoCard index={index} key={item.image} image={item.image} name={item.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Videos
