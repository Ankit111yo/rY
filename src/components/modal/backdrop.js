import React, { Component } from 'react';
import classes from './backdrop.module.css';
import {connect} from 'react-redux';
import ACTIONS from '../../redux/actions';


class Backdrop extends Component{
    backdropclicked=()=>{
        this.props.closeback();
    }
    render(){
        let x=this.props.modalShow && this.props.interns.length ? <div className={classes.Backdrop} onClick={this.backdropclicked}></div> : null
        return (
            x
        )
    }
    
}
const mapStateToProps = state => ({
    modalShow:state.modalShow,
    interns:state.interns
  });
const mapDispatchToProps= dispatch=>({
    closeback:()=>dispatch(ACTIONS.backdropClicked())
})
export default connect(mapStateToProps,mapDispatchToProps)(Backdrop)