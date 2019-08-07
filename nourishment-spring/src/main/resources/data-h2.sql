INSERT INTO RECIPE (R_ID, RNAME, RECIPE) VALUES (1, 'Sandwich', 'Make sandwich, then eat sandwich');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(1, 'Bread');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(2, 'Ham');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(3, 'Turkey');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(4, 'Lettuce');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(5, 'Cheese');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(6, 'Tomato');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(7, 'Onion');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(8, 'Pickles');
INSERT INTO INGREDIENT (I_ID, INGREDIENT) VALUES(9, 'Mayo');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 1, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 2, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 3, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 4, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 5, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 6, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 7, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 8, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(1, 9, 10, 'oz');

INSERT INTO appuser (u_id, fname, lname, uname, pass) values(1, 'Jason', 'Macias', 'jmacias', 'password');