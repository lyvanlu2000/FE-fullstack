import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import OutStandingDoctorImg from "../../../assets/outstandingdoctor/bs.jpg";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-header">
          <div className="title">
            <span className="child-title">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-title">Xem thêm</button>
          </div>
        </div>
        <div className="section-content">
          <Slider {...this.props.settings}>
            <div className="outer-bg">
              <div className="img-customize outstanding-doctor">
                <img src={OutStandingDoctorImg} />
                <div className="position text-center">
                  <div>Giáo sư, Tiến Sĩ Eric </div>
                  <div>Cơ Xương Khớp 1</div>
                </div>
              </div>
            </div>
            <div className="outer-bg">
              <div className="img-customize outstanding-doctor">
                <img src={OutStandingDoctorImg} />
                <div className="position text-center">
                  <div>Giáo sư, Tiến Sĩ Eric </div>
                  <div>Cơ Xương Khớp 2</div>
                </div>
              </div>
            </div>
            <div className="outer-bg">
              <div className="img-customize outstanding-doctor">
                <img src={OutStandingDoctorImg} />
                <div className="position text-center">
                  <div>Giáo sư, Tiến Sĩ Eric </div>
                  <div>Cơ Xương Khớp 3</div>
                </div>
              </div>
            </div>
            <div className="outer-bg">
              <div className="img-customize outstanding-doctor">
                <img src={OutStandingDoctorImg} />
                <div className="position text-center">
                  <div>Giáo sư, Tiến Sĩ Eric </div>
                  <div>Cơ Xương Khớp 4</div>
                </div>
              </div>
            </div>
            <div className="outer-bg">
            <div className="img-customize outstanding-doctor">
              <img src={OutStandingDoctorImg} />
              <div className="position text-center">
                <div>Giáo sư, Tiến Sĩ Eric </div>
                <div>Cơ Xương Khớp 5</div>
              </div>
            </div>
            </div>
            <div className="outer-bg">
              <div className="img-customize outstanding-doctor">
                <img src={OutStandingDoctorImg} />
                <div className="position text-center">
                  <div>Giáo sư, Tiến Sĩ Eric </div>
                  <div>Cơ Xương Khớp 6</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
