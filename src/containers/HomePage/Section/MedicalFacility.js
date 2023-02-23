import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import medicalFacilityImg from "../../../assets/medical-facility/vietduc.jpg";


class MedicalFacility extends Component {

    render() {
    

        return (
            <div className="section-share section-medical-facility">
            <div className="section-header">
                <div className="title">
                <span className="child-title">Cơ sở y tế nổi bật</span>
                <button className="btn-title">Xem thêm</button>
                </div>
            </div>
            <div className="section-content">
                <Slider {...this.props.settings}>
                    <div className="img-customize">
                        <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 1</div>
                    </div>
                    <div className="img-customize">
                    <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 2</div>
                    </div>
                    <div className="img-customize">
                        <div>
                        <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 3</div>
                        </div>
                    </div>
                    <div className="img-customize">
                    <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 4</div>
                    </div>
                    <div className="img-customize">
                    <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 5</div>
                    </div>
                    <div className="img-customize">
                    <img src={medicalFacilityImg}/>
                        <div>Hệ thống y tế Việt Đức 6</div>
                    </div>
                </Slider>
            </div>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
