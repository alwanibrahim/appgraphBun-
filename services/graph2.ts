const santai: Map<string, any> = new Map
const mimin: Map<string, string[]> = new Map

export class Santai {
    getSantaiAll(){
        return Array.from(santai.entries())
    }
    getSantai(id: string){
        return santai.get(id)
    }

    addSantai(mimi: string, data: Record<string, any>){
        if (!mimin.has(mimi)) {
            mimin.set(mimi, [])
        }

        santai.set(mimi, data)
    }

    connent(a: string, b: string){
        if (!mimin.has(a)) {
            mimin.set(a, [])
        }

        mimin.get(a)?.push(b)
    }

    getEdgesAll(){
        return Array.from(mimin.entries())
    }

    updateNode(id: string, newData: Record<string, any>){
        if (!santai.has(id)) {
            throw new Error(`tidak node dengan id ${id}`);
            
        }
        const data = santai.get(id)
        santai.set(id, {...data, ...newData})
    }

}