$(document).ready(function () {
    // 현재 구분 안되고 둘다 들어감. 백 들어오면 구분 되게 해야함.
    var bodyTextarea= $('.textarea');
    var characterCountDisplay = $('.js_num');
    var maxCharacterCount = 300;

    bodyTextarea.on('input', function () {
        var text = bodyTextarea.val();
        var currentCharacterCount = text.length;

        if (currentCharacterCount > maxCharacterCount) {
            bodyTextarea.val(text.slice(0, maxCharacterCount));
            currentCharacterCount = maxCharacterCount;
        }
        characterCountDisplay.text(currentCharacterCount);
    });
})