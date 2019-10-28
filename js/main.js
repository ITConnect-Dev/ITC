$(document).ready(function () {
  $('.group, .group2, .group3, .modal').hide();
  $('.group').hide();
  $('#option1').show();
  $('#selectMe').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();
  })
  $('#selectMe2').change(function () {
    $('.group2').hide();
    $('#'+$(this).val()).show();
  })
  $('#selectMe3').change(function () {
    $('.group3').hide();
    $('#'+$(this).val()).show();
  })
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
});
