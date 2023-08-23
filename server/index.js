const { sequelize } = require("./src/db"); 
const server = require("./src/server");

const PORT = process.env.PORT || 3001;

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
  // Iniciar el servidor después de la sincronización
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});



//! Para solucionar la codificacion por defecto de sqlshell a utf8
//SHOW client_encoding;
//SET client_encoding = 'UTF8';