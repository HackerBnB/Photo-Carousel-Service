DROP KEYSPACE IF EXISTS homely;

CREATE KEYSPACE homely WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE homely;

CREATE COLUMNFAMILY rooms(
  room_id INT,
  room_name VARCHAR,
  verified BOOLEAN,
  PRIMARY KEY(room_id)
);

CREATE COLUMNFAMILY photos(
  photo_id INT,
  photo_url VARCHAR,
  photo_description VARCHAR,
  PRIMARY KEY(photo_id)
);

CREATE COLUMNFAMILY rooms_photos(
  id INT,
  room_id INT,
  photo_id INT,
  PRIMARY KEY(id)
);

COPY rooms (room_id, room_name, verified) FROM './data/rooms_1.csv' WITH HEADER = true;
COPY rooms (room_id, room_name, verified) FROM './data/rooms_2.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_1.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_2.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_3.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_4.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_5.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_6.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_7.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_8.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_9.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/photos_10.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_1.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_2.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_3.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_4.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_5.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_6.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_7.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_8.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_9.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_10.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_11.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_12.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_13.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_14.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/rooms_photos_15.csv' WITH HEADER = true;
