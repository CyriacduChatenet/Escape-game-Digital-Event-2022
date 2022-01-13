import "./LoaderPage.scss";

export const LoaderPage = () => {
  return (
    <div className="loaderpage">
      <div class="logo-displaying">
        <h1 class="current-logo">Chargement logo</h1>
        <div class="loading"></div>
        <div class="team-loading-displaying"></div>
        <h2 class="current-loading">
          En attente de co-équipiers<br></br>
          (2/4)
        </h2>
      </div>
    </div>
  );
};
