const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, 'valid'))

const { validateXML } = require('..')

describe('Test valid input', function() {
	for (const file of files) {
		it(file, function() {
			return validateXML(fs.readFileSync(path.join(__dirname, 'valid', file)))
		})
	}
})
