FROM node:16 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd:latest
COPY --from=builder /app/dist /usr/local/apache2/htdocs/