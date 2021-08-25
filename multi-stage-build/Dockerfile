FROM ubuntu
WORKDIR /usr/app
RUN apt-get update && apt-get install -y \ 
  python
COPY . . 

FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password

CMD ["mysqld"]
