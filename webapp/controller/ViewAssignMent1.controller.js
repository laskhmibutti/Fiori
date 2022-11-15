sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Assignments.controller.ViewAssignMent1", {
            onInit: function () {

                var selectItem = [
                    {"option": 1},
                    {"option": 2},
                    {"option": 3},
                    {"option": 4}
                ]
                    // var oModel = new sap.ui.model.json.JSONModel(empData);
                // this.getView().setModel(oModel, "TableModel");
                var oModel = new sap.ui.model.json.JSONModel(selectItem);
                this.getView().setModel(oModel,"SelectedItems");
                
            },
            mainWorkNav:function(){
                //this.getOwnerComponent().getRouter().navTo("RouteView3");
                this.getOwnerComponent().getRouter().navTo("Home")
            }
        });
    });
