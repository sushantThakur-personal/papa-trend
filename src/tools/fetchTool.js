import pagespeedApi from '../api/pagespeedApi';
// let axios = require('axios');

const requestListExecuter = async (url_list) => {
    for (url of url_list) {
        const params1 = {
            url: url,
            category: "PERFORMANCE",
            stratagy: "DESKTOP",
            key: "AIzaSyD84k3Dcr1HVTbpjz-SArdnLoudYsx1UIQ"
        }

        const params2 = {
            url: url,
            category: "PERFORMANCE",
            stratagy: "MOBILE",
            key: "AIzaSyD84k3Dcr1HVTbpjz-SArdnLoudYsx1UIQ"
        }
        await pagespeedApi.get({ params: params1 })
            .then((response) => console.log(response.data))
            .catch(error => console.log(error));

        await pagespeedApi.get({ params: params2 })
            .then((response) => console.log(response.data))
            .catch(error => console.log(error));

    }
}


(async () => {
    await requestListExecuter(url_list);
})();