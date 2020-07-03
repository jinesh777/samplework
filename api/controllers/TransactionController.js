/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var uuid = require('uuid');
module.exports = {
	
/**
 * @api {post} /tranaction Request for saving transaction information
 * @apiName SaveTransaction
 * @apiGroup Tranaaction
 *
 * @apiParam {Number} client_id to identify the user who request.
 * @apiParam {String} ref_no
 * @apiParam {Number} amount
 * @apiParam {String} currency pass currenccy name as (INR,USD,etc..)
 * @apiParam {String} line_items its a optional parameter
 * @apiParam {String} vat its a optional parameter
 * @apiParam {String} service_tax  its a optional parameter
 *  
 * 
 * @apiSuccess {String} status status of the api.
 * @apiSuccess {String} ref  reference of the request.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *		"status": "ok",
 *		"ref": "2e7c1881-edad-445a-a3db-1f806a046a43"
 *		}
 *
 *
 */
	save_transaction:async function(req,res,next){
	
			var post_data = req.allParams();
		
		if ( !_.isNumber( req.param('client_id') ) ) {
			
  			return res.badRequest('missed/invalid field');
		}
		if ( !_.isString( req.param('ref_no') ) ) {
  			return res.badRequest('missed/invalid field');
		}
		if ( !_.isNumber( req.param('amount') ) ) {
  			return res.badRequest('missed/invalid field');
		}
		
		if ( !_.isString( req.param('currency') ) ) {
  			return res.badRequest('missed/invalid field');
		}

		if ( _.isString( req.param('line_items') ) ) {
			post_data.line_items=req.param('line_items');
	    }
		if ( _.isString( req.param('vat') ) ) {
			post_data.line_items=req.param('vat');
		}
		if ( _.isString( req.param('service_tax') ) ) {
			post_data.line_items=req.param('service_tax');
	    }

		const status=0;
		const trans_ref=uuid.v4();
		const processing_fee='2.4';
		post_data.processing_fee=processing_fee;
		post_data.trans_ref_no=trans_ref;
		post_data.status=status;
	    let check = await Transaction.create(post_data);
		try {
     	return res.send({
        status: 'ok',
        ref: trans_ref
  		}); 
		}catch (err) {
			return res.status(500).json({
		  	msg: 'Invalid Data Input'
			});
	  }
	  
	
	}

};

