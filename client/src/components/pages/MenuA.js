import React, { useEffect, useState } from 'react';
import '../../App.css';
import MenuCard from '../MenuCard.js.js';
import { getMenuData } from '../../api/menuApi.js.js';
import Allergens from '../Allergens.js.js';

const colorData = {
    bg: '#f44336',
    btn: '#607d8b',
};

export default function MenuA() {
    const [menuData, setMenuData] = useState(null);
    const [showAllergens, setShowAllergens] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const aMenu = await getMenuData('a');
                setMenuData(aMenu);
            } catch (e) {
                console.log(e);
            }
        };
        if (!menuData) {
            fetchUsers();
        }
    });

    const toggleAllergenicInfos = () => {
        setShowAllergens(!showAllergens);
    };

    return (
        <>
            {menuData && (
                <MenuCard
                    menuData={menuData}
                    colors={colorData}
                    openHandler={() => toggleAllergenicInfos()}
                />
            )}
            {menuData && showAllergens && (
                <Allergens allergens={menuData.allergens} showAllergens />
            )}
        </>
    );
}
