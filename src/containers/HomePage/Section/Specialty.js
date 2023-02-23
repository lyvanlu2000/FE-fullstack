import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import specialtyImg from "../../../assets/specialty/co-xuong-khop.jpg";

class Specialty extends Component {


  render() {
  
   
    return (
        <div className="section-share section-specialty">
            <div className="section-header">
                <div className="title">
                <span className="child-title">Chuyên khoa phổ biến</span>
                <button className="btn-title">Xem thêm</button>
                </div>
            </div>
            <div className="section-content">
                <Slider {...this.props.settings}>
                    <div className="img-customize">
                        <img src={specialtyImg}/>
                        <div>Cơ xương khớp 1</div>
                    </div>
                    <div className="img-customize">
                    <img src={specialtyImg}/>
                        <div>Cơ xương khớp 2</div>
                    </div>
                    <div className="img-customize">
                        <img src={specialtyImg}/>
                        <div>Cơ xương khớp 3</div>
                    </div>
                    <div className="img-customize">
                    <img src={specialtyImg}/>
                        <div>Cơ xương khớp 4</div>
                    </div>
                    <div className="img-customize">
                        <img src={specialtyImg}/>
                        <div>Cơ xương khớp 5</div>
                    </div>
                    <div className="img-customize">
                        <img src={specialtyImg}/>
                        <div>Cơ xương khớp 6</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
