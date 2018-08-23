FROM postgres:10-alpine

WORKDIR /docker-entrypoint-initdb.d

COPY ./schema.sql /docker-entrypoint-initdb.d

ENV POSTGRES_PASSWORD: 123 \
    POSTGRES_USER: katietruong