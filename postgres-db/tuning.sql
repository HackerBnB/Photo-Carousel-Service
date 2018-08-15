-- \c homelyapp;

-- ALTER TABLE rooms_photos
-- ADD FOREIGN KEY (room_id) REFERENCES rooms (room_id);

ALTER TABLE rooms_photos
ADD FOREIGN KEY (photo_id) REFERENCES photos (photo_id);

-- DROP INDEX IF EXISTS room_idx;
-- CREATE INDEX room_idx ON rooms (room_id);

DROP INDEX IF EXISTS photo_idx;
CREATE INDEX photo_idx ON photos (photo_id);

-- DROP INDEX IF EXISTS roomidx;
DROP INDEX IF EXISTS photoidx;
-- CREATE INDEX roomidx ON rooms_photos (room_id);
CREATE INDEX photoidx ON rooms_photos (photo_id);
