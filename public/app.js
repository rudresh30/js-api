"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _contact = require("./routes/contact");

var _contact2 = _interopRequireDefault(_contact);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = 5050;

//view engine
//helmet
//bodyParse

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

//static path

var staticPath = _path2.default.join(__dirname, '..', '..', 'public');
app.use(_express2.default.static(staticPath));

app.use('/contacts', _contact2.default);

app.get('/', function (req, res) {
    res.send("server started on nodejs");
});

app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});
//# sourceMappingURL=app.js.map