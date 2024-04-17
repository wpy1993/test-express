## 汇总

Error: Cannot add or update a child row: a foreign key constraint fails (`myschooldb`.`students`, CONSTRAINT `students_ibfk_1` FOREIGN KEY (`ClassId`) REFERENCES `classes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)

这个报错和import的先后顺序没有关系，是我蠢了，班级只有15个，我却设置classId可以为16...