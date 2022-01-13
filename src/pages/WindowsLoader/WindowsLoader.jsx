import "./WindowsLoader.scss";

export const WindowsLoader = () => {
  return (
    <div className="windowsLoaderPage">
      <div class="wrapper">
        <div class="loader">
          <span class="pip-0"></span>
          <span class="pip-1"></span>
          <span class="pip-2"></span>
          <span class="pip-3"></span>
          <span class="pip-4"></span>
          <span class="pip-5"></span>
        </div>
        <h1 className="windowsLoadingText">Loading...</h1>
      </div>
    </div>
  );
};
