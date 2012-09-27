
$(document).ready(function() {
  $('.feedback-invite-close').click(function() {
    close();
  });

  $('#invite-button').click(function() {
    if (!$(this).hasClass('active')) {  // Opening.
      feedback_close();
      invite_open();
    } else {  // Closing.
      invite_close();
    }
  });

  $('#feedback-button').click(function() {
    if (!$(this).hasClass('active')) {  // Opening.
      invite_close();
      feedback_open();
    } else {  // Closing.
      feedback_close();
    }
  });

  $('#invite-submit').click(function() {
    $('#invite-content').hide();
    $('#invite-thankyou').show();
  })

  function invite_open() {
    $('#invite-thankyou').hide();
    $('#invite-content').show();
    $('#invite-button').addClass('active');
  }
  function invite_close() {
    $('#invite-thankyou').hide();
    $('#invite-content').hide();
    $('#invite-button').removeClass('active');
  }

  function feedback_open() {
    $('#feedback-thankyou').hide();
    $('#feedback-content').show();
    $('#feedback-button').addClass('active');
  }
  function feedback_close() {
    $('#feedback-thankyou').hide();
    $('#feedback-content').hide();
    $('#feedback-button').removeClass('active');
  }

  function close() {
    invite_close();
    feedback_close();
  }
});
