console.log('client.js sourced')

$(document).ready(function(){
    console.log('jquery sourced');
    getAllQuotes();
    
    
    
    $('#newQuoteButton').on('click', function(){
        console.log('new quote added');
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: {quote_to_add: $('#inputQuote').val(),
            author_to_add: $('#inputAuthor').val()},
            success: function(response){
                console.log('new quote response:', response);
                //get request for all quotes
              getAllQuotes();
            }
            
        })
        $('input').html('');
    });//end click listener
    
    
    
    $.ajax({
        method: 'GET',
        url:'/quote/random',
        success: function(response) {
            console.log('random quote response:', response)
            $('p').text(response.quoteText)
        },
        error: function(error) {
            console.log('there was an error in random quote', error);
        }
    })
});

$.ajax ({
    method: 'GET',
    url: '/quote/first',
    success: function(response){
        console.log('first quote message', response);
        $('p').text(response.quoteText);

    }

    
});

function getAllQuotes () {
    $.ajax({
        method: 'GET',
        url: 'quote/all',
        success: function(response){
            console.log('all quotes array',response)
            $('ul').html('');
            for (let i=0; i<response.length; i++){
                $('ul').append('<li>' + response[i].quoteText + ' , ' + response[i].author + '</li>');
            }//end for loop
           
        }//end success function
    })//end ajax
    
}//end getAllQuotes


