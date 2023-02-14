FROM node:16
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd:latest
COPY /app/dist /usr/local/apache2/htdocs/