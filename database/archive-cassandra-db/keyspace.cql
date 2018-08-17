DROP KEYSPACE IF EXISTS homelyapp;

CREATE KEYSPACE homelyapp WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE homelyapp;

CREATE COLUMNFAMILY photos(
  id INT,
  photo_id INT,
  room_id INT,
  room_name TEXT,
  verified BOOLEAN,
  url TEXT,
  description TEXT,
  PRIMARY KEY((room_id), id)
);

COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_1.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_2.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_3.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_4.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_5.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_6.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_7.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_8.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_9.tsv' WITH DELIMITER='\t';
COPY photos (id, photo_id, room_id, room_name, verified, url, description) FROM '/Users/katietruong/Documents/HR/SDC/Photo-Carousel-Service/data/cassandra_10.tsv' WITH DELIMITER='\t';

