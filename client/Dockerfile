FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm install axios

COPY . .
CMD [ "npm", "start" ]