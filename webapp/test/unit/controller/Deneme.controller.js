/*global QUnit*/

sap.ui.define([
	"com/egitim/Egitim1/controller/Deneme.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Deneme Controller");

	QUnit.test("I should test the Deneme controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});