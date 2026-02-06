const config = {
  production: {
    url: "",
    apiUrl: "",
  },
  staging: {
    url: "",
    apiUrl: "",
  },
  local: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:7001/api/tecosoft-admin/",
  },
};

const environment = "local";

const hostConfig = {
  WEB_URL: config[environment].url,
  API_URL: config[environment].apiUrl,
  intervals: 500,
};

const intervals = {
  reload: 1500,
};

export { hostConfig, intervals };
