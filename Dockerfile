FROM node

WORKDIR /goit-nodejs

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]