const axios = require("axios");
const cheerio = require("cheerio");

function jadwalsholat(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://umrotix.com/jadwal-sholat/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        $(
          "body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ",
        ).each(function (a, b) {
          result = {
            status: 200,
            author: "arul09",
            tanggal: $(b).find("> div:nth-child(2)").text(),
            imsyak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)",
              )
              .text(),
            subuh: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)",
              )
              .text(),
            dzuhur: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)",
              )
              .text(),
            ashar: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)",
              )
              .text(),
            maghrib: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)",
              )
              .text(),
            isya: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)",
              )
              .text(),
          };
          resolve(result);
        });
      })
      .catch(reject);
  });
}

module.exports = jadwalsholat;
