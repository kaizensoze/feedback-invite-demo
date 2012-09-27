
$(document).ready(function() {
  $('.feedback-invite-close').click(function() {
    close();
  });

  $('#invite-button').click(function() {
    $('#invite-content').toggle();
    $(this).toggleClass('active');
  });

  $('#feedback-button').click(function() {
    $('#feedback-content').toggle();
    $(this).toggleClass('active');
  });

  function close() {
    $('#invite-content').hide();
    $('#feedback-content').hide();
    $('#invite-button').removeClass('active');
    $('#feedback-button').removeClass('active');
  }
});
