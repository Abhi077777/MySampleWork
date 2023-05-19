---unique key constraints------


use EmpDetails

SELECT * FROM VERSION
SELECT * FROM IGENDER

CREATE TABLE VERSION(

ID INT NOT NULL PRIMARY KEY,
NAME VARCHAR(50) NOT NULL,
EMAIL VARCHAR(50) NOT NULL,
GENDERID INT NULL,
AGE INT NULL

);

CREATE TABLE IGENDER(

ID INT NOT NULL PRIMARY KEY,
GENDER VARCHAR(20)

);
ALTER TABLE VERSION ADD CONSTRAINT VERSION_IGENDER_FK
FOREIGN KEY (GENDERID) REFERENCES IGENDER(ID)

INSERT INTO IGENDER VALUES(2,'FEMALE');

--UKC ON EMAIL--

ALTER TABLE VERSION
ADD CONSTRAINT UQ_VERSION_EMAIL UNIQUE(EMAIL)


--INSERT SOME DATA AND LETS SEE WHAT HAPPEN---
SET IDENTITY_INSERT  VERSION ON

INSERT INTO VERSION VALUES(1,'ABHISHEK','AB=VI@GMAIL.COM',1,22);
UPDATE VERSION SET CITY = 'MOHALI'
WHERE ID = 1
INSERT INTO VERSION VALUES(2,'RAVI','RAVI@GMAIL.COM',1,25,'SHIMLA')
INSERT INTO VERSION VALUES(3,'AKSHAY','AKSHU@GMAIL.COM',1,27,'BILASPUR')
INSERT INTO VERSION VALUES(4,'SHIVANI','SHIVI@GMAIL.COM',2,24,'HAMIRPUR')
INSERT INTO VERSION VALUES(5,'NEKRAJ','NEKU@GMAIL.COM',2,29,'SHIMLA')
UPDATE VERSION SET GENDERID = 1 WHERE ID = 5
INSERT INTO VERSION VALUES(6,'SAKSHI','SUVI@GMAIL.COM',2,23,'HAMIRPUR')
INSERT INTO VERSION VALUES(7,'SOURAV','SOU@GMAIL.COM',1,22,'BILASPUR')

ALTER TABLE VERSION
ADD CITY VARCHAR(20)


ALTER TABLE VERSION
ADD SALARY INT NULL

UPDATE VERSION SET SALARY = 65000 WHERE ID = 3


----SELECT STATEMENT-------


SELECT * FROM VERSION

SELECT DISTINCT NAME,CITY FROM VERSION

SELECT * FROM VERSION WHERE CITY = 'BILASPUR'

SELECT * FROM VERSION WHERE CITY <> 'BILASPUR'

SELECT  * FROM VERSION  WHERE AGE IN (20,23,29) 

SELECT * FROM VERSION WHERE AGE BETWEEN 20 AND 25


SELECT * FROM VERSION WHERE CITY LIKE ('B%R')

SELECT * FROM VERSION WHERE (CITY = 'BILASPUR' OR CITY = 'HAMIRPUR') AND AGE >= 22

SELECT * FROM VERSION ORDER BY NAME DESC , AGE ASC

SELECT * FROM VERSION ORDER BY NAME ASC

SELECT TOP 3 * FROM VERSION

SELECT TOP 2 NAME FROM VERSION

SELECT TOP 50 PERCENT * FROM VERSION

SELECT * FROM VERSION ORDER BY AGE DESC

SELECT TOP 1 * FROM VERSION ORDER BY AGE DESC




----GROUP BY-------------

CREATE TABLE EMP(

ID INT NOT NULL PRIMARY KEY,
NAME VARCHAR(50) NULL,
GENDER  VARCHAR(10),
SALARY INT NULL,
CITY VARCHAR(50) NULL


);

INSERT INTO EMP VALUES (9,'NITIN','MALE',260000,'SPAIN');



SELECT * FROM EMP

SELECT SUM(SALARY) FROM EMP


SELECT MAX(SALARY) FROM EMP

SELECT MIN(SALARY) FROM EMP

SELECT SUM(SALARY) FROM EMP WHERE CITY = 'MUMBAI' 

SELECT CITY, SUM(SALARY) AS TOTALSALARY
FROM EMP 
GROUP  BY CITY


SELECT CITY,GENDER, SUM(SALARY) AS TOTALSALARY 
FROM EMP
GROUP BY CITY,GENDER
ORDER BY CITY

SELECT GENDER,CITY, SUM(SALARY) AS TOTALSALARY 
FROM EMP
GROUP BY GENDER,CITY
ORDER BY CITY



SELECT GENDER,CITY, SUM(SALARY) AS TOTALSALARY , COUNT(ID) AS [TOTAL EMPLOYEE]
FROM EMP
GROUP BY GENDER,CITY

SELECT GENDER,CITY, SUM(SALARY) AS TOTALSALARY , COUNT(ID) AS [TOTAL EMPLOYEE]
FROM EMP
WHERE GENDER = 'MALE'
GROUP BY GENDER,CITY

SELECT GENDER,CITY, SUM(SALARY) AS TOTALSALARY , COUNT(ID) AS [TOTAL EMPLOYEE]
FROM EMP
GROUP BY GENDER,CITY
HAVING GENDER = 'MALE'










