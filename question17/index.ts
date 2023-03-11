let names:string[]=["Muhammad",'Irfan','Sultan'];
let printInvitations=(name:string)=> console.log(`Dear ${name},\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Muhamamd Irfan\n`);
names.forEach((name:string)=>{
    printInvitations(name);
});
let busyGuestIndex=Math.floor(Math.random()*names.length);

console.log(`${names[busyGuestIndex]} can't make it to the dinner.\n`);
names[busyGuestIndex]='Mawahed';

names.forEach((name: string) => {
    printInvitations(name);
});

console.log(`Hey! i got a big dinner table, so i'm inviting more guests.`);

names.unshift('Rehan');
names.splice(2,0,'Ali');
names.push('Usman');

names.forEach((name: string) => {
    printInvitations(name);
});

console.log(`I'm sorry to inform you that the big dinner table is not available, so unfortunately, I can only invite two guests.\n`);

let removedGuests=names.splice(0,names.length-2);

removedGuests.forEach((name: string) => {
    console.log(`i'm sorry ${name} to inform you that you are not invited`);
});


names.forEach((name: string) => {
    printInvitations(name);
});

names.splice(0);
