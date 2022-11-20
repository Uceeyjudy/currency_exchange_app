FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]