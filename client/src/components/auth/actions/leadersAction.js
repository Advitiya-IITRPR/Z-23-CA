const getleaders = (leaders) => dispatch => {
    dispatch({
        type: 'GET_LEADERS_ACTION',
        payload: leaders
    })
}

export default getleaders;