class Graph  {
    private nodes: Map<string, any>
    private edges: Map<string, string[]>
    constructor() {
        this.nodes = new Map
        this.edges = new Map
    }

    addNodes(id: string, data: any){
        this.nodes.set(id, data)

        if (!this.edges.has(id)) {
            this.edges.set(id, [])
        }
    }

    getNodes(id: string){
        return this.nodes.get(id)
    }

    getAllNodes(){
        return {
            status: "ok", 
            data: Array.from(this.nodes.entries())
        }
    }

    //===edges ====

    connect(from: string, to: string){
        if (this.edges.has(from)) {
            this.edges.set(from, [])
        }
        this.edges.get(from)?.push(to)
    }

    getAllEdges(){
        return Array.from(this.edges.entries())
    }

    getEdes(id: string){
        return this.edges.get(id)
    }


}

const data = new Graph()

//==add nodes
data.addNodes("A", ["data", "data2", "data3"])
data.addNodes("B", ["data", "data2", "data3"])
data.addNodes("C", ["data", "data2", "data3"])
data.addNodes("D", ["data", "data2", "data3"])
data.addNodes("E", ["data", "data2", "data3"])
const data2 = data.getNodes("A")
const data3 = data.getNodes("B")
const data4 = data.getEdes("A")
const data5 = data.getEdes("B")
const data6 = data.getEdes("C")
const data7 = data.getEdes("D")
const data8 = data.getEdes("E")
//add edges 
data.connect("A", "B")


data.connect("B", "D")
data.connect("D", "E")


//data satuan 
console.log(data2);
console.log(data3);

//data semua
console.log(data.getAllNodes());

//data satuan edges
console.log(data4);
console.log(data5);
console.log(data6);
console.log(data7);
console.log(data8);

//all data edges

console.log(data.getAllEdges());

