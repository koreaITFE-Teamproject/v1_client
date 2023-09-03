// 성별 (미정)
// 나이 (미정)
// 가입 날짜
// 비번 표시 (추가)
// 글자 수 15제한 (예정)
// 비밀번호 대소문자 (예정)
// 중복 확인을 해야지 회원가입 가능하도록

$(function () {

    // 테스트용 생성자 --------
    // 사용자 객체 생엉을 위한 생성자 함수 정의
    function User(id, loginId, loginPw, name, nickname, email, phoneNumber, address) {
        this.id = id;
        this.loginId = loginId;
        this.loginPw = loginPw;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    // 사용자 객체 생성
    var id = 0;
    var user1 = new User(id++, "testId01", "testPw01", "testName01", "testNickname01", "test01@test.com", "010 1234 5671", "대전");
    var user2 = new User(id++, "testId02", "testPw02", "testName02", "testNickname02", "test02@test.com", "010 1234 5672", "서울");

    // 사용자 배열에 추가
    var users = [user1, user2];

    console.log(users);
    // 테스트용 --------

    var checkDuplicate = [false, false];
    var $loginValidMsg = $(".user-login-id .validation-message");
    var $nicknameValidMsg = $(".user-nickname .validation-message");
    var $loginId = $(".user-login-id-input");       // *user-login-id-input
    var $loginPw = $(".user-login-pw-input");       // *user-login-pw-input
    var $loginPwCh = $(".user-login-pw-ck-input");  // *user-login-pw-ck-input
    var $name = $(".user-name-input");              // *user-name-input
    var $nickname = $(".user-nickname-input");      // *user-nickname-input
    var $email = $(".user-email-input");            // *user-email-input
    var $phoneNum = $(".user-phone-number-input")   // user-phone-number-input
    var $address = $(".user-address-input");        // user-address-input
    var $idCheck = $(".user-id-check-input");       // *user-id-check-input
    var $userJoinBtn = $("#user-join-btn");         // user-join-btn

    // 각각의 input 변경 시
    $(".user-join-wrap td>input").change(function () {
        // 공백검사
        var idx = $(this).parent().parent().index();

        if (idx == 6 || idx == 7) {
            return;
        }
        if (idx == 8) {
            idx = 11;
        }
        isEmpty($(".user-join-wrap input").eq(idx));
    });

    // 아이디 부분 중복확인
    $("#login-id-duplicate-check-btn").click(function () {
        if (isInputBlank($loginId)) {
            return true;
        }
        isAvailable($loginId, "아이디");                                    // 사용가능한 아이디인가?
    });

    // 닉네임 중복 체크
    $("#nickname-duplicate-check-btn").click(function () {
        if (isInputBlank($nickname)) {
            return true;
        }
        isAvailable($nickname, "닉네임");                                    // 사용가능한 닉네임인가?
    });


    // 비밀번호 보이기 - 숨기기
    $("#show-eyes").hide();
    // 비밀번호 보이기
    $("#hide-eyes").click(function () {                                       // 비밀번호 보이기
        $loginPw.attr("type", "text");                                      // 패스워드 타입 변경 -> password <> text
        $(this).hide();
        $("#show-eyes").show();
    });

    // 비밀번호 숨기기
    $("#show-eyes").click(function () {                                       // 비밀번호 숨기기
        $loginPw.attr("type", "password");                                  // 패스워드 타입 변경 -> text <> password
        $(this).hide();
        $("#hide-eyes").show();
    });

    // 비밀번호 - 비밀번호 확인 일치하는가?
    $loginPw.add($loginPwCh).change(function () {
        if ($loginPw.val() == $loginPwCh.val()) {
            $loginPwCh.css("border", "1px solid black");
            $loginPwCh.parent().next().hide();
        } else {
            $loginPwCh.css("border", "1px solid red");
            $loginPwCh.parent().next().css("color", "red");
            $loginPwCh.parent().next().css("display", "grid");
            $loginPwCh.parent().next().text("*비밀번호가 일치하지 않습니다.");
        }
    });

    // 이메일 체크 (직접입력일때)
    var userEmail;
    $(".custom-input").hide();
    $("#select-email-option").change(function () {
        if ($(this).val() == "userInput") {
            $(".custom-input").show();
        } else {
            $(".custom-input").hide();
            $(".custom-input").val("");
            userEmail = `${$(".user-email-input").val()}@${$(this).val()}`;
        }
    });

    $(".custom-input").change(function () {
        userEmail = `${$(".user-email-input").val()}@${$(".custom-input").val()}`;
    });

    // 전화번호 체크 (3 4 4, 한 칸이라도 비거나 전부 있어야함)

    // 주소 체크

    // 본인인증

    // 회원가입 버튼 누를 시 (아이디, 비밀번호, 비번확인, 이름, 닉네임, 이메일, 본인인증) 멤버 추가
    $userJoinBtn.click(function () {
        console.log(userEmail);
        console.log(checkDuplicate);
        if (!confirm("가입하시겠습니까?")) {
            return alert("취소합니다.");
        }

        // 공백 확인
        if (checkAllBlank()) {
            return alert("빈칸이 있는지 확인해주세요.");
        }
        // var user1 = new User(id++, "testId01", "testPw01", "testName01", "testNickname01", "test01@test.com", "010 1234 5671", "대전");

        var regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if (!regex.test(userEmail)) {
            return alert("이메일 형식을 다시 확인해주세요.");
        }

        // 중복확인 했는지
        for (var val of checkDuplicate) {
            if (val == false) {
                return alert("중복확인을 해주세요");
            }
        }

        var newUser = new User(id++, $loginId.val(), $loginPw.val(), $name.val(), $nickname.val(), "test" + id + "@test.com", "010 1234 0000", $address.val());
        users.push(newUser);
        checkDuplicate[0] = false;
        checkDuplicate[1] = false;
        $(".user-join-wrap input").val("");
        alert("가입이 완료 되었습니다.");
    });




    // 함수

    // 필수 작성란 공백 검사
    function checkAllBlank() {
        var isFaild = false;

        !isEmpty($loginId) == true ? isFaild = true : isFaild;        // 아이디 공백 여부
        !isEmpty($loginPw) == true ? isFaild = true : isFaild;        // 비밀번호 공백 여부
        !isEmpty($loginPwCh) == true ? isFaild = true : isFaild;      // 비밀번호 확인 공백 여부
        !isEmpty($name) == true ? isFaild = true : isFaild;           // 이름 공백 여부
        !isEmpty($nickname) == true ? isFaild = true : isFaild;       // 닉네임 공백 여부
        !isEmpty($email) == true ? isFaild = true : isFaild;          // 이메일 공백 여부
        !isEmpty($idCheck) == true ? isFaild = true : isFaild;        // 본인인증 공백 여부

        return isFaild;
    }

    // 각각의 인풋 공백 검사
    function isInputBlank($this) {
        if (!isEmpty($this)) {
            return true;
        }
        $this.css("border", "1px solid black");
        $this.parent().next().hide();
        return false;
    }

    // 공백 확인
    function isEmpty(val) {
        if (val.val().trim()) {
            val.css("border", "1px solid black");
            val.parent().next().css("color", "black");
            val.parent().next().hide();
            return true;
        }
        val.css("border", "1px solid red");
        val.parent().next().css("color", "red");
        val.parent().next().css("display", "grid");
        val.parent().next().text("*빈칸을 채워주세요.");
        return false;
    }

    // idAvailable true 중복확인 시 사용가능할 때
    function isAvailable(val, userType) {
        if (isDuplicate(val, userType)) {

            return true;
        }
        if (userType == "아이디") {
            checkDuplicate[0] = true;
            $loginValidMsg.css("display", "grid");
            $loginValidMsg.css("color", "green");
            $loginValidMsg.text(`*사용 가능한 ${userType} 입니다.`);
        } else {
            checkDuplicate[1] = true;
            $nicknameValidMsg.css("display", "grid");
            $nicknameValidMsg.css("color", "green");
            $nicknameValidMsg.text(`*사용 가능한 ${userType} 입니다.`);
        }

        return false;
    }

    // 중복 확인
    function isDuplicate(val, userType) {
        for (var i = 0; i < users.length; i++) {
            if (userType === "아이디") {
                if (users[i].loginId === $loginId.val()) {
                    checkDuplicate[0] = false;
                    $loginId.css("border", "1px solid red");
                    $loginValidMsg.css("display", "grid");
                    $loginValidMsg.css("color", "red");
                    $loginValidMsg.text(`*사용할 수 없는 ${userType} 입니다.`);
                    return true;
                }
            } else if (users[i].nickname === $nickname.val()) {
                checkDuplicate[1] = false;
                $nickname.css("border", "1px solid red");
                $nicknameValidMsg.css("display", "grid");
                $nicknameValidMsg.css("color", "red");
                $nicknameValidMsg.text(`*사용할 수 없는 ${userType} 입니다.`);
                return true;
            }

        }
        return false;
    }

});