CREATE DATABASE clinicaldb;

CREATE TABLE info(

    sl_no SERIAL PRIMARY KEY,
    patient_name varchar(40),
    phone varchar(10),
    token_num integer 
);