let users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Smith"},
    // Anda bisa menambahkan user lainnya di sini
];

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
};
