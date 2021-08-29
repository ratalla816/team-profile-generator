const Engineer = require("../lib/Engineer");

test ('confirm github username', () => {
    const engineer = new Engineer('Ajaiharaj Pallikathial', '21', 'gobroncos@fakeemail.com', 'pretenduser1')
    expect(engineer.getgithub()).toBe('pretenduser5');
})

test ('confirm role', () => {
    const engineer = new engineer('Rob Atalla', '777', 'rob.atalla@gmail.com', 'ratalla816')
    expect(engineer.getRole()).toBe('engineer');
})