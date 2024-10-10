# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Verificar que Vite esté instalado correctamente
RUN npm list vite

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Comando para ejecutar Vite en modo desarrollo
CMD [ "npm", "run", "dev" ]