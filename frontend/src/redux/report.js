import { csrfFetch } from './csrf';

//Constants
const SET_REPORTS = 'session/setReports';
const REMOVE_USER = 'session/removeUser';

const getReports = (reports) => ({
    type: SET_REPORTS,
    payload: reports
});



export const thunkLogin = (userType) => async dispatch => {
    console.log(userType, '------------')
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: email, password, userType })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages;
    } else {
        return { server: "Something went wrong. Please try again" };
    }
};

export const thunkSignup = (user, userType) => async (dispatch) => {
    let response;
    try {
        if (userType === 'admin') {
            response = await csrfFetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
        } else if (userType === 'parent') {
            response = await csrfFetch("/api/parents", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
        } else {
            response = await csrfFetch("/api/business", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
        }


        if (response.ok) {
            const data = await response.json();
            dispatch(setUser(data));
        } else {
            const errorMessages = await response.json();
            return { error: errorMessages };
        }
    } catch (error) {
        const newErrors = await error.json();
        return { errors: newErrors.errors };
    }
};

export const thunkLogout = () => async (dispatch) => {
    await csrfFetch("/api/session", {
        method: "DELETE",
    });
    dispatch(removeUser());
};


const initialState = { user: null };

function sessionReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case REMOVE_USER:
            return { ...state, user: null };
        default:
            return state;
    }
}

export default sessionReducer;
