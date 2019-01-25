import {FETCH_CAT_REQUEST,FETCH_CAT_SUCCESS,REMOVE_CAT_SUCCESS,FETCH_CAT_ERROR} from '../actions/Cat';

const initialState = {
    catsList: [{
      imageURL:'', 
      imageDescription: '',
      name: 'No cats availible for adoption',
      sex: '',
      age: null,
      breed: '',
      story: ''
    }],
    loading: false,
    error: null
};

export default function catReducer(state=initialState, action){
  if(action.type=== FETCH_CAT_REQUEST){
        // CHANGE STATE TO LOADING TRUE
    return Object.assign({},state,{
      loading: true
    })
  }
  else if(action.type=== FETCH_CAT_SUCCESS){
 
    return Object.assign({},state,{
      catsList: [...action.data],
      loading: false
    })

  }
  else if(action.type=== REMOVE_CAT_SUCCESS){
    return Object.assign({}, state, {
        catsList : [...action.data],
        loading: false
    });
  }
  else if(action.type=== FETCH_CAT_ERROR){
    //CHANGE STATE TO ERROR IS THE ERROR
    return Object.assign({}, state, {
        error: action.error,
        loading: false
    });    
  }

  return state;        
}