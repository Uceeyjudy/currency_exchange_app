FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json .

# COPY package-lock.json .

RUN npm cache clean --force

# RUN npm config set registry http://registry.npmjs.org

RUN npm i

RUN npm i -g serve

COPY . .

ENV NODE_ENV production

EXPOSE 3000

RUN npm run build

# CMD [ "npm", "start" ]
CMD [ "npx", "serve", "build" ]