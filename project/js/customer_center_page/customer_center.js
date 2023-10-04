$(document).ready(function () {
    var bodyTextarea = $('#body_bar');
    var characterCountDisplay = $('.textCount');
    var maxCharacterCount = 1000;

    bodyTextarea.on('input', function () {
        var text = bodyTextarea.val();
        var currentCharacterCount = text.length;

        if (currentCharacterCount > maxCharacterCount) {
            bodyTextarea.val(text.slice(0, maxCharacterCount));
            currentCharacterCount = maxCharacterCount;
        }
        characterCountDisplay.text(currentCharacterCount + '자');
    });
});