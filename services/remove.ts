import {existsSync, writeFileSync, readFileSync} from 'fs'

const path ="./maman.json"
function load() {
    if (!existsSync(path)) {
        writeFileSync(path, JSON.stringify({items: []}, null, 2))
    }

    return JSON.parse(readFileSync(path, "utf8"))
}

function save(data: any) {
    writeFileSync(path, JSON.stringify(data, null, 2))
}

function addData(data: any) {
    const db = load()
    const id = db.items.find((id: number)=> id === id )
    if (id) {
        console.log(`data dengan id ${id} sudah ada`);
        return
    }
    const dataMasuk = {
        id:  Date.now(), 
        ...data
    }
    db.items.push(data)
    save(db)
    return dataMasuk
}

function getData(){
    const db = load()
    return db.items
}

function getDataById(id: number) {
    const db = load()
    const data = db.items
    return data.find((santai: number)=> santai === id)
}

function remove(params:number) {
    const db = load()
    db.items.filter((santai: number)=> santai !== params)
    return true
}

load()
addData({id: 1, nama: "alwan"})
const data = getData()
const dataByid = getDataById(1)
remove(1)
console.log(dataByid);

// console.log(data);
