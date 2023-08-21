import data from '../productos.json'

export const pedirItemPorId = (id) =>{
    return new Promise ((resolve, reject) =>{

        const item = data.find ((e) => e.id === id)

        if (item){
            resolve(item)
        }else{
            reject({
                error: "no se encontro el juego"
            })
        }
    })
}