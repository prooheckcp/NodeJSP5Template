CALL CreateNewAccount('test', '123');

CALL CatapultAttack('test', 10);
CALL SoldiersAttack('test', 10);
CALL ArchersAttack('test', 10);

CALL AddTroops('test', 10, 20, 10, 10);

SELECT * FROM users_accounts WHERE user_username = 'test';
