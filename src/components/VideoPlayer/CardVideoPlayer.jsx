import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

const CardVideoPlayer = ({publicId}) => {
  const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }
  });

  const video = cld.video(publicId);

  return (
    <AdvancedVideo cldVid={video} controls={false} autoPlay muted loop style={{ width: '100%', height: '420px' }} className="object-cover"/>
  );
};

export default CardVideoPlayer;