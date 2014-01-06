module.exports = function() {
    var isIe = false,
        version,
        uaMatches = navigator.userAgent.match("MSIE ([0-9.]+)");

    //Check for <= IE11
    if (!(window.ActiveXObject) && "ActiveXObject" in window) {
        //IE11
        isIe = true;
        version = 11;
    } else if (uaMatches && uaMatches.length) {
        //<= IE10
        isIe = true;
        version = Number(uaMatches[1]);
    }

    return {
        isIe: isIe,
        version: version
    };
}();