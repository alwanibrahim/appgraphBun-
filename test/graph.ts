import {Flow} from '../services/index'
const data = new Flow()

data.addNodes("start", { type: "Start" })
data.addNodes("fetch", { type: "Fetch", url: "/api/user" })
data.addNodes("filter", { type: "Filter", condition: "age > 18" })
data.addNodes("send", { type: "Message", text: "Hello adult" })

data.connect("start", "fetch")
data.connect("fetch", "filter")
data.connect("filter", "send")

console.log(data.getNodees("start"));
console.log(JSON.stringify(data.getAllEdgesAndNodes(), null, 2));