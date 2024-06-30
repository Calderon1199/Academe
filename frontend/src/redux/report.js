import { csrfFetch } from './csrf';

// Constants
const SET_REPORTS = 'session/setReports';

const getReports = (reports, count) => ({
    type: SET_REPORTS,
    payload: { reports, count }
});

export const setAllReports = (page = 1, limit = 10) => async dispatch => {
    const response = await csrfFetch(`/api/reports?page=${page}&limit=${limit}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getReports(data.reports, data.count));
    } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages;
    } else {
        return { server: "Something went wrong. Please try again" };
    }
};

const initialState = { reports: [], count: 0, allReports: [] };

function reportReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_REPORTS:
            newState = { ...state, allReports: action.payload.reports, count: action.payload.count };
            return newState;
        default:
            return state;
    }
}

export default reportReducer;
