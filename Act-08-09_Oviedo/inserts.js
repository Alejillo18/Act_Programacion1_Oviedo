const client = require("./db")



async function insertar_Datos_Clientes(nombre,email,ciudad,fecha_registro) {
    try{
    const query = `INSERT INTO Clientes (nombre,email,ciudad,fecha_registro) VALUES ($1, $2, $3, $4)`;
    const valores = [nombre,email,ciudad,fecha_registro];
    await client.query (query,valores);
    console.log("Cliente Insertado Correctamente;")
    }
    catch(err){
        console.error(`Error al insertar los datos`, err)
    }
}

insertar_Datos_Clientes("Alejo","mailFalso@gmail.com","Huerta")