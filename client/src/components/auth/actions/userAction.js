const getuser = (user) => dispatch => {
    dispatch({
        type: 'GET_USER_ACTION',
        payload: user
    })
}

export default getuser;