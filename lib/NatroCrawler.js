const ICrawler = require("./ICrawler");

class NatroCrawler extends ICrawler {
    constructor({ options } = {}) {
        super({ options });
    }

    async fetchData() {
        return getData()

        function getData(results = []) {
            let rows = document.querySelectorAll("#dataTable-Demo > tbody > tr");
            let localResults = Array.from(rows).map(row => {
                let colums = row.querySelectorAll("td");
                return {
                    domain: colums[0].querySelector("span a")?.innerText?.trim(),
                    type: colums[1].innerText?.trim(),
                    new_registration_fee: colums[2].querySelector("span span.pp-price-USD")?.innerText?.trim(),
                    renewal_fee: colums[3].querySelector("span span.pp-price-USD")?.innerText?.trim(),
                    transfer_fee: colums[4].querySelector("span span.pp-price-USD")?.innerText?.trim(),
                }
            });
            results = results.concat(localResults)
            let btnnextPage = document.querySelector("#dataTable-Demo_next");
            let isLastPage = btnnextPage?.className.includes("disabled");
            if (!isLastPage) {
                btnnextPage.click();
                return getData(results)
            }

            return results
        }

    }
}

module.exports = NatroCrawler;