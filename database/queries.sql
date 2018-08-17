\c homely;

SELECT * FROM photos WHERE room_id = 1;

SELECT * FROM photos WHERE room_id = 9999999;

INSERT INTO rooms (room_name, verified) VALUES ('roomABC', true);

INSERT INTO photos (room_id, photo_url, photo_description) VALUES (10000001, 'url', 'This is the living room!');