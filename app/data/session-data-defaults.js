/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

var records = require('./records.json');
var providerrecords = require('./providerrecords.json');
var moment = require('moment');

module.exports = {
	"current-date": {
		DDDD: moment().format('DDDD'),
		D: moment().format('D'),
		DD: moment().format('DD'),
		MM: moment().format('MM'),
		MMM: moment().format('MMM'),
		MMMM: moment().format('MMM'),
		YYYY: moment().format('YYYY')
	},
	"random-future-date": moment().add(2,'months').startOf('month').format('D MMMM YYYY'),
	"employer": "BIG COMPANY LTD",
	"provider-name": "APEX TRAINING LIMITED",
	"course-name": "Unknown",
	"records": records,
	"providerrecords": providerrecords,
	"name": "Darren Diamond",
	"agreed-price": "£9,500"
}
