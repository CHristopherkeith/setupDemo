# 第一阶段
FROM node:16-buster-slim as builder

LABEL description="A demo Dockerfile for build Docsify."

COPY . /var/web/

RUN set -x \
  && cd /var/web \
  && npm install \
  && npm run build

# 第二阶段
FROM nginx:1.23.1-alpine as prod

EXPOSE 80
COPY --from=0 /var/web/dist /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]