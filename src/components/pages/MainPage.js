import React from "react";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary";
import { RandomChar } from "../randomChar/RandomChar";
import decoration from "../../resources/img/vision.png";
import { CharSearchForm } from "../CharSearchForm/CharSearchForm";

export const MainPage = () => {
  const [selectedChar, setChar] = React.useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm/>
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};