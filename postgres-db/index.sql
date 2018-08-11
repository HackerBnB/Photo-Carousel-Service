\c homely;

DROP INDEX IF EXISTS room_id;
CREATE INDEX room_id ON rooms (room_id);
ALTER TABLE rooms ADD PRIMARY KEY (room_id);

DROP INDEX IF EXISTS photo_id;
CREATE INDEX photo_id ON photos (photo_id);
ALTER TABLE photos ADD PRIMARY KEY (photo_id);
