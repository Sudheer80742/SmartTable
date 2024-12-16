sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("task.107.controller.View1", {
        onInit() {
            var oData=new sap.ui.model.json.JSONModel({"edit":false});
            this.getView().setModel(oData,"data")
        },
        onEdit(evn){
            var oModel=this.getView().getModel("data")
            if(oModel.getProperty("/edit")==true){
        var oMod=this.getOwnerComponent().getModel();
        oMod.submitChanges({
            success:(oData)=>{
            debugger;
            oModel.setProperty("/edit",!(oModel.getProperty("/edit")))
        }
    })
                
        
            }
            else{
                oModel.setProperty("/edit",!(oModel.getProperty("/edit")))
            }
        },
        onButtonPress1(){
            this.getOwnerComponent().getRouter().navTo("RouteView2")
        },
        onButtonPress2(){
            this.getOwnerComponent().getRouter().navTo("RouteView3")
        },
        onButtonPress3(){
            this.getOwnerComponent().getRouter().navTo("RouteView4")
        }
    });
});