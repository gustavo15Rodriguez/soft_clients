# soft_clients

Software para administración de clientes.


> NOTA: Recuerde tener instalado en su maquina `node.js` para poder instalar todas las dependencias del proyecto
correctamente.

# Backend

### Ejecutar script sql 

Debe dirigirse a la ruta `/backend/models` donde encontrara un archivo `.sql` llamado
`soft_clients`, usted debe ejecutar en consola el siguiente comando para que se cree la base de datos
definida para este repositorio(Puede cambiar esto en el archivo `.sql` y editar el nombre de usuario y contraseña
del archivo `dbConnection.js` alojado en esta misma ruta):

>`mysql -u root -p < soft_clients.sql`

### Instalar dependecias

Se debe dirigir al directorio del backend. Ahora para instalar las dependecias se debe ejecutar dentro del 
directorio el siguiente comando:

>`npm install`

Para ejecutar el servidor alojado en el backend ustede debe ejecutar el comando:

>`SET DEBUG=backend:* & npm start`

Si su maquina es MacOS o linux ejecute:

>`DEBUG=backend:* npm start`


# Frontend

## Instalar dependencias

Debe dirigirse al directorio llamado frontend, y dentro de el instalar las dependencias
para el proyecto ejecutando el comando:

>`npm install`

Para iniciar el proyecto usted debe ejecutar el siguiente comando dentro del directorio frontend:

>`npm start`

### Utilizar Soft Clients

Cuando inicie el proyecto, el le inidicara en que direccion y que puerto puede acceder a el 
en el navegador. Para realizar alguna opcion (Crear clientes, listar...) usted debe estar ejecutando el
servidor alojado en el backed y haber importado la base de datos en mysql. 

Tambien puede acceder al proyecto publicamente en [now.sh](https://soft-clients-front.now.sh/).