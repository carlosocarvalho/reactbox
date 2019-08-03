export class RouterHelper
{
    routers = []

    add({name, component, path, ...args})
    {
        this.routers.push({
            name, 
            component,
            path,
            ...args
        })
        return this;
    }

    get(name){
        const router = this.has(name)
        if( router < 0) throw Error("Router not found");
        return this.routers[router];
    }

    all(){
        return this.routers;
    }

    has(name){
        return this.routers.findIndex( row => row.name === name)
    }

}