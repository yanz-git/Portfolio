import React from "react";

class Formation extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "license", content: "License", lieu: "Université Savoie Mont Blanc - Bourget du Lac", date: "2018 - 2023" },
        { id: "BAC", content: "Baccaulérat", lieu: "Lycée du Bugey", date: "2015 - 2018" },
      ]
    };
  }

  render() {
    return (
      <section id="formation" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                  <h5 className="title-left">Formations</h5>
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="formation-comp">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <br></br>
                            <p className="formation-content"> <span>{skill.content}</span><br /> </p>
                            <p className="formation-skill"><span>{skill.lieu} <br></br> {skill.date}</span> </p>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Formation;