const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Integration Tests', () => {
  it('should return a list of books', async () => {
    const response = await chai.request(app).get('/books'); // Replace with your actual endpoint
    expect(response).to.have.status(200);
});
});
