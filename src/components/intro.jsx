import React from "react";
import "./stars.scss";
import Typed from "react-typed";


class Intro extends React.Component {
  render() {

    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title-mb-4">Bonjour ! Je suis Yanis</h1><br></br>
              <p className="intro-subtitle"> Je suis Dévelopeur <b>
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      " Informatique ",
                      " Front End ",
                      " Back  End ",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
                </b>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  Mon Portfolio
                </a>
                    <br></br>
                    <br></br>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="../CV.pdf" download="CV.pdf"
                  role="button"
                >
                  Télécharger mon CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
