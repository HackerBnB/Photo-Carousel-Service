DROP KEYSPACE IF EXISTS sample;

CREATE KEYSPACE sample WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE sample;

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

COPY rooms (room_id, room_name, verified) FROM './data/sample_rooms_1.csv' WITH HEADER = true;
COPY photos (photo_id, photo_url, photo_description) FROM './data/sample_photos_1.csv' WITH HEADER = true;
COPY rooms_photos (id, room_id, photo_id) FROM './data/sample_rooms_photos_1.csv' WITH HEADER = true;
