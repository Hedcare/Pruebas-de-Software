/*Nuestro objeto de pruebas*/
const BooksService = require('./books.service');

/*Suplantando la clase MongoLib
const MongoLibStub = {
  getAll: () =>[...fakeBooks]
};

Datos simulados
const fakeBooks =[
{
  _id: 1,
  name: 'Harry Potter'
}
];
Llamando a mock
jest.mock('../lib/mongo.lib',() =>jest.fn().mockImplementation(() => MongoLibStub));
*/
describe('Test for BooksService', () => {
  /*Crear instancia del servicio*/
  let service;

  /*Para cada prueba, crear una instancia*/
  beforeEach(() => {
    service = new BooksService();
  });

  /*Pruebas para el método getBooks */
  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      // Arrange: preparar el entorno

      // Act: Acción a probar
      const books = await service.getBooks({});
      console.log(books);

      // Assert: Confirmar
      expect(books.length).toEqual(1);
    });
  });

  /*Pruebas para el método createBook*/
  describe('Test for createBook()', () => {
    test('Should create a new book', async () => {
      // Arrange
      const newBook = {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      };

      // Act
      const result = await service.createBook(newBook);
      console.log(result);
      console.log('Métodos disponibles:', Object.getOwnPropertyNames(Object.getPrototypeOf(service.mongoDB)));


      // Assert
      expect(result).not.toBeUndefined();
      expect(result).toHaveProperty('_id');
      expect(result.title).toBe(newBook.title);
    });
  });
});
