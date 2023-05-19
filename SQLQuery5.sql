create database Sample2

create table Employee(

ID int NOT NULL PRIMARY KEY,
NAME varchar(20) NULL,
EMAIL varchar(50) NULL,
DEPARTMENTID int NULL


);
create table Department(
ID int NOT NULL PRIMARY KEY,
DEPARTMENT varchar(50) NOT NULL
);

ALTER TABLE Employee ADD CONSTRAINT Employee_Department_FK
FOREIGN KEY (DEPARTMENTID) REFERENCES DEPARTMENT(ID)


select * from Department
select * from Employee

insert into Employee(ID,NAME,EMAIL) values (4,'Akash','Akash@gmail.com')

ALTER TABLE Employee
ADD CONSTRAINT DF_Employee_DEPARTMENTID
DEFAULT 3 FOR DEPARTMENTID      --here is the deafult constraint for null value we an assign by adding default constraint and give the value what we assign to it




INSERT INTO Employee (ID,NAME,EMAIL) VALUES(5,'Rahul','Rahu@gmail.com')

INSERT INTO Employee (ID,NAME,EMAIL,DEPARTMENTID) VALUES (6,'Ruhi','Ruhi@gmail.com',1)

INSERT INTO Employee (ID,NAME,EMAIL,DEPARTMENTID) VALUES (7,'John','john@gmail.com',NULL)



---Cascading referential integrity------
DELETE FROM Department WHERE ID = 2 -- CASCADING SET DEFAULT MEANS IF WE DELETE  ID FROM THE TABLE DEPARTMENT THE ALL THE ID 2 IS DELETE AND DEFAULT  CONSTRINT WILL REPLACE ALL THE RECODS WHICH ARE PREVISOULY SET TO THE ID = 2

--Check Constraint--------

ALTER TABLE Employee
ADD CONSTRAINT CK_Employee_Age CHECK (Age > 0 AND Age < 100)

-- identity column -------

	INSERT INTO Employee VALUES (8,'Ramesh','rame@gmail.com',1,25)

	SELECT * FROM Employee1

	INSERT INTO Employee1 values('Tom')
	INSERT INTO Employee1 values('John')
	INSERT INTO Employee1 values('Sara')

	DELETE FROM Employee1 WHERE EmployeeID = 1

	INSERT INTO Employee1 values('Todd')

	SET IDENTITY_INSERT Employee1 ON
		SET IDENTITY_INSERT Employee1 OFF

	INSERT INTO Employee1 (EmployeeID,Name) values(1,'Cena')

	INSERT INTO Employee1 values('Ravi')


	---Retrieving Identity Column Values-----
	