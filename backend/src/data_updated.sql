INSERT INTO announcements (id, title, content, duration) VALUES
('hr.aryabhatta@iith.ac.in', 'Welcome New Employees', 'We are excited to welcome all new employees to our team. Please attend the orientation session tomorrow at 10:00 AM in the conference room.', 7),
('hr.bhaskara@iith.ac.in', 'Annual Picnic Event', 'We are organizing the annual company picnic event next Saturday. Don\'t miss this opportunity to unwind and enjoy a day filled with fun activities and delicious food!', 5),
('hr.charaka@iith.ac.in', 'Employee Recognition Awards', 'Nominations for the Employee Recognition Awards are now open. If you know someone who deserves recognition for their hard work and dedication, submit your nominations by the end of the week.', 7),
('hr.susruta@iith.ac.in', 'Health and Wellness Seminar', 'Join us for a health and wellness seminar next Thursday. Learn valuable tips on maintaining a healthy lifestyle and improving your overall well-being.', 3),
('hr.kautilya@iith.ac.in', 'Training Workshop on Time Management', 'A training workshop on time management will be held next Friday. Learn effective strategies for prioritizing tasks and maximizing productivity in your workday.', 3),
('hr.vyasa@iith.ac.in', 'New IT Policy Announcement', 'Please be informed about the new IT policy updates. Review the changes and ensure compliance with the updated guidelines.', 4),
('hr.brahmagupta@iith.ac.in', 'Employee Satisfaction Survey', 'Participate in the employee satisfaction survey to share your feedback and suggestions. Your input will help us improve the workplace environment.', 5),
('hr.varahamihira@iith.ac.in', 'Office Closure Notice', 'Please be informed that the office will remain closed on Friday, April 30th, in observance of a public holiday. Plan your work accordingly.', 3),
('office.hostel@iith.ac.in', 'Hostel Facility Maintenance', 'Maintenance work will be carried out in the hostel facilities next week. Please cooperate with the staff and adhere to any instructions for safety purposes.', 7);


-- To check

INSERT INTO announcements (id, title, content, created_at, duration)
VALUES ('hr.vyasa@iith.ac.in', 'Team Building Activity', 'Calling all team members to participate in a team building activity next Monday. Strengthen bonds, enhance', NOW(), 5 / (24 * 60));


INSERT INTO announcements (id, title, content, duration) VALUES
('hr.aryabhatta@iith.ac.in', 'Reminder: Performance Review Meeting', 'This is a reminder for all employees about the performance review meeting scheduled for next Monday. Make sure to prepare your progress reports and goals.', 3),
('hr.bhaskara@iith.ac.in', 'Safety Training Session', 'To ensure the safety of all employees, a mandatory safety training session will be conducted next Wednesday. Please be present at the designated venue on time.', 2),
('hr.charaka@iith.ac.in', 'Upcoming Holiday Schedule', 'Please be informed about the upcoming holiday schedule for the next month. Refer to the HR portal for details on office closures and working hours during the holiday season.', 4),
('hr.susruta@iith.ac.in', 'Employee Engagement Survey', 'Your feedback matters! Participate in the annual employee engagement survey to share your thoughts and suggestions. Your responses will help us improve the work environment.', 5),
('hr.kautilya@iith.ac.in', 'Employee Benefits Update', 'We are pleased to announce updates to the employee benefits program, including enhanced healthcare coverage and additional wellness perks. Stay tuned for more details.', 7),
('hr.vyasa@iith.ac.in', 'Team Building Activity', 'Calling all team members to participate in a team building activity next Monday. Strengthen bonds, enhance', 5),
('hr.brahmagupta@iith.ac.in', 'Monthly Employee Meeting', 'Reminder: The monthly employee meeting will be held next Wednesday. Attendance is mandatory for all employees.', 7),
('hr.varahamihira@iith.ac.in', 'Upcoming Training Programs', 'We have scheduled several training programs for the upcoming month. Check your email for details on the topics and schedules.', 7),
('office.hostel@iith.ac.in', 'Deadline Extension: Fee Payment', 'The deadline for fee payment has been extended to the end of the month. Ensure timely payment to avoid any late fees or penalties.', 5);



INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('cs21btech11052@iith.ac.in', 'Bhargav', 'password123', 'H101', 1234567890),
('cs21btech11059@iith.ac.in', 'Teja', 'password456', 'C212', 2345678901),
('cs21btech11062@iith.ac.in', 'Rohith', 'password789', 'F617', 3456789012),
('cs21btech11063@iith.ac.in', 'Pranav', 'passwordabc', 'G424', 4567890123),
('hr.aryabhatta@iith.ac.in', 'aryabhatta', 'passwordaryabhatta', 'A101', 5678901234),
('hr.bhaskara@iith.ac.in', 'bhaskara', 'passwordbhaskara', 'B202', 6789012345),
('hr.charaka@iith.ac.in', 'charaka', 'passwordcharaka', 'C303', 7890123456),
('hr.susruta@iith.ac.in', 'susruta', 'passwordsusruta', 'D404', 8901234567),
('hr.kautilya@iith.ac.in', 'kautilya', 'passwordkautilya', 'E505', 9012345678),
('hr.vyasa@iith.ac.in', 'vyasa', 'passwordvyasa', 'F406', 1234567890),
('hr.brahmagupta@iith.ac.in', 'brahmagupta', 'passwordbrahmagupta', 'G512', 2345678901),
('hr.varahamihira@iith.ac.in', 'varahamihira', 'passwordvarahamihira', 'H323', 3456789012),
('office.hostel@iith.ac.in', 'Admin', 'passwordAdmin374', 'H101', '0350135198');

---HR's original student id's
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('cs21btech11013@iith.ac.in', 'aryabhatta', 'passaryabhatta', 'A101', 5678901234),
('es21btech11003@iith.ac.in', 'bhaskara', 'passbhaskara', 'B202', 6789012345),
('ms21btech11033@iith.ac.in', 'charaka', 'passcharaka', 'C303', 7890123456),
('ep20btech11024@iith.ac.in', 'susruta', 'passsusruta', 'D404', 8901234567),
('ma20btech11017@iith.ac.in', 'kautilya', 'passkautilya', 'E505', 9012345678),
('me20btech11034@iith.ac.in', 'vyasa', 'passvyasa', 'F406', 1234567890),
('ce22btech11008@iith.ac.in', 'brahmagupta', 'passbrahmagupta', 'G512', 2345678901),
('ee23btech11025@iith.ac.in', 'varahamihira', 'passvarahamihira', 'H323', 3456789012);


--- for pod mates - Bhargav
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('ee21btech11053@iith.ac.in', 'Ethan', 'password456', 'H102', 1234567891),
('ms21btech11054@iith.ac.in', 'Taylor', 'password789', 'H103', 1234567892),
('cs21btech11055@iith.ac.in', 'Thomas', 'passwordabc', 'H104', 1234567893),
('cs22btech11056@iith.ac.in', 'Noah', 'passworddef', 'H105', 1234567894),
('cs23btech11057@iith.ac.in', 'Davis', 'passwxyz', 'H106', 1234567895),
('es21btech11058@iith.ac.in', 'Martinez', 'passworduvw', 'H107', 1234567896),
('ee21btech11059@iith.ac.in', 'Bob', 'passwordxyz', 'H108', 1234567897);

--- for pod mates - Teja
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('cs21btech11060@iith.ac.in', 'Emma', 'password123', 'C209', 2345678902),
('ma21btech11001@iith.ac.in', 'Liam', 'password789', 'C210', 2345678903),
('ma21btech11062@iith.ac.in', 'Sophia', 'passwordabc', 'C211', 2345678904),
('ms21btech11063@iith.ac.in', 'Noalon', 'passworddef', 'C213', 2345678905),
('es21btech11064@iith.ac.in', 'Ava', 'passwxyz', 'C214', 2345678906),
('ms21btech11065@iith.ac.in', 'William', 'passworduvw', 'C215', 2345678907),
('ee21btech11066@iith.ac.in', 'Charlotte', 'passwordxyz', 'C216', 2345678908);

--- for pod mates - Rohith
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('me21btech11007@iith.ac.in', 'Olivia', 'password123', 'F618', 3456789013),
('ce21btech11018@iith.ac.in', 'Bruce', 'passwordabc', 'F619', 3456789014),
('ce21btech11039@iith.ac.in', 'Avery', 'passworddef', 'F620', 3456789015),
('cs21btech11040@iith.ac.in', 'Harper', 'passwxyz', 'F621', 3456789016),
('ce21btech11021@iith.ac.in', 'Jackson', 'passworduvw', 'F622', 3456789017),
('ma21btech11032@iith.ac.in', 'Aria', 'passwordxyz', 'F623', 3456789018),
('me21btech11013@iith.ac.in', 'Lucas', 'password123', 'F624', 3456789019);

--- for pod mates - Pranav
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('ms21btech11074@iith.ac.in', 'Isabella', 'password123', 'G417', 4567890124),
('ms21btech11075@iith.ac.in', 'Mason', 'passworddef', 'G418', 4567890125),
('cs21btech11076@iith.ac.in', 'Elizabeth', 'passwxyz', 'G419', 4567890126),
('cs21btech11077@iith.ac.in', 'Michael', 'passworduvw', 'G420', 4567890127),
('cs21btech11078@iith.ac.in', 'Abigail', 'passwordxyz', 'G421', 4567890128),
('ce21btech11079@iith.ac.in', 'David', 'password123', 'G422', 4567890129),
('ce21btech11080@iith.ac.in', 'Sophie', 'password456', 'G423', 4567890130);



INSERT INTO hostel_blocks (block_id, block_name, hr_id, rating) VALUES
('A', 'Aryabhatta', 'hr.aryabhatta@iith.ac.in', 4.5),
('B', 'Bhaskara', 'hr.bhaskara@iith.ac.in', 3.8),
('C', 'Charaka', 'hr.charaka@iith.ac.in', 4.2),
('D', 'Susruta', 'hr.susruta@iith.ac.in', 4.0),
('E', 'Kautilya', 'hr.kautilya@iith.ac.in', 4.1),
('F', 'Vyasa', 'hr.vyasa@iith.ac.in', 4.7),
('G', 'Brahmagupta', 'hr.brahmagupta@iith.ac.in', 4.3),
('H', 'Varahamihira', 'hr.varahamihira@iith.ac.in', 4.6);

INSERT INTO floors (floor_number, lift_working_status, lift_last_serviced, washing_machine_working_status, washing_machine_last_serviced, water_purifier_working_status, water_purifier_last_serviced, bathroom_working_status, bathroom_last_serviced, housekeeping_working_status, housekeeping_last_serviced)
VALUES ('H1', TRUE, NOW(), FALSE, NOW(), TRUE, NOW(), TRUE, NOW(), TRUE, NOW()),
('C2', FALSE, NOW(), TRUE, NOW(), FALSE, NOW(), TRUE, NOW(), TRUE, NOW()),
('F6', TRUE, NOW(), TRUE, NOW(), TRUE, NOW(), FALSE, NOW(), FALSE, NOW()),
('G4', TRUE, NOW(), TRUE, NOW(), TRUE, NOW(), TRUE, NOW(), TRUE, NOW());

--- Total 128 + 8 rooms
INSERT INTO rooms (room_no, lan_status, electrical, furniture, occupied, leave_room) VALUES
('A101', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('B202', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C303', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('D404', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('E505', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F406', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G512', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H323', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()));

-- Add more rooms from H109 to H132 with randomized boolean values
INSERT INTO rooms (room_no, lan_status, electrical, furniture, occupied, leave_room) VALUES
('C201', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C202', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C203', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C204', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C205', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C206', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C207', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C208', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C209', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C210', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C211', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C212', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C213', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C214', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C215', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C216', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C217', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C218', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C219', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C220', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C221', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C222', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C223', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C224', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C225', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C226', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C227', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C228', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C229', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C230', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C231', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('C232', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F601', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F602', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F603', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F604', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F605', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F606', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F607', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F608', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F609', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F610', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F611', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F612', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F613', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F614', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F615', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F616', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F617', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F618', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F619', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F620', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F621', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F622', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F623', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F624', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F625', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F626', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F627', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F628', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F629', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F630', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F631', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('F632', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G401', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G402', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G403', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G404', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G405', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G406', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G407', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G408', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G409', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G410', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G411', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G412', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G413', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G414', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G415', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G416', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G417', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G418', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G419', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G420', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G421', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G422', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G423', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G424', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G425', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G426', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G427', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G428', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G429', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G430', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G431', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('G432', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H101', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H102', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H103', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H104', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H105', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H106', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H107', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H108', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H109', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H110', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H111', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H112', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H113', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H114', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H115', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H116', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H117', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H118', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H119', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H120', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H121', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H122', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H123', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H124', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H125', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H126', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H127', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H128', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H129', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H130', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H131', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND())),
('H132', ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()), ROUND(RAND()));







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

INSERT INTO tickets (id, tag, title, ticket_description, file_upload, ticket_status,reply, filtered) VALUES
('ms21btech11074@iith.ac.in', 'lift', 'Lift not working', 'The lift in block G is not working. Please send someone to fix it as soon as possible.', 'lift.jpg', FALSE, 'N/A', FALSE),
('ms21btech11075@iith.ac.in', 'washing_machine', 'Washing Machine Issue', 'The washing machine on the 4th floor is not functioning properly. It is not draining the water after the wash cycle.', 'washing_machine.jpg', FALSE, 'N/A', FALSE),
('cs21btech11076@iith.ac.in', 'water_filter', 'Water Purifier Maintenance', 'The water purifier in the common area needs maintenance. The water quality is not up to the mark.', 'water_purifier.jpg', FALSE, 'N/A', FALSE),
('cs21btech11077@iith.ac.in', 'bathroom', 'Bathroom Leakage', 'There is a leakage in the bathroom of room G420. The water is seeping through the walls and causing damage.', 'bathroom.jpg', FALSE, 'N/A', FALSE)

-- insert into users
INSERT INTO users (id, username, password, room_number, phone_number) VALUES
('office.hostel@iith.ac.in', 'Admin', 'passwordAdmin374', 'B101', '0350135198');


--insert into announcements by admin
INSERT INTO announcements (id, title, content, duration) VALUES
('office.hostel@iith.ac.in', 'Hostel Facility Maintenance', 'Maintenance work will be carried out in the hostel facilities next week. Please cooperate with the staff and adhere to any instructions for safety purposes.', 7);
INSERT INTO announcements (id, title, content, duration) VALUES
('hr.aryabhatta@iith.ac.in', 'Hostel Facility Maintenance', 'Maintenance work will be carried out in the hostel facilities next week. Please cooperate with the staff and adhere to any instructions for safety purposes.', 7);

