var Handler = "";
var authAjaxReqTimeOut = 30000;
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback("false");
        }

    });
};
function ALSChangePasswordRequest(queryString, param, callback) {
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
            callback("true");
        },
        error: function (data) {
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback("false");
        }

    });
};

function GetUUIDConfig(newHandler, queryString, callback) {
    //Handler = newHandler; //GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};
function GetIRConfig(newHandler, queryString, callback) {
    //Handler = newHandler; //GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetGlobalScene(newHandler, queryString, callback) {
    //Handler = newHandler; //GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetNotificationConfig(newHandler, queryString, callback) {
    //Handler = newHandler; //GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetScheduleConfigReq(newHandler, queryString, callback) {
    //Handler = newHandler; //GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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
            callback(data);
        }

    });
};
function GetSlaveConfig(queryString, callback) {
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
            callback(data);
        }

    });
};
function GetLocationTypeConfig(queryString, callback) {
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetInterfaceTypeConfig(queryString, callback) {
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function GetInterfaceSubTypeConfig(queryString, callback) {
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
            //            $.mobile.loading("hide");
            //            try { var elMask = document.getElementById('loaddiv'); elMask.parentNode.removeChild(elMask); } catch (msg) { }
            callback(data);
        }

    });
};

function SetGlobalScene(newHandler, queryString, callback) {
    //Handler = GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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


function ALSReadAjaxRequest(newHandeler, queryString, param, callback) {
    //Handler = GetNewHandler();
    $.ajax({
        url: newHandeler + queryString,
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

function ALSWriteAjaxRequest(newHandeler, queryString, param, callback) {
    //Handler = GetNewHandler();
    $.ajax({
        url: newHandeler + queryString,
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

function SetDateTimeIntoMasterSlave(newHandler, queryString, param, callback) {
    //Handler = GetNewHandler();
    $.ajax({
        url: newHandler + queryString,
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

