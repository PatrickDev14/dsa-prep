-- There is a database with exam scores. Write a query to print the names of the students who scored an even number of marks. The names should be
-- listed in uppercase, alphabetically ascending. The result shold be in the format:  NAME  MARKS
SELECT UPPER(NAME),MARKS
FROM exam
WHERE mod(MARKS,2)=0
ORDER BY NAME;