export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const updateFilters = (updatedFilters) => {
    return {
        type: UPDATE_FILTERS,
        updatedFilters
    }
};

export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS
    }
};