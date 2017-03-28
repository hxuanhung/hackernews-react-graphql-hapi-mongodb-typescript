FROM mhart/alpine-node:7

WORKDIR /app

RUN apk --no-cache add rsync

COPY package.json /app/package.json
RUN npm install

COPY . /app

CMD ["npm","start"]
