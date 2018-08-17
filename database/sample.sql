-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_get_activity(NULL::integer)
-- WHERE datid=(SELECT oid from pg_database where datname = 'homely');

-- DROP DATABASE IF EXISTS sample;

-- CREATE DATABASE sample;

\c sample;

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  room_id SERIAL NOT NULL PRIMARY KEY,
  room_name VARCHAR(120) NOT NULL,
  verified BOOLEAN NOT NULL
);

-- CREATE TABLE photos(
--   photo_id SERIAL NOT NULL PRIMARY KEY,
--   room_id INT NOT NULL,
--   photo_url VARCHAR(120) NOT NULL,
--   photo_description VARCHAR(200) NOT NULL
-- );

COPY rooms (room_name, verified) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/sample_rooms_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/sample_rooms_2.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_1.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_2.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_3.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_4.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_5.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_6.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_7.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_8.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_9.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY photos (room_id, photo_url, photo_description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/photos_10.csv' WITH DELIMITER ',' CSV HEADER;