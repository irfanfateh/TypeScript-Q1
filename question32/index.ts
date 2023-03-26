let current_users: string[] = ['admin', 'eric', 'john', 'Ali', 'Usman'];
let new_users: string[] = ['admin', 'irfan', 'john','ayyan','utban'];
const lowerCaseCurrentUsers = current_users.map(current_user => current_user.toLowerCase());
new_users.forEach((name:string)=>{
  if (lowerCaseCurrentUsers.indexOf(name.toLowerCase())>=0) {
    console.log(`Sorry, the username '${name}' is already taken. Please enter a new username.`);
  }else{
    console.log(`The username '${name}' is available.`);
  }
});