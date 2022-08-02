FROM node:16-alpine

MAINTAINER SomeDev

RUN apk add bash

RUN mkdir /app
WORKDIR /app

COPY ./wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
