module.exports = {
	tableName: "transactions",
	attributes: {
		id: {
			type: "number",
			autoIncrement: true,
			columnType: "int",
			isInteger: true
		},
		client_id:{
			type: "number",
			columnType: "int",
			required: true,
			isInteger: true
		},
		line_items: {
			type: "string",
			columnType: "varchar",
			maxLength: 200
		},
		trans_ref_no: {
			type: "string",
			columnType: "varchar",
		
			maxLength: 200,
			required: true,
			unique: true
		},
		ref_no: {
			type: "string",
			columnType: "varchar",
			required: true,
			unique: true
		},
		vat: {
			type: "string",
			columnType: "varchar",
			maxLength: 200
		},
		service_tax: {
			type: "string",
			columnType: "varchar",
			maxLength: 200
		},
		processing_fee: {
			type: "string",
			columnType: "varchar",
			maxLength: 200,
			required: true
		},
		amount:{
			type: "number",
			columnType: "float",
			required: true	
		},
		status:{
			type: "number",
			columnType: "int",
			required: true,
			isInteger: true
		}


	}
};
