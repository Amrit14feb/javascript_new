const accountId = 1402
let accountEmail = "amrit.mishra@.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 2
/*prefer  not to use var because of functional scope and block scope
*/
accountEmail = "jk@.com"
accountPassword = "15432"
console.log([accountEmail,accountPassword,accountCity]);
console.table([accountEmail,accountPassword,accountCity,accountState])