const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('../src/auction');
const { addUser } = require('../../src/user');

describe('Auction Integration Tests', () => {
  beforeEach(() => {
    // Limpa o estado global se necessário
    auctions = [];
    bids = [];
  });

  test('should create an auction and retrieve it by ID', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    const auction = getAuctionById(1);
    expect(auction).toEqual({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
  });

  test('should place a bid on an auction', () => {
    addUser({ id: 1, name: 'Alice' });
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    
    placeBid(1, 1, 120); // Alice coloca um lance de 120
    const bids = getBidsForAuction(1);
    expect(bids).toEqual([{ auctionId: 1, userId: 1, amount: 120 }]);
  });

  test('should throw error when placing a bid below starting price', () => {
    addUser({ id: 1, name: 'Alice' });
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });

    expect(() => placeBid(1, 1, 100)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
  });

  test('should throw error for non-existent auction when placing a bid', () => {
    addUser({ id: 1, name: 'Alice' });

    expect(() => placeBid(999, 1, 120)).toThrow('Leilão não encontrado.');
  });

  test('should return bids for an auction correctly', () => {
    addUser({ id: 1, name: 'Alice' });
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });

    placeBid(1, 1, 120); // Lance de 120
    placeBid(1, 2, 150); // Lance de 150

    const bids = getBidsForAuction(1);
    expect(bids).toEqual([
      { auctionId: 1, userId: 1, amount: 120 },
      { auctionId: 1, userId: 2, amount: 150 },
    ]);
  });
});