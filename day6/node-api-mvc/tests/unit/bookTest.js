const assert = require('assert');
const BookController = require('../../controllers/bookController'); // Remove the extra '../'


describe('List of Books', () => {
  it('should return a response with list of books', () => {
    let result
    BookController.getBooks({}, {
      json: (data) => {
        result = data;
        return data;
      }
    });
    assert.deepStrictEqual(result.message, "Books retrieved!");
  });
  
});

describe('Adding a book', () => {
  it ('should add a book', () => {
    let result;
      BookController.addNewBook({body: {title: "The Lord of the Rings", author: "J. R. R. Tolkien"}}, {
        json: (data) => {
          result = data;
          return data;
        }
      });
    assert.deepStrictEqual(result.message, "Book added!");
  });
});

describe('Updating a book', () => {
  it ('should update a book', () => {
    let result;
      BookController.updateExistingBook({params: {id: 1}, body: {title: "The Lord of the Rings", author: "J. R. R. Tolkien"}}, {
        json: (data) => {
          result = data;
          return data;
        }
      });
    assert.deepStrictEqual(result.message, "Book updated!");
  });
});

describe('Removing a book', () => {
  it ('should remove a book', () => {
    let result;
      BookController.removeBook({params: {id: 1}}, {
        json: (data) => {
          result = data;
          return data;
        }
      });
    assert.deepStrictEqual(result.message, "Book deleted!");
  });
});
