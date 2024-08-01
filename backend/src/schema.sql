create database hrms;

use hrms;

create table users (
    id VARCHAR(255) primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    room_number VARCHAR(255),
    -- room number in format A111
    phone_number BIGINT
);

create table announcements (
    id VARCHAR(255) not null,
    -- who posted the announcement
    title varchar(255) not null,
    content varchar(255) not null,
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


CREATE TABLE IF NOT EXISTS check_in (
    id VARCHAR(255) NOT NULL,
    start_time TIMESTAMP ,
    end_time TIMESTAMP,
    reason VARCHAR(255),
    file_upload VARCHAR(255),
    title VARCHAR(255),
    primary key(id, start_time)
);

CREATE TABLE IF NOT EXISTS room_exchange (
    id INT NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    room_exchange_description VARCHAR(255),
    room_number_from INT NOT NULL,
    room_number_to INT NOT NULL,
    primary key(id, created_time)
);


CREATE TABLE floors (
    floor_number VARCHAR(10) PRIMARY KEY NOT NULL,
    lift_working_status BOOLEAN,
    lift_last_serviced TIMESTAMP,
    washing_machine_working_status BOOLEAN,
    washing_machine_last_serviced TIMESTAMP,
    water_purifier_working_status BOOLEAN,
    water_purifier_last_serviced TIMESTAMP,
    bathroom_working_status BOOLEAN,
    bathroom_last_serviced TIMESTAMP,
    housekeeping_working_status BOOLEAN,
    housekeeping_last_serviced TIMESTAMP
);


CREATE TABLE rooms (
    room_no VARCHAR(5) NOT NULL PRIMARY KEY, -- Primary key in the format A123
    lan_status BOOLEAN,
    electrical BOOLEAN,
    furniture BOOLEAN,
    occupied BOOLEAN,
    leave_room BOOLEAN
);


CREATE TABLE tickets (
    id VARCHAR(255) NOT NULL,
    raised_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tag INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    ticket_description VARCHAR(255) NOT NULL,
    file_upload VARCHAR(255) NOT NULL,
    ticket_status BOOLEAN,
    reply VARCHAR(255),
    filtered BOOLEAN,
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


hr- email sample
hr.aryabhatta@iith.ac.in
hostel office email sample
office.hostel@iith.ac.in

-- insert random data into announcements some by hr and some by Hostel office
INSERT INTO announcements (id, title, content, duration) VALUES ('hr.raman@iith.ac.in', 'ann1', 'Hostel office is closed for today', 1);
INSERT INTO announcements (id, title, content, duration) VALUES ('hr.raman@iith.ac.in', 'ann2', 'Hostel office is closed for today', 1);
INSERT INTO announcements (id, title, content, duration) VALUES ('hr.raman@iith.ac.in', 'ann3', 'Hostel office is closed for today', 1);


INSERT INTO announcements (id, title, content, duration) VALUES ('office.hostel@iith.ac.in', 'ann1', 'Hostel office is closed for today', 1);
INSERT INTO announcements (id, title, content, duration) VALUES ('office.hostel@iith.ac.in', 'ann2', 'Hostel office is closed for today', 1);
INSERT INTO announcements (id, title, content, duration) VALUES ('office.hostel@iith.ac.in', 'ann3', 'Hostel office is closed for today', 1);


select * from announcements where id='hr.raman@gmail.com' or id='office.hostel@iith.ac.in';