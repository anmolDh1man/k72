const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover rounded-xl"
        autoPlay
        loop
        muted
        playsInline
        src="/media/k-72 video.mp4"
      ></video>
    </div>
  );
}

export default Video;
