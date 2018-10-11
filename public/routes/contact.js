'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/', function (req, res, next) {
    console.log('this baby is called on all calls to contacts');
    console.log('i have access to req object: url is - ' + req.originalUrl);
    next();
});

router.get('/', function (req, res, next) {
    console.log('I get called on get only');
    console.log('i have access to req object: method is - ' + req.method);
    next();
});

router.get('/', function (req, res) {
    res.send('GET on contact');
});

router.post('/', function (req, res) {
    res.send('POST on contact');
});

router.put('/:contactId', function (req, res) {
    res.send('PUT on contactId');
});

router.delete('/:contactId', function (req, res) {
    res.send('DELETE on contactId');
});

exports.default = router;
//# sourceMappingURL=contact.js.map