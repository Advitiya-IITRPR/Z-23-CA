const getprofile = (profile) => dispatch => {
    dispatch({
        type: 'GET_PROFILE_ACTION',
        payload: profile
    })
}

export default getprofile;