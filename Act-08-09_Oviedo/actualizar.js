const client = require("./db")

async function actualizar_ciudad_cliente (id, Nvaciudad){
    try{
        const query = `UPDATE clientes SET ciudad = $2  WHERE id_cliente = $1`;
        await client.query(query,[id,Nvaciudad]);
        console.log("La ciudad fue actualizada");
    }
    catch(err){
        console.error("Hubo en error en la actualizacion", err)
    }
    

}

actualizar_ciudad_cliente(9,"Rosario")