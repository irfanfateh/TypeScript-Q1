function show_magicians(magicians:string[]){
  magicians.forEach((magician:string,index:number)=>{
    console.log(`${index+1}- ${magician}`);
  });
}
const magicians:string[]=['A_magician','B_magician','C_magician'];
show_magicians(magicians);