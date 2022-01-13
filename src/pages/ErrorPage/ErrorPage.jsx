import "./ErrorPage.scss";
export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errorPageBlock">
        <div className="errorPageContainer">
          <h1 className="errorType">
            <span className="errorTypeNumber"> 404 </span> <br />
            ERROR: REDACTED
          </h1>
          <p className="errorText">
            This page could not be <br />
            found. It either doesn't exist <br />
            or was deleted. Or perphaps <br />
            you don't exist
          </p>

          <div className="errorPageFooter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" className="errorPageFooterImg"/></svg>
            <p className="backToHomeText">Back to homepage</p>
          </div>
        </div>
      </div>
    </div>
  );
};
