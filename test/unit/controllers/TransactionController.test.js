var request = require('supertest');

//save transaction request if the field is invalid
describe('TransactionController.save_transaction', function() {
  describe('#save_transaction()', function() {
    it('should redirect to /transaction', function (done) {
      request(sails.hooks.http.app)
      .post('/transaction')
      .send({"ref_no":"swjewhehw","amount":"23asdasd00.3","currency":"USD","line_items":"sample","vat":1,"service_tax":"1"})
      .expect(400,done);      
    });
  });

});

//correct request
describe('TransactionController.save_transaction', function() {

  describe('#save_transaction()', function() {
    it('should redirect to /transaction', function (done) {
      request(sails.hooks.http.app)
      .post('/transaction')
      .send({"client_id":336773637,"ref_no":"swjewhehw","amount":2300.3,"currency":"USD","line_items":"sample","vat":1,"service_tax":"1"})
      .expect(200,done);
    });
  });

});