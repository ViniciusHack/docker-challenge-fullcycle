FROM node:20 AS builder

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:alpine

WORKDIR /home/app

COPY --from=builder /home/app .

CMD ["node", "src/app.js"]