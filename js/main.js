
  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });

$(document).ready(function ()
{
  $('#datePicker').val(new Date().toDateInputValue());
  $('.group, .group2, .group3, .modal').hide();
  $('#option1').show();
  $('#bby, #bby2, #bbyc2, #bby3, #bby4').hide();
  $('#edm, #edm2, #edmc2, #edm3, #edm4').hide();
  $('#site, #site2, #sitec2, #site3, #site4').hide();

  $('#selectMe').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();
  });

  $('#selectMe2').change(function () {
    $('.group2').hide();
    $('#'+$(this).val()).show();
  });

  $('#selectMe3').change(function () {
    $('.group3').hide();
    $('#'+$(this).val()).show();
  });


  //      ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
  });

  $('#return-to-top').click(function() {
    // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0, // Scroll to top of body
      },
      800
    );
  });

  $("#requestForm").validate({
      rules: {
          authName: "required",
          reqName: "required",
          username: "required",
          position: "required",
      },
      messages: {
          authName: "Please enter name of Authorizer",
          reqName: "Please enter name of Requester",
          username: "Please enter name of User",
          position: "Please enter position of User",
      },
      submitHandler: function (form) {
          $("#myModal").modal('show');
  		    $('#SubForm').click(function () {
              form.submit();
          });
      }
  });

  $( "#location" ).change( function() {
    var s = this.value;
    if(s == "bby")
    {
      $('#bby').show();
      $('#edm').hide();
      $('#site').hide();
    }
    else if(s == "edm")
    {
      $('#bby').hide();
      $('#edm').show();
      $('#site').hide();
    }
    else if(s == "site")
    {
      $('#bby').hide();
      $('#edm').hide();
      $('#site').show();
    }
    else
    {
      $('#bby').hide();
      $('#edm').hide();
      $('#site').hide();
    }
  });

  $( "#location2" ).change( function() {
    var s = this.value;
    if(s == "bby2")
    {
      $('#bby2').show();
      $('#edm2').hide();
      $('#site2').hide();
    }
    else if(s == "edm2")
    {
      $('#bby2').hide();
      $('#edm2').show();
      $('#site2').hide();
    }
    else if(s == "site2")
    {
      $('#bby2').hide();
      $('#edm2').hide();
      $('#site2').show();
    }
    else
    {
      $('#bby2').hide();
      $('#edm2').hide();
      $('#site2').hide();
    }
  });

  $( "#currentLocation2" ).change( function() {
    var s = this.value;
    if(s == "bbyc2")
    {
      $('#bbyc2').show();
      $('#edmc2').hide();
      $('#sitec2').hide();
    }
    else if(s == "edmc2")
    {
      $('#bbyc2').hide();
      $('#edmc2').show();
      $('#sitec2').hide();
    }
    else if(s == "sitec2")
    {
      $('#bbyc2').hide();
      $('#edmc2').hide();
      $('#sitec2').show();
    }
    else
    {
      $('#bbyc2').hide();
      $('#edmc2').hide();
      $('#sitec2').hide();
    }
  });

  $( "#location3" ).change( function() {
    var s = this.value;
    if(s == "bby3")
    {
      $('#bby3').show();
      $('#edm3').hide();
      $('#site3').hide();
    }
    else if(s == "edm3")
    {
      $('#bby3').hide();
      $('#edm3').show();
      $('#site3').hide();
    }
    else if(s == "site3")
    {
      $('#bby3').hide();
      $('#edm3').hide();
      $('#site3').show();
    }
    else
    {
      $('#bby3').hide();
      $('#edm3').hide();
      $('#site3').hide();
    }
  });

  $( "#location4" ).change( function() {
    var s = this.value;
    if(s == "bby4")
    {
      $('#bby4').show();
      $('#edm4').hide();
      $('#site4').hide();
    }
    else if(s == "edm4")
    {
      $('#bby4').hide();
      $('#edm4').show();
      $('#site4').hide();
    }
    else if(s == "site4")
    {
      $('#bby4').hide();
      $('#edm4').hide();
      $('#site4').show();
    }
    else
    {
      $('#bby4').hide();
      $('#edm4').hide();
      $('#site4').hide();
    }
  });

});
