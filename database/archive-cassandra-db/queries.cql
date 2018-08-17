USE homely;

CREATE COLUMNFAMILY rooms(
  room_id INT,
  room_name VARCHAR,
  verified BOOLEAN,
  photos VARCHAR,
  PRIMARY KEY(room_id)
);


SELECT * FROM rooms WHERE room_id = 9812198;

INSERT INTO rooms ()