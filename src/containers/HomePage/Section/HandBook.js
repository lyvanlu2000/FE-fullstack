import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import HandBookImg from "../../../assets/handbook/hand.png";

class HandBook extends Component {


  render() {
  
   
    return (
        <div className="section-share section-HandBook">
            <div className="section-header">
                <div className="title">
                <span className="child-title">Cẩm nang</span>
                <button className="btn-title">Xem thêm</button>
                </div>
            </div>
            <div className="section-content">
                <Slider {...this.props.settings}>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 1</div>
                        </div>
                    </div>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 2</div>
                        </div>
                    </div>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 3</div>
                        </div>
                    </div>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 4</div>
                        </div>
                    </div>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 5</div>
                        </div>
                    </div>
                    <div className="img-customize section-HandBook">
                        <div className='inside'>
                        <img className="img" src={HandBookImg}/>
                        <div>Cơ xương khớp 6</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
