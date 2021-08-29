const Manager = require('../lib/Manager');

test ('confirm office number', () => {
    const manager = new manager('Rob Atalla', '777', 'rob.atalla@gmail.com', '2727');
    expect(manager.OfficeNumber()).toBe('777');
});

test ('confirm role', () => {
    const manager = new manager('Rob Atalla', '777', 'rob.atalla@gmail.com', '2727');
    expect(manager.getRole()).toBe('manager');
});