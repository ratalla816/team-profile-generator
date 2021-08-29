const Engineer = require("../lib/Engineer");

test ('confirm github username', () => {
    const engineer = new Engineer('Ajaiharaj Pallikathial', '21', 'gobroncos@fakeemail.com', 'pretenduser1')
    expect(engineer.github).toEqual(expect.any(String));
})

test ('confirm role', () => {
    const engineer = new engineer('Fatima Muhammad', '882', 'fatima.muhammad@fakeemail.com', 'pretenduser2')
    expect(engineer.getRole()).toEqual('engineer');
})

