const Types = {
    CREATE_INTERN: "CREATE_INTERN",
    DELETE_INTERN: "DELETE_INTERN",
    BACKDROP_CLICKED:"BACKDROP_CLICKED",
    SHOW_MODAL:"SHOW_MODAL"
  };
  // actions
  const createIntern = id => ({
    type: Types.CREATE_INTERN,
    payload: id
  });
  
  const deleteIntern = id => ({
    type: Types.DELETE_INTERN,
    payload: id
  });

  const backdropClicked=()=>({
    type:Types.BACKDROP_CLICKED
  }
  )

  const showmodal=()=>({
    type:Types.SHOW_MODAL
  }
  )

  
  export default {
    createIntern,
    deleteIntern,
    backdropClicked,
    showmodal,
    Types
  };