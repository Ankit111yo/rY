import React from 'react';
import './modal.css';
import { connect } from "react-redux";
import ACTIONS from '../../redux/actions';
import internData from '../../data/internList';
import MList from './mlist';
import Backdrop from './backdrop';
const modal = props => {
    return (
        <div>
            <Backdrop/>
        <div className='Modal'  style={{
            transform:props.show && props.interns.length? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show && props.interns.length ? 1 : 0
        }}>
            {internData.map(el=>{
                let x=''
                if(props.fdata[el.id]===true)
                   x=<MList data={el}/>
                return x;
            })}
        </div>
        </div>
    );
};

const mapStateToProps = state => ({
    interns: state.interns,
    fdata:state.fdata,
    modalShow:state.modalShow
  });
  
  const mapDispatchToProps = dispatch => ({
    createIntern: id => dispatch(ACTIONS.createIntern(id)),
    deleteIntern: id => dispatch(ACTIONS.deleteIntern(id))
  });
export default connect(mapStateToProps,mapDispatchToProps)(modal);