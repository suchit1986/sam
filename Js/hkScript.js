var Handler = "";
function GetUUIDConfig(queryString, callback) {
    Handler = GetNewHandler();    
    $.ajax({        
        url: Handler + queryString,
        data: {},
        type: "GET",
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

function ALSReadAjaxRrquest(queryString, param, callback) {
    Handler = GetNewHandler();    
    $.ajax({
        url: Handler + queryString,
        data: param,
        type: "POST",
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

function ALSWriteAjaxRrquest(queryString, param, callback) {
    Handler = GetNewHandler();    
    $.ajax({
        url: Handler + queryString,
        data: param,
        type: "POST",
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

