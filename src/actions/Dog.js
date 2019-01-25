//dog actions so get and delete
//calls to our server

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
    fetch(`/api/dogs`, {
        method: 'GET',
        // no body
    })
    //.then(badData=>{
    //    badData.json()
   // })
    .then(goodData=>dispatch(removeDogSuccess(goodData)))
    .catch(err=>dispatch(fetchDogError(err)));
};
export const removeDog = user => dispatch =>{
    dispatch(fetchDogRequest());
    fetch(`/api/dogs`, {
        method: 'DELETE',
    })
    //.then(badData=>{
    //    badData.json()
   // })
    .then(goodData=>dispatch(removeDogSuccess(goodData)))
    .catch(err=>dispatch(fetchDogError(err)));
};
