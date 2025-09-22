const jwt = require('jsonwebtoken');

const user = {
    id: 1,
    name: "Student",};

const secret="mySecret";

const token=jwt.sign(user,secret,{expiresIn:"1h"});
console.log("Generated Token:",token);

try{
    const decoded=jwt.verify(token,secret);
    console.log("Decoded Payload:",decoded);
} catch(err){
    console.error("Error verifying token:",err.message);
}
