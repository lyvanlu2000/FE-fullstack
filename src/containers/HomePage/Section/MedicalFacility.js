import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import medicalFacilityImg from "../../../assets/medical-facility/vietduc.jpg";
import {getAllClinic} from "../../../services/userService"
import { withRouter} from "react-router";
class MedicalFacility extends Component {

    constructor(props){
        super(props);
        this.state={
            dataClinics:[]
        }
    }

    async componentDidMount(){
        let res = await getAllClinic();
        if(res && res.errCode===0){
            this.setState({
                dataClinics:res.data ? res.data : []
            })
        }
    }

    handleViewDetailClick=(clinic)=>{
        this.props.history.push(`/detail-clinic/${clinic.id}`)
    }

    render() {
        let {dataClinics}=this.state

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
                    {dataClinics && dataClinics.length>0 &&
                    dataClinics.map((item,index)=>{
                        return(
                            <div className="img-customize section-medical-facility" key={index}
                            onClick={()=> this.handleViewDetailClick(item)}
                            >
                                <div className='inside'>
                                <img className='img' src={item.image}/>
                                
                                </div>
                                <div>{item.name}</div>
                            </div>
                        )
                    })
                    }
                    
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
