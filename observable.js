// unsubscribe notify 
class NewsPaper{
    constructor(name){
        this.name = name
    }
    publishNews(news){
        console.log(this.name + ':' + news)
    }
}

class FashionNewsObservable{
    constructor(news){
        this.subscribers = []
    }
    subscribe(sub){
        this.subscribers.push(sub)
    }
    unsubscribe(exSub){
        function filterFunction(sub){
            return sub !== exSub
        }
        this.subscribers =this.subscribers.filter(sub=> sub !== exSub) //sub=> sub !== exSub
    }
    notify(news){
        this.subscribers.forEach(NewsPaper => NewsPaper.publishNews(news))
    }
}

const oriflame = new NewsPaper('oriflame')
const avon = new NewsPaper('avon')
const glamour = new NewsPaper ('glamour')
const milano = new FashionNewsObservable()

milano.subscribe(oriflame)
milano.subscribe(avon)
milano.subscribe(glamour)

milano.notify("<test>")
milano.unsubscribe(avon);
milano.notify("test2")