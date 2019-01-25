//cat actions so get and delete
//calls to our server

//the sync actions here:


export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest= () =>({
    type: FETCH_CAT_REQUEST,
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data =>({
    type: FETCH_CAT_SUCCESS,
    data
})
 
export const REMOVE_CAT_SUCCESS = 'REMOVE_CAT_SUCCESS';
export const removeCatSuccess = data =>({
    type: REMOVE_CAT_SUCCESS,
    data
})
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error =>({
    type: FETCH_CAT_ERROR,
    error
})
//the async action here:
export const fetchCat = user => dispatch =>{
    dispatch(fetchCatRequest());
    fetch(`/api/cats`, {
        method: 'GET',
        // no body
    })
    //.then(badData=>{
    //    badData.json()
   // })
    .then(goodData=>dispatch(fetchCatSuccess(goodData)))
    .catch(err=>dispatch(fetchCatError(err)));
};
export const removeCat = user => dispatch =>{
    dispatch(fetchCatRequest());
    fetch(`/api/cats`, {
        method: 'DELETE',
    })
    //.then(badData=>{
    //    badData.json()
   // })
    .then(goodData=>dispatch(removeCatSuccess(goodData)))
    .catch(err=>dispatch(fetchCatError(err)));
};
