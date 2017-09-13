$(document).ready(function () {
    $('body').append('<div class="ac_footer"><span>&copy; 2017 Copyright. All rights reserved.</span><br><a href="/!common_files/policy_en.html" target="_blank">Privacy policy</a> | <a href="http://ac-feedback.com/report_form/">Report</a></div>');


    moment.locale("");
    $('.day-before').text(moment().subtract(1, 'day').format('D.MM.YYYY'));
    $('.day-after').text(moment().add(1, 'day').format('D.MM.YYYY'));
});
