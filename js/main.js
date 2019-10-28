$(document).ready(function () {
  $('.group, .group2').hide();
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
});
