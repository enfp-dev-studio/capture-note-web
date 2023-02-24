import React, { useEffect, useRef } from "react";
type Props = {};

const Feature = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.loop = true;
      ref.current.onloadeddata = () => {
        ref.current?.play();
      };
    }
  }, [ref.current]);

  return (
    <div className="hidden md:flex md:justify-center w-full">
      <div className="device">
        <div className="device-macbook device-spacegray self-center">
          <div className="device-frame">
            <video
              poster="/assets/main_example_1.webp"
              // src="/assets/main_video.mp4"
              src="https://i.imgur.com/CWZKSKZ.mp4"
              style={{
                marginTop: -10,
                height: 360,
                objectFit: "cover",
              }}
              autoPlay
              loop
            ></video>
          </div>
          <div className="device-power"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Feature;
