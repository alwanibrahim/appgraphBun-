import {edges} from '../db/edges'
import {nodes} from '../db/nodes'

export class Flow {
  nodes = nodes
  edges = edges
  getNodees(id: string){
    return this.edges.get(id) ?? []
  }

  getAllEdgesAndNodes(){
    console.log(`\n`);
    
    return {
     nodes:  Array.from(this.nodes.entries()), 
     
     edges: Array.from(this.edges.entries())
    }
  }

  addNodes(id: string, data: any){
    this.nodes.set(id, data)
    if (!this.edges.has(id)
    ) {
      this.edges.set(id, [])
    }
  }

  connect(a: string, b: string){
    this.edges.get(a)?.push(b)
  }
}

