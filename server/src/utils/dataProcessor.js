export default (html) => {
    const menuData = {};
    const regex = /(?<=\+json">)(.*)(?=]}<\/)/g;
    const brokenJson = html.match(regex);

    const description = JSON.parse(brokenJson + ']}')['@graph'][1].description;
    const offers = JSON.parse(brokenJson + ']}')['@graph'][1].offers;

    menuData.soup = getSoupString(description);
    menuData.mainCourse = getMainCourseString(description);
    menuData.price = getPriceString(offers);
    menuData.allergens = getAllergensList(html);

    return menuData;
};

const getSoupString = (description) => {    
    return description
        .split('\n')
        .filter((item) => item.match(/Soup:/))[0]
        .replace('Soup:', '').replace('_small','');
};

const getMainCourseString = (description) => {
    return description
        .split('\n')
        .filter((item) => item.match(/Main course:/))[0]
        .replace('Main course:', '');
};

const getPriceString = (offers) => {
    return `${offers[0].price} ${offers[0].priceCurrency}`;
};

const getAllergensList = (html) => {
    const regex = /(?<=src=)(.*)(?=alt=)/g;
    const brokenList = html.match(regex);

    let allergens = new Set();
    brokenList.forEach((item) => {
        const linkArray = item.split(' ');

        linkArray.forEach((link) => {
			const uploadRegexp = new RegExp('millcantin.hu','g');
            if (link.match(uploadRegexp) && link.match(/-001.jpg/)) {
				const allergen = link
				.replace(/\\\//g, '\\')
				.replace(/src="/g, '')
				.replace(/src=\\/g, '')
				.replace(/"/g,'')
				.replace(/\\https/g, 'https')
				.replace(/.jpg\\/g, '.jpg');
				
                allergens.add(allergen);
            }
        });
	});
	
    return Array.from(allergens);
};
