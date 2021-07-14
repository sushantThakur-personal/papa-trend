import axios from 'axios';

export default axios.create({
    baseURL: "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed/",
});
