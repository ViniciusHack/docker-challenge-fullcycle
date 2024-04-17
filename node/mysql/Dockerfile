FROM mysql:5.7

# Run the SQL script to create the table poeple if it does not exist
COPY ./setup.sql /docker-entrypoint-initdb.d/setup.sql

CMD ["mysqld"]