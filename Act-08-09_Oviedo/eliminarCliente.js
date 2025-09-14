const client = require("./db")


async function eliminar_Cliente_by_ID(nombre){
    try{
        const query = `DELETE FROM clientes WHERE nombre = $1 `;
        await client.query(query,[nombre])
        console.log(`Cliente con el nombre ${nombre} fue eliminado`);
    }
    catch(error){
        console.error(error)
    }
}

eliminar_Cliente_by_ID("Alejo")