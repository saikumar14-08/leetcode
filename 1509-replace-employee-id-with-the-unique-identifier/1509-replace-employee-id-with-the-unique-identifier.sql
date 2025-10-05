# Write your MySQL query statement below

SELECT eu.unique_id, e.name
FROM employees e
left JOIN EmployeeUNI eu ON e.id = eu.id;
