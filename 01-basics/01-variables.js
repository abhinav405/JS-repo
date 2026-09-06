const accountId = 23319
let accountEmail = "abhinav@google.com"
var accountPassword = "0303"
accountCity = "Bareilly"
let accountState; /* if u don't give any value then its default value will be undefined */
// accountId = 02 -> this is invalid i.e. u cannot change value of const
accountEmail = "abc@gmail.com"
accountPassword = "1234"
accountCity = "Bhopal"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* Prefer not to use var bcz of issue of block scope and functional scope */
