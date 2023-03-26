function show_magicians(magicians:string[]){
  magicians.forEach((magician:string,index:number)=>{
    console.log(`${index+1}- ${magician}`);
  });
}
function show_great(magicians:string[]):string[]{
  magicians=magicians.map((magician:string)=>{
    return "The Great "+magician;
  });
  show_magicians(magicians);
  return magicians;
}
const magicians:string[]=['A_magician','B_magician','C_magician'];
show_magicians(magicians);
const greatMagicians=show_great(magicians);
console.log('in main we have two arrays, original and modified ');
console.log('Original: ');
show_magicians(magicians);
console.log('Modified: ');
show_magicians(greatMagicians);
