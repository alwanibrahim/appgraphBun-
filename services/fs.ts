import {existsSync, writeFileSync, readFileSync} from 'fs'

const path = "./santai.json"

function persiapan() {
  if(!existsSync(path)){
    writeFileSync(path, JSON.stringify({items: []}, null, 2))
  }
  return JSON.parse(readFileSync(path, "utf8"))
}

function save(data: Record<string, any>) {
  writeFileSync(path, JSON.stringify(data, null, 2))
}

function add(data: Record<string, any>) {
  const db = persiapan()
  const yangakanDimasukkan = {
    id: Date.now(), 
    ...data
  }
  db.items.push(yangakanDimasukkan)
  save(db)
  return yangakanDimasukkan
}

function edit(id: number, data: Record<string, any>) {
  const db = persiapan()
  const index  = db.items.findIndex((santai: any)=> santai.id === id)
  if(index === -1) return null

  db.items[index] = {
    ...db.items[index], 
    ...data, 
    id: db.items[index].id
  }

  save(db)
  return db.items[index]
}

function remove(id: number): boolean {
  const db = persiapan()
  const cek = db.items.findIndex((santai: any)=> santai.id === id)
  if (cek === -1) {
    return false
  }

  db.items.splice(cek, 1)
  return true
}

add({nama: "alwan", age: 21})
edit(1763372097682, {nama: "alwanalwan"})
remove(1763372097682)