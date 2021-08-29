const Intern = require("../lib/Intern");

test ('confirm school', () => {
    const intern = new Intern('Tim', '15', 'bigtim@fakeemail.com', 'Stanford')
    expect(intern.school()).toBe('Stanford');
})

