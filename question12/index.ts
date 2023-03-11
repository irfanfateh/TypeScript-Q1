let personName:string[]=["Muhammad",'Irfan','Mowahed','Rehan','Ali'];
let msg:string='Hello name !, how are you?';
personName.forEach((name:string)=>{
    console.log(msg.replace('name',name));
});