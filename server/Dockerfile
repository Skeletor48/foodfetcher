FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .
RUN touch .env

EXPOSE 7000
CMD ["npm","run","dev"]