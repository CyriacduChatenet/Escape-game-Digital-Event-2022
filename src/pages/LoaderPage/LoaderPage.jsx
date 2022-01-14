import "./LoaderPage.scss";

export const LoaderPage = () => {
  return (
    <div>
      <video  autoPlay className="loader_video" loop muted>
        <source src="/assets/video/loadingVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
