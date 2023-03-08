import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorSchedule.scss'
import moment from 'moment';
import localization from 'moment/locale/vi'
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';




class DoctorSchedule extends Component {

    constructor(props){
        super(props);
        this.state={
            allDays:[],
            allAvailablleTime:[]
        }
    }

    async componentDidMount(){
         let {language}=this.props
        
         console.log('moment vie: ',moment(new Date()).format('dddd - DD/MM'))
         console.log('moment eng: ',moment(new Date()).locale('en').format("ddd-DD/MM"))

        this.setArrDays(language)
    }   

    capitalizeFirstleLetter(string){
        return string.charAt().toUpperCase() + string.slice(1);
    }

    setArrDays=(language)=>{
        let allDays=[]
         for(let i=0; i<7;i++){
            let object={}
            if(language===LANGUAGES.VI){
                let lableVi = moment(new Date()).add(i,'days').format('dddd - DD/MM');
                object.label= this.capitalizeFirstleLetter(lableVi)
            }else{
                object.label=moment(new Date()).add(i,'days').locale('en').format("ddd-DD/MM");
            }

            object.value=moment(new Date()).add(i,'days').startOf('day').valueOf();

            allDays.push(object);
         }

         

         this.setState({
            allDays:allDays
         })


    }

    componentDidUpdate(prevProps,prevState,snapshot){
        if(this.props.language != prevProps.language){
            this.setArrDays(this.props.language)
        }
    }

    handleOnchangeSelect=async(event)=>{
        if(this.props.doctorIdFromParent && this.props.doctorIdFromParent !==-1){
            let doctorId=this.props.doctorIdFromParent;
            let date=event.target.value
            let res=await getScheduleDoctorByDate(doctorId,date)
            
            
            if(res && res.errCode===0){

                this.setState({
                    allAvailablleTime:res.data ? res.data : []
                })
            }
         console.log('check res schedule from react',res)
        }
    }
    
    render() {
        let {allDays,allAvailablleTime}=this.state;
        let {language}=this.props;
        
        return(
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select 
                    
                    onChange={(event)=>this.handleOnchangeSelect(event)}
                    >
                        {allDays && allDays.length>0 &&
                        allDays.map((item,index)=>{
                            return(
                                <option
                                    value={item.value}
                                    key={index}
                                >
                                    {item.label}
                                </option>
                                )
                            })
                        }
                    </select>

                </div>
                <div className='all-available-time'>
                        <div className='text-calendar'>
                           <i className='fas fa-calendar-alt'><span>Lịch khám</span></i>
                        </div>
                        <div className='time-content'>
                            {allAvailablleTime && allAvailablleTime.length>0 ?
                            allAvailablleTime.map((item,index)=>{
                                let timeDisplay = language === LANGUAGES.VI ?
                                item.timeTypeData.valueVi:item.timeTypeData.valueEn;
                                
                                return(
                                    <button key={index}>
                                       {timeDisplay}
                                    </button>
                                )
                            })
                            :
                            <div>Ngày này đã hết thời gian đặt lịch</div>
                        }
                            
                        </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        language:state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
