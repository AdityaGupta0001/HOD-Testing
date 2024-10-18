// import { useEffect, useRef } from 'react';
// import cloudinary from 'cloudinary-video-player';
// import './VideoPlayer.css'
// const VideoPlayer = ({ id, publicId, playerConfig, sourceConfig, ...props }) => {
//     const {width, height, style} = props;
//     const cloudinaryRef = useRef();
//     const playerRef = useRef();

//   useEffect(() => {
//     if (cloudinaryRef.current) return;

//     cloudinaryRef.current = cloudinary;

//     const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
//       cloud_name: 'dditdoebf',
//       secure: true,
//       controls: false,
//       ...playerConfig,
//     });
//     player.source(publicId, sourceConfig);
//   }, []);

//   return (
//     <video
//       ref={playerRef}
//       id={id}
//       className="cld-video-player cld-fluid video"
//       width={width}
//       height={height}
//       style={style}
//       {...props}
//     />
//   );
// };

// export default VideoPlayer;

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import './BgVideoPlayer.css';

const BgVideoPlayer = ({publicId}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME 
    }
  });

  const video = cld.video(publicId);

  return (
    <AdvancedVideo cldVid={video} controls={false} autoPlay muted loop className="video"/>
  );
};

export default BgVideoPlayer;