const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('../../src/auction');

describe('Auction Module', () => {
  beforeEach(() => {
    // Limpa os leilões e lances antes de cada teste
    auctions = [];
    bids = [];
  });

  test('should create an auction', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    const auction = getAuctionById(1);
    expect(auction).toEqual({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
  });

  test('should return undefined for non-existent auction', () => {
    const auction = getAuctionById(999);
    expect(auction).toBeUndefined();
  });

  test('should place a bid on an auction', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    placeBid(1, 2, 120); // Lance de 120 no leilão 1
    const bids = getBidsForAuction(1);
    expect(bids).toEqual([{ auctionId: 1, userId: 2, amount: 120 }]);
  });

  test('should throw an error for a bid below starting price', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    expect(() => placeBid(1, 2, 100)).toThrow('O valor do lance deve ser maior do que o preço inicial.');
  });

  test('should throw an error for non-existent auction when placing a bid', () => {
    expect(() => placeBid(999, 2, 120)).toThrow('Leilão não encontrado.');
  });

  test('should return bids for an auction', () => {
    createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
    placeBid(1, 2, 120);
    placeBid(1, 3, 150);
    const bids = getBidsForAuction(1);
    expect(bids).toEqual([
      { auctionId: 1, userId: 2, amount: 120 },
      { auctionId: 1, userId: 3, amount: 150 },
    ]);
  });
});
