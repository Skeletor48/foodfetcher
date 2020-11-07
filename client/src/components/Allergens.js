import React, { useEffect } from 'react';
import './MenuCard.css';

export default function Allergens({ allergens, showAllergens }) {
    useEffect(() => {
        const menuInfo = document.querySelector('.allergic-menu');
        const menu = document.querySelector('.menu-info');
        if (showAllergens) {
            menuInfo.classList.add('showAllergic');
            menu.classList.toggle('up');
            menuInfo.classList.remove('hideAllergic');
        } else {
            menuInfo.classList.add('hideAllergic');
            menuInfo.classList.remove('showAllergic');
        }
    });

    return showAllergens ? (
        <div className='menu-container'>
            <div className='allergic-menu'>
                <div className='menu-info'>
                    <div className='allergens-info'>
                        {allergens && (
                            <ul className='list-inline'>
                                {allergens.map((allergen, i) => (
                                    <li key={i}>
                                        <img
                                            src={allergen}
                                            alt='allergen icons'
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ''
    );
}
