import React, { Component } from 'react';
import { connect } from "react-redux";
import ACTIONS from '../../redux/actions';
import './List.css'
class List extends Component {
     
    handler=(id)=>{
        if(this.props.fdata[id]===true)
        {
            this.props.fdata[id]=false;
            this.props.deleteIntern(id);
        }
        else{
            this.props.fdata[id]=true;
            this.props.createIntern(id);
        }
    }
    
    render()
    {
    return (
        <div className='row eachList'>
            <div className='col-sm-2 col-md-1 col-lg-1' style={{borderRight:'1px solid #D3D3D3'}}>
                <div style={{color:'red',fontSize:'18px',marginTop:'30px'}}>{this.props.data.name}</div>
            </div>
            <div className='col-sm-7 col-md-9 col-lg-9' style={{borderRight:'1px solid #D3D3D3'}}>
                <div className='col-sm-9 col-lg-9 col-md-9'>
               <div><span style={{fontWeight:'800',fontSize:'20px'}}>{this.props.data.role}</span></div>
               <div style={{color:'#808080'}}>{this.props.data.name}</div>
               <div style={{marginTop:'10px'}}><span>{this.props.data.timeline}</span></div>
               </div>
               <div className='col-sm-3 col-md-3 col-lg-3'>
                   <div style={{marginTop:'50px'}}>
                       {this.props.data.hashtags}
                   </div>
               </div>
            </div>
            <div className='col-sm-3 col-md-2 col-lg-2'>
                <div className='flew' onClick={()=>{this.handler(this.props.data.id)}}>{this.props.fdata[this.props.data.id]===true?'Unfollow':'Follow'}</div>
                <div style={{marginTop:'10px',marginLeft:'30px',color:'green'}}>{this.props.data.timeleft}</div>
            </div>
        </div>
    )
    }
}
const mapStateToProps = state => ({
  interns: state.interns,
  fdata:state.fdata,
  modalShow:state.modalShow
});

const mapDispatchToProps = dispatch => ({
  createIntern: id => dispatch(ACTIONS.createIntern(id)),
  deleteIntern: id => dispatch(ACTIONS.deleteIntern(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(List);
