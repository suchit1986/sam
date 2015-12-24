var Handler = "";
var authAjaxReqTimeOut = 2000;
var ajaxReqTimeOut = 60000;
function ALSUserAuthenticationRequest(queryString, param, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: param,
        type: "POST",
        timeout: authAjaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback("true");
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback("false");
        }

    });
};

function GetUUIDConfig(queryString, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: {},
        type: "GET",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};
function GetIRConfig(queryString, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: {},
        type: "GET",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetGlobalScene(queryString, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: {},
        type: "GET",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetNotificationConfig(queryString, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: {},
        type: "GET",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function SetGlobalScene(queryString, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: {},
        type: "GET",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};


function ALSReadAjaxRequest(queryString, param, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: param,
        type: "POST",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function ALSWriteAjaxRequest(queryString, param, callback) {
    Handler = GetNewHandler();
    $.ajax({
        url: Handler + queryString,
        data: param,
        type: "POST",
        timeout: ajaxReqTimeOut,
        beforeSend: function (xhr) {

        },
        complete: function () {

        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $.mobile.loading("hide");
            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

