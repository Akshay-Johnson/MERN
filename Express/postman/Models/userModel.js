let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }

];

export const getAllUsers= () => users;

export const createUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        name : userData.name,

    };

    users.push(newUser);
    return newUser;
};
