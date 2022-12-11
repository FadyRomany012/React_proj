import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import microfon from "../assets/microfon.svg";
import watch from "../assets/watch.svg";
import icon_top from "../assets/icon_top.svg";
import Modal from "react-bootstrap/Modal";
import data from "../data";
import Button from "react-bootstrap/Button";
import "../Home_page/Home_page.scss";
import Model_data from "../Model.js";
const Home_page = () => {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, title, desc) => {
    let tempData = [img, title, desc];
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };
  return (
    <div>
      {/* {console.log(data.recordData)} */}
      <div className="row header-top">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h3 className="header-top-date">28 June 2021</h3>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <img src={icon_top} />
        </div>
      </div>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {data.recordData.map((item, index) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  {item.type === "Record" ? (
                    <div className="" key={index}>
                      <div className="card-flyer">
                        <div className="text-box">
                          <div className="image-box">
                            <img
                              className="img-fluid"
                              src={item.imagSrc}
                              alt=""
                            />
                          </div>
                          <div className="text-container">
                            <h6>{item.title}</h6>
                            <p>How was the zoo (summary)</p>
                            <Button
                              className="btn-record"
                              onClick={() =>
                                getData(item.imagSrc, item.title, item.desc)
                              }
                            >
                              <img src={microfon} alt="" />
                              <span> Record Answer</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <a href="">
                        <div className="card-flyer">
                          <div className="text-box">
                            <div className="image-box">
                              <img src={item.imagSrc} alt="" />
                            </div>
                            <div className="text-container">
                              <h6>{item.title}</h6>
                              <p>
                                We will ask you some questions after that
                                (subTitle)
                              </p>
                              <button variant="" className="btn-watch">
                                <img src="{watch}" alt="" />
                                <span> watch</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {model === true ? (
        <Model_data
          img={tempdata[1]}
          title={tempdata[2]}
          desc={tempdata[3]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home_page;
