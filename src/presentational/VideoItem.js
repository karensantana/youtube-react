import '../styles/VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={()=> onVideoSelect(video)}>  
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header"> {video.snippet.title} </div>
            </div>
        </div>
    );
}

export default VideoItem;