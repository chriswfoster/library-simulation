INSERT INTO sim_user (username, password) SELECT $1, $2
WHERE NOT EXISTS (SELECT * FROM sim_user WHERE username = $1)
