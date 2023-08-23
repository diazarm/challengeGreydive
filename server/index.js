const server = require("./src/server");
const { sequelize } = require("./src/db"); 

const PORT = 3001;

// Sincronizar modelos con la base de datos
// Iniciar el servidor después de la sincronización
server.listen(PORT, () => {
    sequelize.sync({force:true});
    console.log(`Server listening on port ${PORT}`);
  });




//! Para solucionar la codificacion por defecto de sqlshell a utf8
//SHOW client_encoding;
//SET client_encoding = 'UTF8';

//force true, me permite sincronizar y elimina la tabla completa y la volvemos a crear.
//CON  altern se actualiza pero no modifica nada.