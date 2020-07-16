import { UPDATE_FILTERS, CLEAR_FILTERS } from "../actions/filters-actions";

const initialFilters = {
    category: [],
    diet: [],
    intolerance: [],
    cuisine: []
}

export const filtersReducer = (state = initialFilters, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
          return { ...action.updatedFilters};
        case CLEAR_FILTERS:
          return initialFilters;
        default:
          return state;
    }
}