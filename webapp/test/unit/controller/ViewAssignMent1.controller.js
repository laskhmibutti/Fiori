/*global QUnit*/

sap.ui.define([
	"Assignments/controller/ViewAssignMent1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewAssignMent1 Controller");

	QUnit.test("I should test the ViewAssignMent1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
