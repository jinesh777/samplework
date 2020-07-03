define({ "api": [
  {
    "type": "post",
    "url": "/tranaction",
    "title": "Request for saving transaction information",
    "name": "SaveTransaction",
    "group": "Tranaaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>to identify the user who request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ref_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>pass currenccy name as (INR,USD,etc..)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "line_items",
            "description": "<p>its a optional parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vat",
            "description": "<p>its a optional parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service_tax",
            "description": "<p>its a optional parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the api.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ref",
            "description": "<p>reference of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\t\t\"status\": \"ok\",\n\t\t\"ref\": \"2e7c1881-edad-445a-a3db-1f806a046a43\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/TransactionController.js",
    "groupTitle": "Tranaaction"
  }
] });
