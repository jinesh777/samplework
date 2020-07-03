
describe('Transaction', function() {
  it ('should not be empty', function(done) {
    Transaction.find().exec(function(err, data) {
      data.length.should.be.eql(0);
     // done();
    });
  });
});
