import { createSlice } from '@reduxjs/toolkit';
import * as menuApi from '../api/menuApi.js.js';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {

    },
    reducers: {
        menuFetched: (state, { payload: fetchedMenu }) => {
            state.menu = {};
            state.menu[fetchedMenu.routeId] = fetchedMenu;
        },
    },
});

export const { reducer, actions } = menuSlice;

export const fetchMenuById = (menuId) => async (dispatch) => {
   
    const { menuFetched } = menuSlice.actions;

    try {
        const fetchedMenu = await menuApi.getMenuData(menuId);
        fetchedMenu.routeId = menuId;
        
        dispatch(menuFetched(fetchedMenu));
    } catch (error) {
        throw error;
    }
};
