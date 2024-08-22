FROM node:22-alpine3.19
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 4000
COPY . .
CMD ["npm","run","dev"]