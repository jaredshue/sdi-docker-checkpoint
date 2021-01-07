
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD npm start








# FROM node:latest

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# RUN npm install

# EXPOSE 3001

# CMD ["npm", "start"]