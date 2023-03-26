function show_magicians(magicians:string[]){
  magicians.forEach((magician:string,index:number)=>{
    console.log(`${index+1}- ${magician}`);
  });
}
function show_great(magicians:string[]){
  magicians=magicians.map((magician:string)=>{
    return "The Great "+magician;
  });
  show_magicians(magicians);
}
const magicians:string[]=['A_magician','B_magician','C_magician'];
show_magicians(magicians);
show_great(magicians);