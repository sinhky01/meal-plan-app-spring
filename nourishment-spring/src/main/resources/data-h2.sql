INSERT INTO RECIPE (R_ID, RNAME, RECIPE) VALUES (1, 'Sandwich', 'Make sandwich, then eat sandwich');
INSERT INTO RECIPE (R_ID, RNAME, RECIPE) VALUES (2, 'Fish and Chips', 'Add fish, add chips, eat fish and chips');
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
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(2, 10, 10, 'oz');
INSERT INTO MEAL_COMPOSITION (R_ID, I_ID, QUANTITY, UNITS) VALUES(2, 11, 10, 'oz');

INSERT INTO appuser ( u_id, fname, lname, uname, pass) values( 1,'Jason', 'Macias', 'jmacias', 'password');
INSERT INTO characteristic (characteristic) VALUES ('sandwich');
INSERT INTO characteristic (characteristic) VALUES ('lunch');
INSERT INTO characteristic (characteristic) VALUES ('fish');
INSERT INTO RECIPE_CHARACTERISTIC (R_ID,characteristic) VALUES (1,'sandwich');
INSERT INTO RECIPE_CHARACTERISTIC (R_ID,characteristic) VALUES (1,'lunch');

INSERT INTO RECIPE_CHARACTERISTIC (R_ID,characteristic) VALUES (2,'fish');


INSERT INTO user_preference VALUES (1,1,1);
INSERT INTO user_preference VALUES (2,1,1);
INSERT INTO user_preference VALUES (5,1,1);

INSERT INTO user_history VALUES (1,1,1);


