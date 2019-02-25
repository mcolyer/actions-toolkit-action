FROM node:10.15.1-alpine

RUN npm install actions-toolkit
COPY ./index.js /

ENTRYPOINT ["node", "/index.js"]
