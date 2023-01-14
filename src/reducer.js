export const initialState = {
  users: [],
  modal: false,
  deleteModal: false,
  user: {},
  id: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        users: action.data,
      };
    case 'UPDATE_USER':
      const newObj = state.users.map((obj) =>
        obj.id === action.id
          ? {
              ...obj,
              name: action.name,
              email: action.email,
              phone: action.phone,
              website: action.website,
            }
          : obj
      );
      return {
        ...state,
        modal: false,
        users: newObj,
        user: {},
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        modal: true,
        user: action.data,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: false,
      };
    case 'DELETE_USER':
      let newUsers = state.users.filter((d) => d.id !== action.id);
      return {
        ...state,
        users: newUsers,
        deleteModal: false,
      };
    case 'SHOW_DELETE':
      return {
        ...state,
        deleteModal: true,
        id: action.id,
      };
    case 'CLOSE_DELETE':
      return {
        ...state,
        deleteModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
