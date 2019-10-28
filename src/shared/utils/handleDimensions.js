export const mobile = 770;
export const tablet = 1200;

export const mobileBlock = 1;
export const tabletBlock = 2;
export const maxPageBlocks = 3;

export const handleDimensions = (state, dimension) => ({
    ...state,
    pageSize: dimension < mobile ? mobileBlock :
        dimension < tablet ? tabletBlock :
            maxPageBlocks
});
