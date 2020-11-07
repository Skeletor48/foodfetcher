import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MenuCard.css';
import { Link } from 'react-router-dom';

const pathMap = {
    '/menu-a': '/menu-b',
    '/menu-b': '/menu-a',
};

export default function MenuCard({ menuData, colors, openHandler }) {
    const location = useLocation();
    const [menuPath] = useState(pathMap[location.pathname]);
    const [detailsToggle, setDetailsToggle] = useState(true);

    useEffect(() => {
        const button = document.querySelector('.btn');
        const previewContainer = document.querySelector('.menu-preview');
        const detailsContainer = document.querySelector('.menu-details');
        button.style.backgroundColor = colors.btn;
        previewContainer.style.backgroundColor = colors.bg;
        detailsContainer.style.backgroundColor = colors.bg;
    });

    const toggleDetails = (e) => {
        setDetailsToggle(!detailsToggle);
        e.preventDefault();

        const detailsContainer = document.querySelector('.menu-details');
        const menuInfo = document.querySelector('.menu-info');

        if (detailsToggle) {
            menuInfo.style.filter = 'blur(2px)';
            detailsContainer.classList.add('active');
            detailsContainer.classList.remove('inactive');
        } else {
            menuInfo.style.filter = 'blur(0px)';
            detailsContainer.classList.add('inactive');
            detailsContainer.classList.remove('active');
        }

        openHandler();
    };

    const toggleMenu = () => {
        const menuCard = document.querySelector('.menu');
        menuCard.classList.toggle('is-flipped')

    };

    const getMenuTitle = (path) => {
        return path.replace('/menu-', '').toUpperCase();
    };

    const getIcon = () => {
        return detailsToggle ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
    };

    const getDate = () => {
        return new Date().toLocaleDateString('en-US');
    };

    return (
        <div className='menu-container'>
            <div className='menu'>
                <div className='menu-preview'>
                    <h6>Menu</h6>
                    <h1>{getMenuTitle(location.pathname)}</h1>
                    <a href='/' onClick={(e) => toggleDetails(e)}>
                        View all details <i className={getIcon()}></i>
                    </a>
                </div>
                <div className='menu-details'>
                    <h6>Price</h6>
                    <h4>{menuData.price}</h4>
                    <h6>Allergens</h6>
                    <div className='arrow-icon'>
                        <i 
                            className='fa fa-arrow-down fa-3x'
                            aria-hidden='true'></i>
                    </div>
                </div>
                <div className='menu-info'>
                    <div className='soup-date'>
                        <h6 className='soup'>Soup</h6>
                        <h6 className='date'>{getDate()}</h6>
                    </div>
                    <h2>{menuData.soup}</h2>

                    <h6 className='main-course'>Main course</h6>
                    <h2>{menuData.mainCourse}</h2>
                    <Link to={menuPath}>
                        <button onClick={toggleMenu} className='btn'>
                            Show {getMenuTitle(menuPath)}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
