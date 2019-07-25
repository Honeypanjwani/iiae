function alertPopup(msg, type, location) {

    if (type == 'error') {
        var selector_parent = '#ErrorPopupArea';
        var selector_titleID = '#ErroralertTitle';
        var selector_msg = '#ErrorMsgBody';
        var btn = '#ErrorOkBtn';
        var title_msg = 'Error';
    } else {
        var selector_parent = '#SuccessPopupArea';
        var selector_titleID = '#alertTitle';
        var selector_msg = '#MsgBody';
        var btn = '#OkBtn';
        var title_msg = 'Success';
    }

    $(selector_titleID).html(title_msg);
    $(selector_msg).html(msg);
    $('.oktick').hide();

    if (typeof location != 'undefined') {
        $(btn).show();

        $(selector_parent).modal({keyboard: false}).one('click', btn, function (e) {
            e.preventDefault();
            window.location.href = location;
        });
    }
    else {
        $(selector_parent).modal();
    }
}

/* 
 * To handle form label and add placeholder related js.
 */
$(document).ready(function () {
    $('#registerForm label.control-label').remove();
    $('#registerForm input').each(function () {
        var id = $(this).attr('id');
        if (id == 'Password') {
            $(this).attr('placeholder', 'Any Password of Your Choice * ');
        } else if (id == 'Captcha') {
            $(this).attr('placeholder', 'Enter ' + id + ' * ');
        } else if (id == 'opt_data') {
            $(this).attr('placeholder', 'Enter OTP ');
        } else if (id == 'filter_dial_code') { //If country Dial Code then display blank for placeholder
            $(this).attr('placeholder', '');
        } else {
            $(this).attr('placeholder', 'Your ' + id + ' * ');
        }
    });
    $('#LoginForm label.control-label,#loginForm label.control-label').remove();
    $('#loginForm input').each(function () {
        var id = $(this).attr('id');
        $(this).attr('placeholder', 'Your ' + id + ' * ');

    });
    $('#forgotForm label.control-label').remove();
    $('#forgotForm input').each(function () {
        var id = $(this).attr('id');
        $(this).attr('placeholder', 'Enter Your Registered ' + id + ' ID ' + ' * ');
    });
});

/**
 * This is for Registration/login/forgot password focus/focusout event
 */
$(document).ready(function () {  
    //When user clicks on register form focus event
    $('#registerForm input').focus(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('has-error').addClass('is-focused');
    });
    
    //For Select Case
    $('#registerForm select').focus(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').removeClass('has-error').addClass('is-focused');
    });
    
    //For Register Focusout Event
    $('#registerForm input').focusout(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('is-focused');
    });
    
    $('#registerForm select').focusout(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').removeClass('is-focused');
    });
    
    //For Login form focus event
    $('#loginForm input').focus(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('has-error').addClass('is-focused');
    });
    
    //For Login Focusout Event
    $('#loginForm input').focusout(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('is-focused');
    });
    
    
    //When user clicks on register form focus event
    $('#forgotForm input').focus(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('has-error').addClass('is-focused');
    });
    
    //For Forgot Password Focusout Event
    $('#forgotForm input').focusout(function () {
        var id = $(this).attr('id');
        $('#'+id).parent('div').parent('div').removeClass('is-focused');
    });
    
});

/**
 * This function is for publish theme
 * @returns null
 */
function publishTheme(post_data){
    $('#confirmYes').html('Publish');
    $('#confirmTitle').html('Confirm Publish Action');
    $('#confirmYes').next('button').html('Cancel');
    $('#ConfirmMsgBody').html('Are you sure you want to take this live? Make sure you have checked all the pages thoroughly.');
    $('#ConfirmPopupArea').modal({backdrop: 'static', keyboard: false})
            .off('click', '#confirmYes').one('click', '#confirmYes', function (e) {
                e.preventDefault();
                $.ajax({
                    url: jsVars.publishURL,
                    type: 'post',
                    data: {'post_data': post_data,'action': 'publish'},
                    dataType: 'json',
                    async: false,
                    headers: {
                        "X-CSRF-Token": jsVars._csrfToken
                    },
                    beforeSend: function () {
                        $('#preview').attr('disabled');
                        $('div.loader-block').show();
                    },
                    complete: function () {
                        $('div.loader-block').hide();
                        $('#preview').removeAttr('disabled');
                    },
                    success: function (json) {
                        if (typeof json['redirect'] !='undefined' && json['redirect'] !='') {
                            window.location.href='/';
                        } else if (typeof json['error'] !='undefined' && json['error'] !='') {
                            alertPopup(json['error'], 'error');
                        } else if (typeof json['status'] !='undefined' && json['status'] == 200) {                            
                            alertPopup( json['message'], "success"); //,jsVars.siteURL
                            
                            //Refresh the parent window so it will redirect to listing page
                            opener.location.reload();
                            
                            //Auto close modal and close the main window after 2 seconds
                            setTimeout(function () {
                                $('#ConfirmPopupArea').modal('hide');
                                window.close();
                            }, 2000);
                        }
                        return false;
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);                        
                    }
                });
                $('#ConfirmPopupArea').modal('hide');
            });
    return false;        
}
/**
 * This function will dynamically set iframe height
 * @param (string) page
 * @returns null
 */
function iFrameHeight(page){
    var height=$( window ).height();
    
    var iFrameID = document.getElementById('idIframe');
      if(iFrameID) {          
            // here you can make the height, I delete it first, then I make it again
            iFrameID.height = "";
            if(page=='thankyou'){
                iFrameID.height = (height-132) + "px";
            } else {
                iFrameID.height = (height-70) + "px";
            }
      }  
      
}