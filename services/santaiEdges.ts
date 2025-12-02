import {Santai} from './graph2'

const data = new Santai

data.addSantai("A", {nama: "alwan"})
data.addSantai("B", {nama: "fifi"})
data.connent("A", "B")
data.updateNode("A", {nama: "dimas"})

console.log("hubungan alwan adalah : ", data.getSantai("A"));
console.log("\n semua nodes adalah : ", data.getEdgesAll());
console.log("\n semua edges adalah : ", data.getEdgesAll());

console.log("hubungan alwan adalah : ", data.getSantai("A"));