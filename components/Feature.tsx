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
    <div className="container hidden xl:flex ">
      <div className="marvel-device macbook">
        <div className="top-bar"></div>
        <div className="camera"></div>
        <div className="screen ">
          <div className="flex flex-1 h-full justify-center items-center bg-black">
            <img src="/assets/main_poster.jpeg"></img>
            {/* <video ref={ref} loop autoPlay poster="assets/main_poster.jpeg" src="assets/main_feature.mp4"></video> */}
          </div>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
};

export default Feature;
