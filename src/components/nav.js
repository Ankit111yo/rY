import React, { Component } from 'react'
import './nav.css';
import {connect} from 'react-redux';
import ACTIONS from '../redux/actions';
class Nav extends Component {
    render(){
    return (
        <div className='div-nav'>
            <div className='row'>
                <div  style={{ marginLeft:'10px' }}className='col-sm-2 col-md-1 col-lg-1'>
                   <span style={{fontStyle:'bold',color:'red',fontSize:'20px'}}>Dare2</span><br/>
                   <span style={{fontStyle:'bold',color:'red',fontSize:'20px'}}>Compete</span>
                </div>
                <div className='col-sm-3 col-md-3 col-lg-3'></div>
                <div className='col-sm-3 col-md-4 col-lg-4'>
                    <span style={{fontStyle:'bold',fontWeight: '700',color:'red',fontSize:'30px'}}>List of Internships</span>
                </div>
                
                <div className='col-sm-3 col-md-3 col-lg-3'>
                    <div className='follow' onClick={()=>this.props.modalshow()}>Followed Internships</div>
                </div>

            </div>
        </div>
    )
    }
}
const mapDispatchToProps=dispatch=>({
 modalshow:()=>dispatch(ACTIONS.showmodal())
})
export default connect(null,mapDispatchToProps)(Nav);
