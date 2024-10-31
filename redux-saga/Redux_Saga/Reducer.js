import {GET,ADD,DELETE,UPDATE} from './Action'
const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type){
    case GET: return {...state, items: action.payload};
    case ADD: return {...state, items: action.payload};
    case UPDATE: return{...state, items: state.items.map(item => item.id === action.payload.id ? action.payload : item)};
    case DELETE: return{...state, items: state.items.filter(item => item.id !== action.payload )};
    default: return state;
  }
}
 