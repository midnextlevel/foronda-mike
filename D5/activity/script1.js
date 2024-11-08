let number = parseInt(prompt("Enter Number"))

if(number>=90){
 alert('A');
}else if(number<=89 && number>=80){
    alert('B');
}else if(number<=79 && number>=70){
    alert('C');
}else if(number<=69 && number>=60){
    alert('D');
}else if(number<60){
    alert('F');
}