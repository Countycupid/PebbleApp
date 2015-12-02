var $saveButton = $('saveButton');

function ReturnStuff(){
    console.log('save');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encode(json.stringify(getAndStoreConfigData()));
};

function getQueryParam(variable, defaultValue) {
    var query = location.search.substring(1);
    var data = query.split('&');
    for (var i = 0; i < data.length;i++){
        var pair = data[i].spli('=');
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return defaultValue || false;
}

