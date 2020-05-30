DROP SCHEMA IF EXISTS ProgrammingTest;
CREATE DATABASE IF NOT EXISTS ProgrammingTest;

USE ProgrammingTest;

CREATE TABLE users_accounts(
	user_id INT NOT NULL AUTO_INCREMENT,
    user_username VARCHAR(255),
    user_password VARCHAR(255),
    siege_catapults INT DEFAULT 5,
    siege_soldiers INT DEFAULT 100,
    siege_archers INT DEFAULT 10,
    castle_population INT DEFAULT 1000,
    castle_soldiers INT DEFAULT 500,
    castle_strength INT DEFAULT 100,
    PRIMARY KEY(user_id)

);

DELIMITER $$

CREATE PROCEDURE CreateNewAccount(IN username VARCHAR(255), IN userpass VARCHAR(255))
BEGIN
	
    SET @CheckIfExists = (SELECT
		user_username
    FROM 
		ProgrammingTest.users_accounts
	WHERE
		username = user_username);
    
    IF @CheckIfExists = username THEN
    
		SELECT * FROM users_accounts;
        
    ELSE
    
		INSERT INTO users_accounts(user_username, user_password)
        VALUES(username, userpass);
    
    END IF;
    
    

END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE LoginAccount(IN username VARCHAR(255), IN userpass VARCHAR(255))
BEGIN
	
    SET @CheckIfExists = (SELECT
		user_username
    FROM 
		ProgrammingTest.users_accounts
	WHERE
		username = user_username AND userpass = user_password);
    
    IF @CheckIfExists = username THEN
    
		SELECT * FROM users_accounts;
	
    
    END IF;
    
    

END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE CatapultAttack(IN username VARCHAR(255), IN amount INT)
BEGIN
	
    UPDATE users_accounts 
	SET 
		siege_catapults = siege_catapults - 1,
        castle_strength = castle_strength - amount
	WHERE 
		user_username = username;
	
    SELECT siege_catapults FROM users_accounts WHERE user_username = username;
		
    
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE SoldiersAttack(IN username VARCHAR(255), IN amount INT)
BEGIN
	
    UPDATE users_accounts 
	SET 
		siege_soldiers = siege_soldiers - 5,
        castle_soldiers = castle_soldiers - amount
	WHERE 
		user_username = username;
	
    SELECT siege_catapults FROM users_accounts WHERE user_username = username;
		
    
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE ArchersAttack(IN username VARCHAR(255), IN amount INT)
BEGIN
	
    UPDATE users_accounts 
	SET 
		siege_archers = siege_archers - 5,
        castle_population = castle_population - amount
	WHERE 
		user_username = username;
	
    SELECT siege_catapults FROM users_accounts WHERE user_username = username;
		
    
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE AddTroops(IN username VARCHAR(255), IN C_amount_soldiers INT, IN S_amount_catapults INT, IN S_amount_soldiers INT, IN S_amount_archers INT)
BEGIN
	
    UPDATE users_accounts 
	SET 
		siege_catapults = siege_catapults + S_amount_catapults,
		siege_soldiers = siege_soldiers + S_amount_soldiers,
		siege_archers = siege_archers + S_amount_archers,
        castle_soldiers = castle_soldiers + C_amount_soldiers
	WHERE 
		user_username = username;
	
    SELECT * FROM users_accounts WHERE user_username = username;
		
    
END$$
DELIMITER ;
