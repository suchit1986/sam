var Handler = "";
var lblError = false;
var errorFlag = false;
function signin(username, password, method, ip, port, token, callback) {
    Handler = GetHandler();

    console.log(Handler);
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },
        beforeSend: function () {
            $.mobile.loading("show", {
                text: 'Wait..',
                textVisible: true,
                theme: 'a',
                html: ""
            });
            $('body').append("<div id=loaddiv class='ui-loader-background'> </div>");

        },
        complete: function () {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);
        },
        success: function (data) {
            callback(data);
            // $("#authError").html("");

        },
        error: function (data) {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);
            console.log("Error While Signin.");
            alert('Oops Authentication Error,Please Check Settings.');
        }

    });
}
function GetGroupType(username, password, method, ip, port, token, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },
        beforeSend: function () { $('body').addClass('ui-loading'); },
        complete: function () { $('body').removeClass('ui-loading'); },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            $('body').removeClass('ui-loading');
            console.log("Error While GetGroupType.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:102 ');

        }

    });

}
function GroupGetByGroupType(username, password, method, ip, port, token, gtid, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, GTID: gtid },
        beforeSend: function () {
            $.mobile.loading("show", {
                text: 'Wait..',
                textVisible: true,
                theme: 'a',
                html: ""
            });
            $('body').append("<div id=loaddiv class='ui-loader-background'> </div>");
        },
        complete: function () {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);
        },
        success: function (data) {
            callback(data);

        },
        error: function (data) {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);

            console.log("Error While GroupGetByGroupType.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:103 ');

        }

    });

}
function GetIVByGroup(username, password, method, ip, port, token, groupid, name, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, GroupID: groupid },

        success: function (data) {
            callback(data);

            errorFlag = false;
        },
        error: function (data) {

            if (!errorFlag) {
                console.log("Error While GetIVByGroup.");
                $.mobile.changePage("index.html#errorDialog");
                $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:104 ');
                errorFlag = true;
                console.log('GetIVByGroup Error');

            }
            setTimeout(function () {
                Group_Click(groupid);
            }, 3000);
        }

    });
}
function GetIVByTag(username, password, method, ip, port, token, tid, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: tid },
        beforeSend: function () {
        },
        complete: function () {
        },
        success: function (data) {
            callback(data);
            errorFlag = false;
        },
        error: function (data) {
            if (!errorFlag) {
                console.log("Error While GetIVByTag.");
                $.mobile.changePage("index.html#errorDialog");
                $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:105');
                errorFlag = true;
            }
        }

    });


}
function WriteTag_Toggle(username, password, method, ip, port, token, tagid, value, type, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: tagid, Value: value, Type: type },
        beforeSend: function () {
            $.mobile.loading("show", {
                text: 'Wait..',
                textVisible: true,
                theme: 'a',
                html: ""
            });
            $('body').append("<div id=loaddiv class='ui-loader-background'> </div>");
        },
        complete: function () {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);
        },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);

            console.log("Error While WriteTag_Toggle.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:106');

        }

    });
}
function WriteTags(username, password, method, ip, port, token, callback) {

    var method = "WriteTags";
    var tagid = [];
    tagid.push(1);
    tagid.push(2);
    var value = [];
    value.push(1.0);
    value.push(2.0);

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: JSON.stringify(tagid), Value: JSON.stringify(value) },
        beforeSend: function () { $('body').addClass('ui-loading'); },
        complete: function () { $('body').removeClass('ui-loading'); },
        success: function (data) {
            callback(data);

        },
        error: function (data) {
            $('body').removeClass('ui-loading');
            console.log("Error While WriteTags.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:107');

        }

    });

}

function GetGroups(username, password, method, ip, port, token, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },
        beforeSend: function () { $('body').addClass('ui-loading'); },
        complete: function () { $('body').removeClass('ui-loading'); },
        success: function (data) {
            callback(data);

        },
        error: function (data) {
            $('body').removeClass('ui-loading');
            console.log("Error While GetGroups.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:108');

        }

    });

}


function TagGetByGroup(username, password, method, ip, port, token, groupid, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, GID: groupid },

        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While TagGetByGroup.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:109');

        }

    });
}
function GetAllSchedule(username, password, method, ip, port, token, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },

        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While GetAllSchedule.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:110');

        }

    });

}
function OnOffSchedule(username, password, method, ip, port, token, sid, value, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, SID: sid, Value: value },
        success: function (data) {

            callback(data);

        },
        error: function (data) {

            console.log("Error While OnOffSchedule.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:111');

        }

    });

}
function AddSchedule(username, password, method, ip, port, token, name, type, typeref, stime, mon, tue, wed, thu, fri, sat, sun, value, isactive, timeOffset, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, SName: name, SType: type, STypeRef: typeref, STime: stime, Mon: mon, Tue: tue, Wed: wed, Thu: thu, Fri: fri, Sat: sat, Sun: sun, Value: value, IsActive: isactive, TimeOffset: timeOffset },
        success: function (data) {

            callback(data);

        },
        error: function (data) {

            console.log("Error While AddSchedule.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:112');

        }

    });
}
function EditScheduleParam(username, password, method, ip, port, token, sid, name, type, typeref, stime, mon, tue, wed, thu, fri, sat, sun, value, isactive, timeOffset, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, SID: sid, SName: name, SType: type, STypeRef: typeref, STime: stime, Mon: mon, Tue: tue, Wed: wed, Thu: thu, Fri: fri, Sat: sat, Sun: sun, Value: value, IsActive: isactive, TimeOffset: timeOffset },
        success: function (data) {

            callback(data);

        },
        error: function (data) {

            console.log("Error While EditScheduleParam.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:113');

        }

    });
}

function DeleteSchedule(username, password, method, ip, port, token, id, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, ID: id },
        success: function (data) {

            callback(data);

        },
        error: function (data) {

            console.log("Error While DeleteSchedule.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:114');

        }

    });

}
function GetGlobalScenes(username, password, method, ip, port, token, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While GetGlobalScenes.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:115');

        }

    });

}
function WriteGlobalScenes(username, password, method, ip, port, token, id, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, ID: id },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While WriteGlobalScenes.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:116');

        }

    });

}
function GetIVByScenes(username, password, method, ip, port, token, id, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, ID: id },
        success: function (data) {
            callback(data);

        },
        error: function (data) {
            if (!errorFlag) {
                console.log("Error While GetIVByScenes.");
                $.mobile.changePage("index.html#errorDialog");
                $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:117');
            }
            errorFlag = true;
        }

    });

}
function GetIVByValue(username, password, method, ip, port, token, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token },
        beforeSend: function () {
            $.mobile.loading("show");
        },
        complete: function () {
            $.mobile.loading("hide");
        },
        success: function (data) {
            callback(data);

        },
        error: function (data) {
            if (!errorFlag) {
                $.mobile.loading("hide");
                console.log("Error While GetIVByValue.");
                $.mobile.changePage("index.html#errorDialog");
                $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:118');
            }
            errorFlag = true;
        }

    });

}
function ChangePassword(username, password, ip, port, token, method, newpass, oldpass, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, NewPwd: newpass, OldPwd: oldpass },
        success: function (data) {
            callback(data);
            $("#lblPass").html('Password Changed Successfully..');

        },
        error: function (data) {

            console.log("Error While ChangePassword.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:119');

        }

    });
}
function GetALSTagInfo(username, password, method, ip, port, token, tagID, opType, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: tagID, OpType: opType },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While GetALSTagInfo.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:120');

        }

    });

}
function WriteMode(username, password, method, ip, port, tagID, modeID, value, callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: tagID, ModeID: modeID, Value: value },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            console.log("Error While WriteMode.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:121');

        }

    });
}
function WriteTag_Dimmer(username, password, method, ip, port, token, tagid, value, callback) {

    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        data: { Username: username, Password: password, Method: method, IP: ip, Port: port, Token: token, TagID: tagid, Value: value },
        beforeSend: function () {
            $.mobile.loading("show", {
                text: 'Wait..',
                textVisible: true,
                theme: 'a',
                html: ""
            });
            $('body').append("<div id=loaddiv class='ui-loader-background'> </div>");
        },
        complete: function () {
            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);
        },
        success: function (data) {
            callback(data);

        },
        error: function (data) {

            $.mobile.loading("hide");
            var elem = document.getElementById('loaddiv');
            elem.parentNode.removeChild(elem);

            console.log("Error While WriteTag_Toggle.");
            $.mobile.changePage("index.html#errorDialog");
            $('#lbl_errordia').html('Error in Communication,Please try again or check network connection. ErrCode:122');

        }

    });
}