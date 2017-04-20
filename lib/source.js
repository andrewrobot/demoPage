/*

Ajax in mock API server response
Simple load function for cisco demo site
April 2017

*/


function addInfo(data) {
    
    // clear contents prior to load
    $('.table-body').empty(); 
    $('.ui.small.feed').empty(); 
    
    data.known_users.sort();

    // loop through the resopnse, dynamically create elements
    for (var i in data) {        
        var val = data[i]; 
        
        for (var j in val) {             
            var key = j;
            
            // handle the user array
            if ($.isNumeric(key)){
                $('.table-body').append('<tr>' +
                                            '<td>' + val[key].name + '</td>' +
                                            '<td>' + val[key].last_login + '</td>' +
                                        '</tr>');
                
            }
            // handle meta-data
            else {    
                $('.ui.small.feed').append('<div class="event">' +
                                            '<div class="content">' +
                                                '<div class="summary">' +
                                                    key + ' : ' + val[key] +
                                        '</div></div></div>');
            }
            
        }
    }
    // additional user count
    $('.ui.small.feed').append('<div class="event">' +
                                            '<div class="content">' +
                                                '<div class="summary">' +
                                                    'total users : ' + data.known_users.length +
                                        '</div></div></div>');
    
    $('.ui.inverted.dimmer').removeClass("active");
    $('.info').slideDown(500);
    
};