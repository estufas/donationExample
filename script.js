$(document).ready(function(){


  var amount;
  var reach;

  var x = $(window).width() - 400;

  $('.donate form').on("click", function(){
    amount = $('input[name=amount]:checked', '#donAmount').val();
    reach = amount * 22;
    $('#confirm .amount').text("$" + amount);
    $('#check span').text("$" + amount);
    $('#confirm strong').text(reach + " animals");
  });

  $(".donate button").on("click", function(){
    $(".donate").toggleClass("active");
    if( $(".donate").is(".active") ) {
      $("form").slideDown(450, "easeOutQuart");
    } else {
      $("form").slideUp(300, "easeInOutQuad");
    }
  });

  $('.donate label').on("click", function(){
    setTimeout(function() {
      if (amount == "other"){
        $("#custom").css("margin-left", x/2);
    $("#custom").css("margin-right", x/2);
        $('body').addClass('custom');
        $(".donate").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
          $("#custom").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
        });
      } else {
        $('body').removeClass('custom');
        $(".donate").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
          $("#details").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
        });
      }
    }, 150);
  });

  $('#custom .next').on("click", function(){
    amount = $('input[name=custom-amount]', '#customDonation').val();
    reach = amount * 22;
    $('#confirm .amount').text("$" + amount);
    $('#check span').text("$" + amount);
    $('#confirm strong').text(reach + " animals");
    $("#custom").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
      $("#details").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
    });
  });

  $('#custom .back').on("click", function(){
    $("#custom").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
      $(".donate").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
    });
  });

  $('#details .next').on("click", function(){
    console.log(amount);
    $("#details").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
      $("#card").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
    });
  });

  $('#details .back').on("click", function(){

    if ( $('body.custom').length > 0 ){
        $("#details").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
      $("#custom").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
    });
    } else {
        $("#details").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
      $(".donate").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
    });
    }

  });

  $('#card .next').on("click", function(){
    $("#card").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
    });
  });

  $('#card .back').on("click", function(){
    $("#card").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
      $(".details").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
    });
  });

  $('#card .next').on("click", function(){
    $("#card").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
      $("#check").show("slide", { easing: "easeOutQuart", direction: "right" }, 700);
    });
  });

  $('#check .back').on("click", function(){
    $("#check").hide("slide", { easing: "easeInQuart", direction: "right" }, 700, function(){
      $("#card").show("slide", { easing: "easeOutQuart", direction: "left" }, 700);
    });
  });

  $("#check .next").on('click', function(){
    $("#check").hide("slide", { easing: "easeInQuart", direction: "left" }, 700, function(){
      $(".processing").fadeIn(1500, function(){
        $(".progress").animate({ width: "14em" }, 3500, "easeInOutCirc", function() {
          $( ".mask" ).hide("slide", { easing: "easeInQuart", direction: "right" }, 400);
        });
      });
    });

    setTimeout(function() {
      $('.processing .message, .outer').fadeOut();
      $("#confirm").addClass('animated fadeInUp');
    }, 6250);
  });

  // image column controlls

  // Get the elements with class="column"


  // Add active class to the current button (highlight it)
  var header = document.getElementById("myHeader");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


});

var elements = document.getElementsByClassName("row");
// Declare a loop variable
console.log('hey');
var i;
// Full-width images
function one() {
  console.log('one');
  for (i = 0; i < elements.length; i++) {
    $(elements[i]).removeClass('double').removeClass('quad');
    $(elements[i]).addClass('single');
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    $(elements[i]).removeClass('single').removeClass('quad');
    $(elements[i]).addClass('double');
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    $(elements[i]).removeClass('double').removeClass('single');
    $(elements[i]).addClass('quad');
  }
}

function thankYou() {
  var paymentContainer = document.getElementById('payment-container');
  paymentContainer.style.display ='none';
  var thankYou = document.getElementById('thank-message');
  thankYou.style.display = 'block';
}
