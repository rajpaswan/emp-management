FROM node:latest
RUN mkdir -p /usr/src/app

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client
COPY client/package.json /usr/src/app/client
RUN npm install
COPY client /usr/src/app/client
RUN npm run-script build

RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server
COPY server/package.json /usr/src/app/server
RUN npm install
COPY server /usr/src/app/server
EXPOSE 3000
CMD ["npm", "start"]