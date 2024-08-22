FROM node:22-alpine3.19
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 4000
COPY . .
CMD ["node","app.js"]