import menuController from '../../controllers/menuController.js';

export default (router) => {

    router.get('/a', async (req, res) => {
        const targetUrl = 'https://millcantin.hu/shop/napi-menuk/a-menu/';
        const MenuController = new menuController();
        MenuController.getData(req,res,targetUrl);
    });

    router.get('/b', async (req, res) => {
        const targetUrl = 'https://millcantin.hu/shop/napi-menuk/b-menu/';
        const MenuController = new menuController();
        MenuController.getData(req,res,targetUrl);
    });
};
