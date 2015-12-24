var Handler = "ALSHandler.ashx";
function GetIRRemoteInfo(callback) {
    $.ajax({
        type: 'GET',
        url: Handler,
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function (data) {
        }

    });

}