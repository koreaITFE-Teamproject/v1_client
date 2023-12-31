$(function () {
    // 테스트용 생성자 --------
    // 사용자 객체 생성을 위한 생성자 함수 정의
    function User(id, loginId, loginPw) {
        this.id = id;
        this.loginId = loginId;
        this.loginPw = loginPw;
    }

    // 사용자 객체 생성
    var id = 1;
    var user1 = new User(id++, "testId01", "testPw01");
    var user2 = new User(id++, "testId02", "testPw02");

    // 사용자 배열에 추가
    var users = [user1, user2];

    console.log(users);
    // 테스트용 --------


    // [*아이디, *비밀번호, ]
    // [0        1         ]
    var inputs = [$(".user-login-id-input"), $(".user-login-pw-input")];

    var $joinBtn = $("#user-join-btn");         // 로그인 버튼

    // 정규표현식
    const spacePattern = /\s/;                            // 공백 체크
    const idRegex = /^[A-Za-z0-9]{7,15}$/;                // id, [A~Z, a~z, 0~9] {글자수 7~20 사이}
    const pwRegex = /^[A-Za-z0-9.,\/?!@#$%^&*]{10,30}$/;  // pw, [A~Z, a~z, 0~9, 특수문자(.,/?!@#$%^&*)] {글자수 10~30 사이}
    const nameRegex = /^[가-힣A-Za-z]{2,10}$/;            // name, [한글(가~힣), A~Z, a~z] {글자수 2~10 사이}
    const nicknameRegex = /^[가-힣A-Za-z0-9]{2,15}$/;     // nickname, [한글(가~힣), A~Z, a~z, 0~9] {글자수 2~15 사이}
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;     // 이메일 형식 확인
    const pnRegex = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/       // pn, ooo-oooo-oooo 형태와 일치해야함 (숫자로만 구성)


    // 작성한 입력란의 내용이 바뀔 시
    $(".user-join-wrap>div>div>div:nth-child(2)>input").change(function () {
        var idx = 0;
        var val = $(this).val().trim();           // 입력값 양옆 공백 제거
        var msg = $(this).parent().next();        // 해당 인풋 부모의 다음 형제 (확인 메시지 출력 -> .validation-message)

        for (var input of inputs) {
            if ($(this).is(input)) {
                isValid(input, val, msg, idx);
            }
            idx++;
        }
    });

    $joinBtn.click(function () {
        var isTrue = false;

        if (!confirm("로그인하시겠습니까?")) {
            return alert("취소합니다.");
        }

        var idx = 0;
        for (var input of inputs) {
            if (idx !== 6) {
                var val = input.val().trim();
                var msg = input.parent().next();
                isValid(input, val, msg, idx) ? isTrue = true : isTrue;
            }
            idx++;
        }
        if (isTrue) { return alert("작성한 정보를 다시 확인해주세요."); }

        checkDuplicate[0] = false;
        checkDuplicate[1] = false;

        var newUser = new User(id++, inputs[0].val(), inputs[1].val());
        users.push(newUser);
        console.log(users);
        alert("르그인이 완료되었습니다.");
    });



    /* =====함수===== */


    // 유효성 검사
    function isValid($this, val, msg, idx) {

        // 공백 확인
        if (idx < 6 || idx == 8) {
            if (isEmpty($this, val, msg)) { return true; }
        }

        // 비밀번호, 비밀번호 확인 체크
        if (idx == 2) {
            if (isSamePw($this, msg)) { return true; }
        }


        /* 정규식 검사 */
        if (idx < 5 && idx != 2) {                               // 길이가 정해져 있는 input의 정규표현식
            if (checkMsgPattern($this, val, msg)) { return true; }
        } else if (idx === 5) {                                  // 이메일 정규표현식
            if (!emailRegex.test(userEmail)) {                   // 실패 시
                msg.text("*이메일 형식을 확인해주세요. ex) test@test.com");
                failCss($this, msg);
                return true;
            }
            successCss($this, msg);                                             // 성공 시
        } else if (idx === 6) {                                                 // 전화번호 정규표현식
            if (!pnRegex.test(phoneNumber) || (phoneNumber.length > 2 && phoneNumber.length < 13)) {        // 실패 시
                msg.text("*전화번호 형식을 확인해주세요. ex) 010-1234-5678");
                failCss($this, msg);
                return true;
            }
            successCss($this, msg);                                             // 성공 시
        }

        return false;
    }

    // 공백 확인
    function isEmpty($this, val, msg) {

        if (!val || spacePattern.test(val)) {
            msg.text("*빈칸을 채워주세요.");
            failCss($this, msg);
            return true;
        }
        successCss($this, msg);
        return false;
    }

    // 비밀번호, 비밀번호 확인 검사
    function isSamePw($this, msg) {
        if (inputs[1].val() === $this.val()) {
            return successCss($this, msg);
        }
        failCss($this, msg);
        msg.text("비밀번호가 일치하지 않습니다.");
        return true;
    }

    // 길이가 정해져 있는 input의 정규표현식
    function checkMsgPattern($this, val, msg) {

        var userInfo = $this.parent().prev().text();    // 해당 인풋 부모의 이전 형제 (id, pw, name, nickname 같은 유저 정보 입력란 이름)

        // 길이 제한 있는 input의 min, max 따로 가져오기  // 길이 제한 틀릴 시 글씨 제한 수를 나타내기 위함
        var msgLength = {
            min: 0,
            max: 0,
        }

        if ($this.is(inputs[0])) {
            msgLength.min = 7;
            msgLength.max = 20;
        } else if ($this.is(inputs[1])) {
            msgLength.min = 10;
            msgLength.max = 30;
        } else if ($this.is(inputs[3])) {
            msgLength.min = 2;
            msgLength.max = 10;
        } else if ($this.is(inputs[4])) {
            msgLength.min = 2;
            msgLength.max = 14;
        }

        // 정규표현식
        if ($this.is(inputs[0]) && idRegex.test(val)) {                 // 아이디: 07 ~ 20, 한글x, 대소영o, 숫자o
            successCss($this, msg);
        } else if ($this.is(inputs[1]) && pwRegex.test(val)) {          // 비  번: 10 ~ 30, 한글x, 대소영o, 숫자o, 특수문자(.,/?!@#$%^&*)허용, 
            successCss($this, msg)
        }else {                                                        // 아닐 시
            failText(msg, userInfo, msgLength)
            failCss($this, msg);
            return true;
        }
        return false;
    }

    // 정규식 검사 실패 메시지 출력 함수
    function failText(msg, userInfo, msgLength) {
        var message = `${userInfo} 길이제한: ${msgLength.min} ~ ${msgLength.max}`
        if (userInfo === "*아이디") {
            msg.text(`${message}, 한글x, 특수문자x`);
        } else if (userInfo === "*비밀번호") {
            msg.text(`${message}, 한글x, 특수문자 (.,/?!@#$%^&*) 허용`);
        } 
    }

    /* ===== css style 변경 ===== */
    var wrongStyle = { "border": "2px solid red" };     // input 실패 시 스타일
    var rightStyle = { "border": "1.4px solid black" };   // input 성공 시 스타일
    var wrongMsgStyle = {                               // validation-message 실패 시 스타일
        "display": "grid",
        "color": "red",
    };
    var rightMsgStyle = {                               // validation-message 성공 시 스타일
        "display": "none",
        "color": "green",
    };

    // 유효성 검사 성공 시
    function successCss($this, msg) {
        $this.css(rightStyle);
        msg.css(rightMsgStyle);
        msg.hide();
    }

    // 유효성 검사 실패 시
    function failCss($this, msg) {
        $this.css(wrongStyle);
        msg.css(wrongMsgStyle);
    }


});