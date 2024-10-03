const { addUser, getUserById } = require('../../src/user');

describe('User Module', () => {
  beforeEach(() => {
    // Limpa a lista de usuários antes de cada teste
    users = [];
  });

  test('should add a user', () => {
    addUser({ id: 1, name: 'Alice' });
    const user = getUserById(1);
    expect(user).toEqual({ id: 1, name: 'Alice' });
  });

  test('should return undefined for non-existent user', () => {
    const user = getUserById(999);
    expect(user).toBeUndefined();
  });

  test('should return the correct user when added', () => {
    addUser({ id: 1, name: 'Alice' });
    addUser({ id: 2, name: 'Bob' });
    const user = getUserById(2);
    expect(user).toEqual({ id: 2, name: 'Bob' });
  });

  test('should handle multiple users correctly', () => {
    addUser({ id: 1, name: 'Alice' });
    addUser({ id: 2, name: 'Bob' });
    addUser({ id: 3, name: 'Charlie' });
    
    const user1 = getUserById(1);
    const user2 = getUserById(2);
    const user3 = getUserById(3);
    
    expect(user1).toEqual({ id: 1, name: 'Alice' });
    expect(user2).toEqual({ id: 2, name: 'Bob' });
    expect(user3).toEqual({ id: 3, name: 'Charlie' });
  });
});
