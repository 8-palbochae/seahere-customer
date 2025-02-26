FROM node:latest as builder
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 5173
COPY ./default.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder usr/src/app/dist  /usr/share/nginx/html 