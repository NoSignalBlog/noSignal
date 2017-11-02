insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (0,0,'admin','admin','admin','admin@admin.hu','admin','ADMIN', current_timestamp(),'image');
insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (1,0,'test','test','test','test@test.hu','test','USER', current_timestamp(),'');

insert into POSTS (ID, VERSION, TITLE, VISIBILITY, LIKES, TEXT, DATE)
values (0, 0,'first', true, 0, 'first...', current_timestamp());
insert into POSTS (ID, VERSION, TITLE, VISIBILITY, LIKES, TEXT, DATE)
values (1, 0,'second', false, 0, 'second...', current_timestamp());