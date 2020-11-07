import React, { useEffect, useState } from 'react';
import '../../App.css';
import MenuCard from '../MenuCard.js.js';
import { getMenuData } from '../../api/menuApi.js.js';
import Allergens from '../Allergens.js.js';

const colorData = {
    bg: '#009688',
    btn: '#795548',
};

export default function MenuA() {
    const [menuData, setMenuData] = useState();
    const [showAllergens, setShowAllergens] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const aMenu = await getMenuData('b');
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
