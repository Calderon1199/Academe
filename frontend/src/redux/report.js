import { csrfFetch } from './csrf';

// Constants
const SET_REPORTS = 'session/setReports';

const getReports = (reports) => ({
    type: SET_REPORTS,
    payload: reports
});

export const setAllReports = (page = 1) => async dispatch => {
    const response = await csrfFetch(`/api/reports?page=${page}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getReports(data));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages;
    } else {
        return { server: "Something went wrong. Please try again" };
    }
};

const initialState = { reports: null, allReports: [] };

function reportReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_REPORTS:
            newState = { ...state, allReports: action.payload.reports };
            return newState;
        default:
            return state;
    }
}

export default reportReducer;
