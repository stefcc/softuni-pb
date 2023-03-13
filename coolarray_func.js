const grades = [80, 88, 94, 98, 100];
const isHighPerforminClass = grades.every(grade =>{
    return grade >= 80;
}); 

console.log(isHighPerforminClass);


