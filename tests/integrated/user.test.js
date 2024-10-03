const { addUser, getUserById } = require('../../src/user');

describe('User Integration Tests', () => {
  beforeEach(() => {
    // Limpa o estado global se necessário
    users = [];
  });

  test('should add a user and retrieve it by ID', () => {
    addUser({ id: 1, name: 'Alice' });
    const user = getUserById(1);
    expect(user).toEqual({ id: 1, name: 'Alice' });
  });

  test('should return undefined for non-existent user', () => {
    const user = getUserById(999);
    expect(user).toBeUndefined();
  });
});