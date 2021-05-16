FROM node:10.19.0 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install -g @quasar/cli

COPY . .

RUN npm install
RUN quasar build

FROM nginx:1.19.10-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
