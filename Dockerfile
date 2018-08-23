FROM node:8.11.2

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

# EXPOSE 3000
EXPOSE 3004

CMD [ "npm", "start" ]
