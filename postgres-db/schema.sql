-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_get_activity(NULL::integer)
-- WHERE datid=(SELECT oid from pg_database where datname = 'sample');

DROP DATABASE IF EXISTS homely;

CREATE DATABASE homely;

\c homely;

CREATE TABLE photos(
  room_id TEXT NOT NULL PRIMARY KEY,
  room_name VARCHAR(120) NOT NULL,
  photo_url VARCHAR(120) NOT NULL,
  description VARCHAR(200) NOT NULL,
  verified BOOLEAN NOT NULL);

COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_3.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_4.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_5.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_6.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_7.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_8.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_9.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/data_10.csv' WITH DELIMITER ',' CSV HEADER;
