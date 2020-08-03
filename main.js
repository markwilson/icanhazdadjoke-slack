const axios = require("axios");

const slackUrl = process.env.SLACK_URL;

axios
  .get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
  .then(({ data }) => {
    axios.post(slackUrl, data);
  })
  .catch(console.error);
