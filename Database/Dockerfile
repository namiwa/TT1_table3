FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y mariadb-server

EXPOSE 3307

LABEL version="1.0"
LABEL description="MariaDB Server"

ENTRYPOINT mariadb --port=3307
