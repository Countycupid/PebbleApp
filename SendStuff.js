var $saveButton = $('saveButton');

$saveButton.on('click', function () {
    console.log('save');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encode(json.stringify(getAndStoreConfigData()));
});
