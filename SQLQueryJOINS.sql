USE Management

-------JOINS--------------

CREATE TABLE DETAIL(

ID INT NOT NULL PRIMARY KEY,
NAME VARCHAR(50) NULL,
GENDER NVARCHAR(10) NULL,
SALARY INT NULL,
DEPARTMENTID INT

);

CREATE TABLE DEPARTMENT(

ID INT NOT NULL PRIMARY KEY,
DNAME VARCHAR(20) NULL,
LOCATION VARCHAR(50) NULL,
DHEAD VARCHAR(20) NULL

);

ALTER TABLE DETAIL ADD CONSTRAINT DETAIL_DEPARTMENT_FK
FOREIGN KEY (DEPARTMENTID) REFERENCES DEPARTMENT(ID)


INSERT INTO DETAIL VALUES(10,'RUSSELL','MALE',8800,NULL);

INSERT INTO DEPARTMENT VALUES(4,'BDE','SYDNEY','CINDRELLA' );

SELECT * FROM DETAIL
SELECT * FROM DEPARTMENT

---INNER JOIN ONLY RETURNS THE ,MATCHING ROWS BETWEEN THE BOTH THE TABLE------

SELECT NAME , GENDER,SALARY,DNAME
FROM DETAIL
INNER JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID


---LEFT JOIN RETUR THE ALL VALUE FROM LEFT TABLE AND MATCHING VALUE FROM THE RIGHT TABLE----------

SELECT NAME,GENDER,SALARY,DNAME
FROM DETAIL
LEFT JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID

--RIGHT JOIN RETURNS ALL THE MATCHING ROWS + NON MATCHING ROWS FROM THE RIGHT TABLE------


SELECT NAME ,GENDER,SALARY,DNAME
FROM DETAIL
RIGHT JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID


--FULL OUTER JOIN RETURNS ALL ROWS FROM THE BOTH LEFT AND RIGHT TABLE INCLUDING THE NON MATCHING ROWS----

SELECT NAME ,GENDER,SALARY,DNAME
FROM DETAIL
FULL JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID

--CROSS JOIN PRODUCES THE CARTESIAN PRODUCT OF THE 2 TABLE INVOLVED THE JOIN FOR EXAMPLE IN THE EMPLOYEE TABLE WE HAVE 10 ROWS AND IN THE DEPARTMENT TABLE WE HAVE 4 ROWS SO A CROSS BETWEEN THESE 2 TABLES PRODUCE 40 ROWS---------

SELECT NAME ,GENDER,SALARY,DNAME
FROM DETAIL
CROSS JOIN DEPARTMENT



-----ADVANCED JOIN FOR FIND NON MATCHING VALUE-------

SELECT NAME,GENDER,SALARY,DNAME
FROM DETAIL
LEFT JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID
WHERE DETAIL.DEPARTMENTID IS NULL
--WHERE DEPARTMENT.ID IS NULL


SELECT NAME,GENDER,SALARY,DNAME
FROM DETAIL
RIGHT JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID
WHERE DETAIL.DEPARTMENTID IS NULL

SELECT NAME,GENDER,SALARY,DNAME
FROM DETAIL
FULL JOIN DEPARTMENT
ON DETAIL.DEPARTMENTID = DEPARTMENT.ID
WHERE DETAIL.DEPARTMENTID IS NULL



