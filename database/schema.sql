-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_get_activity(NULL::integer)
-- WHERE datid=(SELECT oid from pg_database where datname = 'homely');

DROP DATABASE IF EXISTS homely;

CREATE DATABASE homely;

\c homely;

CREATE TABLE rooms(
  room_id SERIAL NOT NULL PRIMARY KEY,
  room_name VARCHAR(120) NOT NULL,
  verified BOOLEAN NOT NULL
);

CREATE TABLE photos(
  photo_id SERIAL NOT NULL PRIMARY KEY,
  room_id INT NOT NULL,
  photo_url VARCHAR(120) NOT NULL,
  photo_description VARCHAR(200) NOT NULL
);

COPY rooms (room_name, verified) FROM './rooms_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_3.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_4.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_5.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_6.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_7.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_8.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_9.csv' WITH DELIMITER ',' CSV HEADER;
COPY rooms (room_name, verified) FROM './rooms_10.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_1.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_2.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_3.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_4.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_5.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_6.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_7.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_8.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_9.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_10.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_11.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_12.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_13.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_14.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_15.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_16.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_17.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_18.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_19.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_20.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_21.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_22.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_23.csv' WITH DELIMITER ',' CSV HEADER;
COPY photos (room_id, photo_url, photo_description) FROM './photos_24.csv' WITH DELIMITER ',' CSV HEADER;


-- COPY rooms (room_name, verified) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_1.csv' WITH DELIMITER ',' CSV HEADER;
-- COPY rooms (room_name, verified) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/rooms_2.csv' WITH DELIMITER ',' CSV HEADER;
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

