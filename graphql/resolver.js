const users = [
    {
        name: "John",
        email: 'john@users.c',
        age: 35
    },
    {
        name: "Tim",
        email: 'tim@users.c',
        age: 25
    }
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({min, max, count}) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min;
            arr.push(random);
        }
    }
}