export const leftArrow = 'arrow_back';
export const rightArrow = 'arrow_forward';

export const handleNavigation = (state, direction) => ({
    ...state,
    pageIndex: direction === leftArrow ? --state.pageIndex
        : direction === rightArrow ? ++state.pageIndex
            : state.pageIndex
});