/* Nuestro objeto de pruebas */
const BooksService = require('./books.service');

/* Datos simulados */
const fakeBooks = [
  {
    _id: 1,
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 1997,
  },
];

/* Suplantando la clase MongoLib */
const MongoLibStub = {
  getAll: jest.fn().mockResolvedValue(fakeBooks),
  create: jest.fn().mockImplementation((book) => ({ _id: 'abc123', ...book })),
};

/* Llamando a mock */
jest.mock('../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => MongoLibStub)
);

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks({});
      expect(books.length).toEqual(1);
      expect(books[0].title).toBe('Harry Potter');
    });
  });

  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      const newBook = {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
      };

      const result = await service.createBook(newBook);

      expect(result).not.toBeUndefined();
      expect(result).toHaveProperty('_id');
      expect(result.title).toBe(newBook.title);
    });
  });
});
