import menuService from '../services/menuService.js.js';

export default class MenuController {
    getData = async (req, res, targetUrl) => {
        const MenuService = new menuService();
        let menuData;
        try {
            menuData = await MenuService.crawlData(targetUrl);

            if (!menuData) {
                return res.status(404).json({ message: `Cant find menu data` });
            }
        } catch (err) {
            console.error.bind(console, 'Internal Server Error');
            return res.status(500).json({ message: err.message });
        }
        
        res.json(menuData);
    };
}
