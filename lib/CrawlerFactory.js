class CrawlerFactory {

    constructor(){
        this.crawlerMap = {}
    }

    registerCrawler(crawlerType,crawlerInstance){
        this.crawlerMap[crawlerType] = crawlerInstance;
    }

    getCrawler(crawlerType){
        const crawlerInstance = this.crawlerMap[crawlerType];
        if(!crawlerInstance){
            throw new Error(`${crawlerType} tipinde bir crawler mevcut değildir!`);
        }
        return crawlerInstance;
    }
  
}

module.exports = CrawlerFactory;