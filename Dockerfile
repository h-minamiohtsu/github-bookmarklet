FROM node:alpine

RUN npm install uglify-js -g

ENTRYPOINT [ "uglifyjs" ]
