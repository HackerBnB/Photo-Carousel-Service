SELECT pg_terminate_backend(pid)
FROM pg_stat_get_activity(NULL::integer)
WHERE datid=(SELECT oid from pg_database where datname = 'sample');

DROP DATABASE IF EXISTS sample;

CREATE DATABASE sample;

\c sample;

CREATE TABLE photos(
  room_id TEXT NOT NULL PRIMARY KEY,
  room_name VARCHAR(120) NOT NULL,
  photo_url VARCHAR(120) NOT NULL,
  description VARCHAR(200) NOT NULL,
  verified BOOLEAN NOT NULL);

COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/sample_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/sample_2.csv' WITH DELIMITER ',' CSV HEADER;
