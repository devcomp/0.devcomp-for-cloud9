
define(function(require, exports, module) {

    main.consumes = ["Panel", "ui", "panels", "commands", "settings"];
    main.provides = [
        "devcomp-panel-left",
        "devcomp-panel-right"
    ];

    return main;

    function main (options, imports, register) {


        register("", {
            "devcomp-panel-left": require("./panel-left/plugin")(options, imports),
            "devcomp-panel-right": require("./panel-right/plugin")(options, imports)
        });
    }

});
