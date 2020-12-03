// mean-menu

$(document).ready(function(){

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",

});

});

// proggess-bar 
 $(document).ready(function(){

        $('#bar1').barfiller({ barColor: 'linear-gradient(90deg,#000080,blue,green,#800080)',duration: 1700} );
        $('#bar2').barfiller({ barColor: 'linear-gradient(90deg,pink,red,#800080,green)',duration: 1000});
        $('#bar3').barfiller({ barColor: 'linear-gradient(90deg,#FFA07A,red,blue,green)',duration: 1300 });
        $('#bar4').barfiller({ barColor: 'linear-gradient(90deg,red,#800080,green,pink)', duration: 1500 });
      
        
    });



// text-suffle -animation

    var letters = ["w","e","l","c","o","m","e","t","o","m","y","w","e","b","s","i","t","e"];

    var $randomNumber = $('.nbr');
var $timer = 30;
var $it;
var $data = 0;
var index;
var change;

$randomNumber.each(function () {
  change = Math.round(Math.random() * 100);
  $(this).attr('data-change', change);
});

function random() {
  return Math.round(Math.random() * 9);
};

function select() {
  return Math.round(Math.random() * $randomNumber.length + 1);
};

function value() {
  $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
  $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
  $data++;

  $randomNumber.each(function () {
    if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
      index = $('.ltr').index(this);
      $(this).html(letters[index]);
      $(this).removeClass('nbr');
    }
  });
};

$it = setInterval(value, $timer);

// 
$(function(){
    $('#typewriter').typewrite( {
            text: [ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate earum",  "consequuntur eveniet facilis nulla eligendi molestiae velit praesentium iste",
                    "consequuntur eveniet facilis nulla eligendi molestiae velit praesentium",  ],
            speed: 100
         }
    );
});

 


