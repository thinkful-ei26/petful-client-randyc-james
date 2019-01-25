//dog actions so get and delete
//calls to our server
import {API_BASE_URL} from '../config';

//the sync actions here:
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest= () =>({
    type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = data =>({
    type: FETCH_DOG_SUCCESS,
    data
})
 
export const REMOVE_DOG_SUCCESS = 'REMOVE_DOG_SUCCESS';
export const removeDogSuccess = data =>({
    type: REMOVE_DOG_SUCCESS,
    data
})
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error =>({
    type: FETCH_DOG_ERROR,
    error
})
//the async action here:
export const fetchDog = user => dispatch =>{


    dispatch(fetchDogRequest());
    console.log('hello dog');
    fetch(`${API_BASE_URL}/api/dogs`, {
        method: 'GET',
        // no body
    })
    .then(badData=>{
        
        console.log('hello dog',badData);

        return badData.json();
    }
        
        )
    .then(goodData=>{
        console.log('hello dog data',goodData);
        dispatch(fetchDogSuccess(goodData));}
        )
    .catch(err=>{
        console.log('hello dog error',err);
        dispatch(fetchDogError(err))
    
    });
};
export const removeDog = user => dispatch =>{
    dispatch(fetchDogRequest());
    fetch(`${API_BASE_URL}/api/dogs`, {
        method: 'DELETE',
    })
    //.then(badData=>{
    //    badData.json()
   // })
    .then(goodData=>dispatch(removeDogSuccess(goodData)))
    .catch(err=>dispatch(fetchDogError(err)));
};
