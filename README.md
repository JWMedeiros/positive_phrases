# positive_phrases

A Website designed to foster a little bit more positivity in your day.

# Usage Instructions
This project is designed to be run locally as a test project. It contains both the server and the client for the application. It also uses a mysql database. Before using, make sure you are connected to your favorite mysql database and that you run the schema located in /server/db using: source schema.sql from the mysql command line. Alternatively you can manually create the database schema. (Beware that if you are using the schema it first drops the db then recreates it so it should only be used for initial setup)

The client runs on localhost 3000, and the server runs on localhost 5000, so be sure that both those ports are free as well. Running npm -i from the root directory will install all dependancies, including both the dependancies for the server and the client.

Create a .env file in the server directory, similar to the .env.EXAMPLE, make sure the database variables are correct to connect to your specific db. 
