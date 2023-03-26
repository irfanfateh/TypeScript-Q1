let usernames: string[] = ['admin', 'eric', 'john', 'Ali', 'Usman'];

if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  usernames.forEach((name:string)=>{
    if (name=== 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${name}, thank you for logging in again.`);
    }
  });
}
//version two
usernames.splice(0);
if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  usernames.forEach((name:string)=>{
    if (name=== 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${name}, thank you for logging in again.`);
    }
  });
}
