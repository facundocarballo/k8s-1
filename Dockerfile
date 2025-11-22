FROM node:22

COPY src /opt/app/src/
COPY tsconfig* package*.json /opt/app/

WORKDIR /opt/app

RUN npm install
RUN npm run build

CMD ["npm", "start"]