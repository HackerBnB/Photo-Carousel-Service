-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_get_activity(NULL::integer)
-- WHERE datid=(SELECT oid from pg_database where datname = 'homely');

DROP DATABASE IF EXISTS homely;

CREATE DATABASE homely;

\c homely;

CREATE TABLE rooms(
  room_id INT NOT NULL PRIMARY KEY,
  room_name VARCHAR(120) NOT NULL,
  verified BOOLEAN NOT NULL
);

CREATE TABLE photos(
  photo_id INT NOT NULL PRIMARY KEY,
  photo_url VARCHAR(120) NOT NULL,
  photo_description VARCHAR(200) NOT NULL
);

CREATE TABLE rooms_photos(
  id INT NOT NULL PRIMARY KEY,
  room_id INTEGER NOT NULL,
  photo_id INTEGER NOT NULL
);

-- \timing;

COPY rooms FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_3.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_4.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_5.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_6.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_7.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_8.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_9.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_10.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_3.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_4.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_5.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_6.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_7.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_8.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_9.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms_photos FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_photos_10.csv' WITH DELIMITER ',' CSV HEADER;
