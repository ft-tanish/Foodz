export const filterData = (searchText, restraunts) => {
    const filterData = restraunts?.filter((restaurant) =>
        restaurant?.data?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
}