const grades = [80, 88, 94, 98, 100];
const isHighPerformingClass = grades.every(grade =>{
    return grade >= 80;
}); 

console.log(isHighPerformingClass);


