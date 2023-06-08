export async function fetchProfileData(dispatch, email, navigate) {
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile/getUser`, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ id: email }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data === "not found") {
                navigate("signup-step-2")
                return;
            }
            dispatch({ type: 'GET_PROFILE_ACTION', payload: data });
        })
        .catch((err) => {
            // toast.error("Something went wrong...");
            navigate("/");
            return;
        });
    return;
}