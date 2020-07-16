import { useEffect, useState, useCallback, useReducer } from "react";

const UPDATE_FILTERS = "UPDATE_FILTERS";
const CLEAR_FILTERS = "CLEAR_FILTERS";
const initialFilters = {
    category: [],
    diet: [],
    intolerance: [],
    cuisine: []
}

const filtersReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
          return action.updatedFilters;
        case CLEAR_FILTERS:
          return initialFilters;
        default:
          return state;
    }
}

export const useFilters = () => {
    const [currentFilters, dispatch] = useReducer(filtersReducer, initialFilters);

    // useEffect(() => {
    //     console.log('These are the currentfilters in useFilters', currentFilters)
    // }, [currentFilters]);

    const updateFilters = (updatedFilters) => {
        console.log('you clicked update filters', updatedFilters);
        dispatch({ type: CLEAR_FILTERS, updatedFilters });
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    }

    return [currentFilters, updateFilters, clearFilters];
}