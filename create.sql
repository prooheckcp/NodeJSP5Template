DROP SCHEMA IF EXISTS ProgrammingTest;
CREATE DATABASE IF NOT EXISTS ProgrammingTest;

USE ProgrammingTest;

CREATE TABLE users_accounts(
	user_id INT NOT NULL AUTO_INCREMENT,
    user_username VARCHAR(255),
    user_password VARCHAR(255),
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