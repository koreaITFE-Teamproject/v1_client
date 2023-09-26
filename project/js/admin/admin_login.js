$(document).ready(function () {
    $("#login_Btn").click(function () {
        var nameInputID = $("#id_bar");
        var nameValueID = nameInputID.val();

        var nameInputPW = $("#pw_bar");
        var nameValuePW = nameInputPW.val();

        if (nameValueID.length < 7 || nameValuePW.length < 10) {
            alert('아이디를 7자리 이상, 비밀번호를 10자리 이상 입력해주세요.');
            return false;
        }
    });

    $("#id_bar").keyup(function () {
        var nameInputID = $("#id_bar");
        var nameValueID = nameInputID.val();

        if (nameValueID.length > 20) {
            nameInputID.val(nameValueID.slice(0, 20));
            alert('20자리 이하로 입력해주세요.');
        }

        if (nameValueID.search(/\s/) != -1) {
            alert('공백이 포함될 수 없습니다.');
            return false;
        }
    });

    $("#pw_bar").keyup(function () {
        var nameInputPW = $("#pw_bar");
        var nameValuePW = nameInputPW.val();

        if (nameValuePW.length > 30) {
            nameInputPW.val(nameValuePW.slice(0, 30));
            alert('30자리 이하로 입력해주세요.');
        }

        if (nameValuePW.search(/\s/) != -1) {
            alert('공백이 포함될 수 없습니다.');
            return false;
        }
    });
});