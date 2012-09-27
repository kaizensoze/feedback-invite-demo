
$(document).ready(function() {
  $('.feedback-invite-close').click(function() {
    close();
  });

  $('#invite-button').click(function() {
    $('#feedback-content').hide();
    $('#invite-content').toggle();

    $('#feedback-button').removeClass('active');
    $(this).toggleClass('active');
  });

  $('#feedback-button').click(function() {
    $('#invite-content').hide();
    $('#feedback-content').toggle();

    $('#invite-button').removeClass('active');
    $(this).toggleClass('active');
  });

  function close() {
    $('#invite-content').hide();
    $('#feedback-content').hide();
    $('#invite-button').removeClass('active');
    $('#feedback-button').removeClass('active');
  }
});
