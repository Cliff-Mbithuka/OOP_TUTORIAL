let userOne = {
    email: 'cliff@gmail.com',
    name: 'mbithuka',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}

console.log(userOne.name);
userOne.login();
userOne.logout();