$.getJSON("inv.json", function (data) {
    $.each(data, function (index, value) {
       console.log(value);
    });
});