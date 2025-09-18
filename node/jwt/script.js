const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

const SampleUser = {
    id: 1,
    username: 'sampleuser',
    role: 'user'
};

function generateJWT(user) {
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    };

    const options = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
}

function verifyJWT(token) {
    try{
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        console.error("Error verifying JWT:", err.message);
        return null;
    }
}

const userToken = generateJWT(SampleUser);
console.log("Generated JWT:", userToken);

const decodedToken = verifyJWT(userToken);
if (decodedToken) {
    console.log("Decoded JWT payload:", decodedToken);
}   

