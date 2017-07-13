var TransactionTypes = require("../helpers/transaction-types.js");

var private = {}, self = null,
	library = null, modules = null;

function TestContract(cb, _library) {
	self = this;
	library = _library;
	cb(null, self);
}

TestContract.prototype.create = function (data, trs) {
	return trs;
}

TestContract.prototype.calculateFee = function (trs) {
	return 0;
}

TestContract.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

TestContract.prototype.getBytes = function (trs) {
	return null;
}

TestContract.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

TestContract.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

TestContract.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

TestContract.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

TestContract.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

TestContract.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

TestContract.prototype.dbRead = function (row) {
	return null;
}

TestContract.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

TestContract.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(TransactionTypes.TESTCONTRACT, self);
}

module.exports = TestContract;
