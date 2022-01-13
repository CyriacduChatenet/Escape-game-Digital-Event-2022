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
    </div>
  );
};
