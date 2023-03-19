import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import OutStandingDoctorImg from "../../../assets/outstandingdoctor/bs.jpg";
import * as actions from "../../../store/actions";
import {LANGUAGES} from '../../../utils'
import { withRouter} from "react-router";


class OutStandingDoctor extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }

  componentDidMount() {
    this.props.loadTopDoctors();
  }

  handleViewDetailDoctor = (doctor) =>{
    // console.log('check detail doctor',doctor)
    this.props.history.push(`/detail-doctor/${doctor.id}`)
  }

  render() {
    let arrDoctors = this.state.arrDoctors;
    let {language}= this.props;
    // arrDoctors=arrDoctors.concat(arrDoctors).concat(arrDoctors)
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-header">
          <div className="title">
            <span className="child-title">
            <FormattedMessage id="homepage.outstanding-doctor"/>
            </span>
            <button className="btn-title">
            <FormattedMessage id="homepage.more-infor"/>
            </button>
          </div>
        </div>
        <div className="section-content">
          <Slider {...this.props.settings}>
            {arrDoctors &&
              arrDoctors.length > 0 &&
              arrDoctors.map((item, index) => {
                let imageBase64='';
                if(item.image){
                  imageBase64= new Buffer(item.image,'base64').toString('binary');
            
                }
              
                let nameVi=`${item.positionData.valueVi},${item.lastName} ${item.firstName} `;
                let nameEn=`${item.positionData.valueEn},${item.firstName} ${item.lastName}`;
                return (
                  <div className="outer-bg" key={index}>
                    <div className="img-customize outstanding-doctor"
                    onClick={()=>this.handleViewDetailDoctor(item)}
                    
                    >
                      {/* <img src={item.image} /> */}
                      <div className="img" style={{backgroundImage: `url(${imageBase64})`}}>
                      
                      </div>

                      <div className="position text-center">
                        <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                        <div>Cơ Xương Khớp 1</div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language:state.app.language,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor)) 
