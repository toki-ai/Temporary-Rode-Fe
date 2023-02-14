FROM httpd:latest
FROM node:16
COPY . .
COPY npm i
RUN npm run build
RUN cp -r dist /usr/local/apache2/htdocs/