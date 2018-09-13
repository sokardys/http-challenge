FROM node:8.11

RUN mkdir app
COPY index.js /app
COPY package.json /app

WORKDIR /app

RUN npm install

CMD npm start