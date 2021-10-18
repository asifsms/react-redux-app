import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Asif",
            Group: "B+",
        },
    ],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type ) {
        case ActionTypes.SELECTED_PRODUCTS:
            return state;
        default:
            return state;
    }
};