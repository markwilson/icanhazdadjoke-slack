const axios = require("axios");

const slackUrl = process.env.SLACK_URL;

axios
  .get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0",
    },
  })
  .then(({ data }) => {
    axios.post(slackUrl, data).catch((error) => {
      console.error(error);
    });
  })
  .catch((error) => {
    console.error(error);

    axios.post(slackUrl, {
      joke: "Dad joke API failed... Make up your own jokes. Maybe a knock-knock joke?",
    });
  });
