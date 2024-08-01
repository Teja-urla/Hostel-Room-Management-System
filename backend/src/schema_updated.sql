create database hrms;

use hrms;

create table users (
         id VARCHAR(255) primary key,
         username varchar(255) not null,
         password varchar(255) not null,
        room_number varchar(255),
       -- room number in format A111
        phone_number BIGINT
     );

create table announcements (
    id VARCHAR(255) not null,
    -- who posted the announcement
    title varchar(255) not null,
    content varchar(500) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- duration of announcement
    duration INT not null,
    -- foreign key (user_id) references users(id)
    PRIMARY KEY (id, created_at)
);


create table hostel_blocks (
    block_id VARCHAR(255) primary key,
    block_name varchar(255) not null,
    hr_id VARCHAR(255) not null,
    -- store ratings of the block
    rating DECIMAL(3, 1) DEFAULT 0.0
);


CREATE TABLE  check_in (
    id VARCHAR(255) not null,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duration INT NOT NULL,
    reason VARCHAR(500) not null,
    file_upload VARCHAR(255) not null,
    title VARCHAR(255) not null,
    primary key(id, created_time)
);

CREATE TABLE  room_exchange (
    id VARCHAR(255) not null,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    room_exchange_description VARCHAR(500),
    room_number_from varchar(255) not null,
    room_number_to varchar(255) not null,
    primary key(id, created_time)
);


CREATE TABLE floors (
    floor_number VARCHAR(255) PRIMARY KEY NOT NULL,
    lift_working_status BOOLEAN not null,
    lift_last_serviced TIMESTAMP not null,
    washing_machine_working_status BOOLEAN not null,
    washing_machine_last_serviced TIMESTAMP not null,
    water_filter_working_status BOOLEAN not null,
    water_filter_last_serviced TIMESTAMP not null,
    bathroom_working_status BOOLEAN not null,
    bathroom_last_serviced TIMESTAMP not null,
    housekeeping_working_status BOOLEAN not null,
    housekeeping_last_serviced TIMESTAMP not null
);


CREATE TABLE rooms (
    room_no VARCHAR(255) NOT NULL PRIMARY KEY, -- Primary key in the format A123
    lan_status BOOLEAN not null,
    electrical BOOLEAN not null,
    furniture BOOLEAN not null,
    occupied BOOLEAN not null,
    leave_room BOOLEAN not null
);


CREATE TABLE tickets (
  id VARCHAR(255) NOT NULL,
  raised_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tag ENUM('lift', 'washing_machine', 'water_filter', 'bathroom', 'house_keeping', 'lan_status', 'electrical', 'furniture', 'civil_complaints', 'pest_control', 'green_office') NOT NULL,
  title VARCHAR(255) NOT NULL,
  ticket_description VARCHAR(500) NOT NULL,
  file_upload VARCHAR(255) NOT NULL,
  ticket_status BOOLEAN NOT NULL,
  reply VARCHAR(255),
  filtered BOOLEAN NOT NULL,
  PRIMARY KEY (id, raised_time)
);



-- room_number in users is foreign key to rooms (room_no)
ALTER TABLE users ADD FOREIGN KEY (room_number) REFERENCES rooms(room_no);

-- id in announcements is foreign key to users (id)
ALTER TABLE announcements ADD FOREIGN KEY (id) REFERENCES users(id);

-- hr_id in hostel_blocks is foreign key to users (id)
ALTER TABLE hostel_blocks ADD FOREIGN KEY (hr_id) REFERENCES users(id);

-- id in check_in is foreign key to users (id)
ALTER TABLE check_in ADD FOREIGN KEY (id) REFERENCES users(id);

-- id in room_exchange is foreign key to users (id)
ALTER TABLE room_exchange ADD FOREIGN KEY (id) REFERENCES users(id);

-- room_exchange_from in room_exchange is foreign key to rooms (room_no)
ALTER TABLE room_exchange ADD FOREIGN KEY (room_number_from) REFERENCES rooms(room_no);

-- room_exchange_to in room_exchange is foreign key to rooms (room_no)
ALTER TABLE room_exchange ADD FOREIGN KEY (room_number_to) REFERENCES rooms(room_no);

-- id in tickets is foreign key to users (id)
ALTER TABLE tickets ADD FOREIGN KEY (id) REFERENCES users(id);
