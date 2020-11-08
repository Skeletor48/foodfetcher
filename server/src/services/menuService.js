import fetch from 'node-fetch';
import config from '../config/index.js';
import dataProcessor from '../utils/dataProcessor.js';

export default class MenuService {
    crawlData = async (targetUrl) => {
        var proxyUrl = config.heroku_proxy;

        return fetch(proxyUrl + targetUrl, {
            headers: { Origin: 'X-Requested-With' },
        })
            .then((blob) => blob.text())
            .then((data) => {
                return dataProcessor(data);
            })
            .catch((e) => {
                console.log(e);
                return e;
            });
    };
}
