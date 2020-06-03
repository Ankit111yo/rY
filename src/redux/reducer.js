import ACTIONS from "./actions";
import _ from "lodash";


const data=[]
for(let i=0;i<4;i++)
data[i]=false;
const defaultState = {
  interns: [],
  fdata:data,
  modalShow:false
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_INTERN: {
      console.log(action);

      let intern = action.payload;
      
      let newState = _.cloneDeep(state);
      newState.interns.push(intern);
      newState.fdata[action.payload]=true;
      newState.modalShow=true;
      console.log(newState);
      return newState;
    }

    case ACTIONS.Types.DELETE_INTERN: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(action.payload);
      newState.interns.splice(index, 1);
      if(newState.interns.size===0)
      newState.modalShow=false;
      newState.fdata[action.payload]=false;
      return newState;
    }

    case ACTIONS.Types.BACKDROP_CLICKED:{
      let newState = _.cloneDeep(state);
      newState.modalShow=false;
      return newState;
    }

    case ACTIONS.Types.SHOW_MODAL:{
      let newState = _.cloneDeep(state);
      newState.modalShow=true;
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;