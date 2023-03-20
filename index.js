// Sample of students with their grades .....Averaged.
var students= [['Carlos', 80], ['Tosh', 75], ['Lee', 54], ['Sean', 42], ['Manx', 68]];
//this is a declaration of average marks variable
var Avgmks = 0;
//a loop to compute the total marks
for (var i=0; i < students.length; i++) {
        Avgmks += students[i][1];
        var mks= (Avgmks/students.length);
}
//The grading system used to print the variables defined.
console.log("Average grade: " + (Avgmks)/students.length);
        if (mks < 40){
          console.log("Grade :E ");      
          } 
        else if (mks < 49) {
                console.log("Grade : D"); 
                  } 
        else if (mks < 59 ) 
             {
                console.log("Grade : C"); 
        } else if (mks > 60 ) {
                console.log("Grade : B"); 
        } else if (mks >79) {
                console.log("Grade : A"); 
                  
}   
