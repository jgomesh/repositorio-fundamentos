FROM node:latest

EXPOSE 3000

COPY . /my-app

WORKDIR /my-app

RUN npm install

ENTRYPOINT ["npm", "start"]