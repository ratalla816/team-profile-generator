import Employee from "../lib/Employee";

test('confirm name', () => {
    const employee = new Employee('Rob Atalla', '777', 'rob.atalla@gmail.com');
    expect(employee.getName()).toBe('Rob Atalla');
})

test('confirm employee ID', () => {
    const employee = new Employee('Ajaiharaj Pallikathial', '21', 'gobroncos@fakeemail.com');
    expect(employee.getId()).toBe('21');
})

test('confirm email', () => {
    const employee = new Employee('Fatima Muhammad', '882', 'fatima.muhammad@fakeemail.com');
    expect(employee.getEmail()).toBe('fatima.muhammad@fakeemail.com');
})

