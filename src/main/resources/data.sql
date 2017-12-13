insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (0,0,'admin','admin','admin','admin@admin.hu','$2a$10$KyRv5y3Y/lUqVn90R/9RFustMTnlanGwKBY/H/iY/T/cMix4XSH3y','ADMIN', current_timestamp(),'prof1.jpg');
insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (1,0,'test','test','test','test@test.hu','$2a$10$KyRv5y3Y/lUqVn90R/9RFustMTnlanGwKBY/H/iY/T/cMix4XSH3y','USER', current_timestamp(),'prof1.jpg');
insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (2,0,'arthur','N. Lynch','Arthur','
ArthurNLynch@teleworm.us','$2a$10$KyRv5y3Y/lUqVn90R/9RFustMTnlanGwKBY/H/iY/T/cMix4XSH3y','USER', current_timestamp(),'prof2.png');
insert into USERS (ID, VERSION, USERNAME, LASTNAME, FIRSTNAME, EMAIL, PASSWORD, ROLE, REGISTERDATE, PROFILEPICTURE)
values (3,0,'elek','Havasi','Elek','
helek@citromail.hu','$2a$10$KyRv5y3Y/lUqVn90R/9RFustMTnlanGwKBY/H/iY/T/cMix4XSH3y','USER', current_timestamp(),'prof2.png');

insert into POSTS (ID, VERSION, TITLE, USERID, VISIBILITY, LIKES, TEXT, DATE, VIDEOS)
values (0, 0,'first', 1, true, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' ||
                                  'Nam convallis blandit placerat. Fusce orci risus, semper ut maximus a, ' ||
                                  'pellentesque non urna. Integer molestie magna vitae pulvinar tincidunt. Suspendisse ' ||
                                  'potenti. Ut risus mauris, pulvinar quis sagittis sed, cursus et eros. Sed sit amet ' ||
                                  'quam in elit sodales ornare in eu nisi. Donec in mattis massa, quis tempor dolor.' ||
                                  ' Aliquam iaculis, odio non auctor convallis, risus arcu congue neque, quis ultrices ' ||
                                  'augue lectus in nulla. Cras dapibus laoreet feugiat. Etiam nec urna ornare, ultrices nisl eu, ' ||
                                  'tristique turpis. Etiam vel odio tincidunt, rhoncus dui ac, tincidunt odio. Fusce vel sem est.' ||
                                  'first...', current_timestamp(), 'https://www.youtube.com/watch?v=htPYk6QxacQ');
insert into POSTS (ID, VERSION, TITLE, USERID, VISIBILITY, LIKES, TEXT, DATE)
values (1, 0,'second', 0, false, 0, 'second...', current_timestamp());


insert into COMMENTS (ID, VERSION, POSTID, USERID, TEXT, DATE)
values(0, 0, 1, 1, 'comment', current_timestamp() );