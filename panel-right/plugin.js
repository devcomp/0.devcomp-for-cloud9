
define(function(require, exports, module) {

    return main;

    function main (options, imports) {
        var Panel = imports.Panel;
        var panels = imports.panels;
        var commands = imports.commands;
        var settings = imports.settings;
        var ui = imports.ui;



        var plugin = new Panel("Right Devcomp Panel", main.consumes, {
            index: 1000,
            where: "right",
            caption: "devcomp: Abstract"
        });

        settings.on("read", function() {
            settings.setDefaults("project/devcomp-panel-right", [
                ["url", "http://127.0.0.1:8090/test-10CB0D92-C011-4288-90D6-1A0978DCBF0A/"]
            ]);
        }, plugin);


settings.set("project/devcomp-panel-right/@url", "http://127.0.0.1:8090/test-10CB0D92-C011-4288-90D6-1A0978DCBF0A/Tests/");


        function syncSize () {
            var iframe = plugin.container.querySelector("IFRAME.devcomp-iframe");
            iframe.width = plugin.container.clientWidth + "px";
            iframe.height = plugin.container.clientHeight + "px";
        }

        plugin.on("show", function (e) {
            syncSize();
//            commands.exec("openterminal", "ls -al");
        });
        panels.on("afterAnimate", function (e) {
            if (panels.isActive("devcomp")) {
                syncSize();
            }
        });

        plugin.on("draw", function (e) {

            ui.insertCss(require("text!../panel.css"), options.staticPrefix, plugin);

            e.html.innerHTML = '<iframe class="devcomp-iframe" src="http://127.0.0.1:8090/test-10CB0D92-C011-4288-90D6-1A0978DCBF0A/Tests/"></iframe>';
        });

        return plugin;
    }

});
