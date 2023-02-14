FROM httpd:latest
FROM node:16
COPY . .
RUN npm i
RUN npm run build
RUN cp -r dist /usr/local/apache2/htdocs/