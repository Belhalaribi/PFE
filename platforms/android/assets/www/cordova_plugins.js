cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-screensize.screensize",
        "file": "plugins/cordova-plugin-screensize/www/screensize.js",
        "pluginId": "cordova-plugin-screensize",
        "clobbers": [
            "window.plugins.screensize"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-screensize": "1.3.1"
};
// BOTTOM OF METADATA
});