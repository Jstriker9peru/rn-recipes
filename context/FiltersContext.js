import { createContext } from "react";

export const FiltersContext = createContext({
    currentFilters: {},
    update: () => {},
    clear: () => {},
});
