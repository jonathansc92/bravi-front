FROM node:alpine

WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install