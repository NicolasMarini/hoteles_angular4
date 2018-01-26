FROM node:6


# Create app directory
RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

# Copia el contenido de la carpeta local en el directorio /home/node/app del contenedor
COPY . /home/node/app

EXPOSE 3000

CMD ["npm", "start"]