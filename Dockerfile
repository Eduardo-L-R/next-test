FROM node:16.9.0-alpine3.14

WORKDIR "/app"

COPY . .

RUN npm install
RUN npm run build
