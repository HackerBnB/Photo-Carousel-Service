\c homely;

ALTER TABLE photos
ADD FOREIGN KEY (room_id) REFERENCES rooms (room_id);

DROP INDEX IF EXISTS room_idx;
CREATE INDEX room_idx ON rooms (room_id);

DROP INDEX IF EXISTS photo_idx;
CREATE INDEX photo_idx ON photos (photo_id);

DROP INDEX IF EXISTS roomidx;
CREATE INDEX roomidx ON photos (room_id);
