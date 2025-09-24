CREATE USER IF NOT EXISTS 'vineela'@'localhost' IDENTIFIED BY 'Vineela';
GRANT ALL PRIVILEGES ON foodshare.* TO 'vineela'@'localhost';
FLUSH PRIVILEGES;
