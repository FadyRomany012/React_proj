import { render } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import microfon from "./assets/microfon.svg";
import "./Home_page/Home_page.scss";
import Modal from "react-bootstrap/Modal";

import React, { Component } from "react";

export default class Model extends Component {
  render() {
    let modelStyle = {
      display: "block",
    };

    return (
      <div
        style={modelStyle}
        className="modal show fade"
        id="largeModal"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg model_courses">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel"></h4>
              <button
                onClick={this.props.hide}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card-flyer">
                <div className="text-box">
                  <div className="row justify-content-center">
                    {" "}
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      {" "}
                      <div className="image-box">
                        <img
                          className="img-fluid img_course_model"
                          src={this.props.img}
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <div className="text-container">
                        <h6>{this.props.title}</h6>
                        <p>{this.props.desc}</p>{" "}
                      </div>
                    </div>
                    <Button variant="" className="btn-record mt-5">
                      {" "}
                      <img src={microfon} alt="" />
                      <span> Start Recording</span>
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
