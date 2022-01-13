<<<<<<< HEAD
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
=======
import { useEffect } from "react";
import "./LoaderPage.scss";

export const LoaderPage = () => {
  useEffect(() => {
    const Redirection = () => {
      setTimeout(() => {
      }, 3000);
    };

    Redirection();
  }, []);

  return (
    <div>
      <h1>Loading</h1>
>>>>>>> 8103e329ae292f60f5104d2130af427295bf8a96
    </div>
  );
};
