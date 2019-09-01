sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.egitim.Egitim1.controller.Deneme", {
		onInit: function () {

			var combo = this.getView().byId("idCombo");

			for (var i = 1; i <= 5; i++) {
				var item = new sap.ui.core.Item();
				item.setKey(i.toString());
				item.setText(i.toString());
				combo.addItem(item);
			}

		},

		onAfterRendering: function () {
			//alert("asdasd");
		},

		pressAyse: function (event) {

			var textElement = this.getView().byId("idText");
			textElement.setText("debug");

		},

		pressFatma: function (event) {
			var textElement = this.getView().byId("idText");
			textElement.setText("Fatma");
		},

		onLiveChange: function (event) {
			var inputElement = this.getView().byId("idInput");
			var value = inputElement.getValue();
			var textElement = this.getView().byId("idText");
			textElement.setText(value);

			//inline coding örneği 
		},

		onChange: function (event) {
			var source = event.getSource();
			var int = parseInt(event.getSource().getValue());
			this.getView().byId("idRating").setValue(int);
		},
		
		pressMesaj: function (event) {

			MessageToast.show("Hello World!", {
				duration: 3000, // default
				width: "30em", // default
				my: "center bottom", // default
				at: "center bottom", // default
				of: window, // default
				offset: "0 0", // default
				collision: "fit fit", // default
				onClose: null, // default
				autoClose: true, // default
				animationTimingFunction: "ease", // default
				animationDuration: 5000, // default
				closeOnBrowserNavigation: true // default
			});
		}
	});
});