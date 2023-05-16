FROM node:16 as builder
WORKDIR /app
COPY . .
COPY .env.deploy .env
RUN cat .env
RUN npm i -f
RUN npm run build

FROM nginx as runner
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
