FROM node:20.10.0

WORKDIR /goit-nodejs

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]