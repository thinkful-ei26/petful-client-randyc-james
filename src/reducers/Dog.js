import {FETCH_DOG_REQUEST,FETCH_DOG_SUCCESS,REMOVE_DOG_SUCCESS,FETCH_DOG_ERROR} from '../actions/Dog';

const initialState = {
    dogsList: [{
      imageURL:'', 
      imageDescription: '',
      name: 'No dogs availible for adoption',
      sex: '',
      age: null,
      breed: '',
      story: ''
    }],
    loading: false,
    error: null
};

export default function dogReducer(state=initialState, action){
  if(action.type=== FETCH_DOG_REQUEST){
        // CHANGE STATE TO LOADING TRUE
    return Object.assign({},state,{
      loading: true
    })
  }
  else if(action.type=== FETCH_DOG_SUCCESS){

    return Object.assign({},state,{
      dogsList: [action.data],
      loading: false
    })

    // return Object.assign({},state,{
    //   dogsList: [...action.data],
    //   loading: false
    // })

  }
  else if(action.type=== REMOVE_DOG_SUCCESS){
    return Object.assign({}, state, {
        dogsList : [action.data],
        loading: false
    });
  }
  else if(action.type=== FETCH_DOG_ERROR){
    //CHANGE STATE TO ERROR IS THE ERROR
    return Object.assign({}, state, {
        error: action.error,
        loading: false
    });    
  }

  return state;        
}