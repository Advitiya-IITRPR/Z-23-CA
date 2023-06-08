export async function fetchLeadersData(dispatch, navigate) {
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile/leaderBoard`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: 'GET_LEADERS_ACTION', payload: data.sort((a, b) => (a.points > b.points ? -1 : 1)) });
        })
        .catch((err) => {
            // toast.error("Something went wrong...");
            navigate("/");
            return;
        });
    return;
}