import React, { Component } from "react";
import { connect } from "react-redux";
import './Specialty.scss'
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import {getAllSpecialty} from "../../../services/userService";
import { withRouter} from "react-router";
class Specialty extends Component {
    constructor(props){
        super(props)
        this.state={
            dataSpecialty:[]
        }
    }

    async componentDidMount(){
        let res =await getAllSpecialty();
        console.log('check res specialty',res)
        if(res && res.errCode===0){
            this.setState({
                dataSpecialty:res.data ? res.data: []
            })
        }
    }

    handleViewDetailSpecialty=(specialtyId)=>{
        this.props.history.push(`/detail-specialty/${specialtyId.id}`)
    }

  render() {
    let {dataSpecialty}=this.state
   
    return (
        <div className="section-share section-specialty">
            <div className="section-header">
                <div className="title">
                <span className="child-title"><FormattedMessage id="homepage.specialty-popular"/></span>
                <button className="btn-title"><FormattedMessage id="homepage.more-infor"/></button>
                </div>
            </div>
            <div className="section-content">
                <Slider {...this.props.settings}>
                    {dataSpecialty && dataSpecialty.length>0 &&
                        dataSpecialty.map((item,index)=>{
                            return(
                                <div className="img-customize" key={index}
                                onClick={()=>this.handleViewDetailSpecialty(item)}
                                >
                                    <div className='inside'>
                                    <img className="img" src={item.image}/>
                                    </div>
                                    <div className="specialty-name">{item.name}</div>
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

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty))
