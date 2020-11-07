import api from './api.js.js';

export const getMenuData = async (menuId) => {
    const response = await api.get(`/menus/${menuId}`);
    
    return response.data;
};
