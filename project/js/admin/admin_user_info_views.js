$(function () {
    // 조회기능 추가 x, 아직 전체 조회만 가능


    // 유저 생성자
    function User(id, loginId, userName, connections, registrationDate, userStatus) {
        this.id = id;
        this.loginId = loginId;
        this.userName = userName;
        this.connections = connections;
        this.registrationDate = registrationDate;
        this.userStatus = userStatus;
    }

    // 유저 테이블 생성 함수
    function setUserTable() {
        for (var user of users) {
            if (user === undefined) {
                continue;
            }
            $(".user-info-table>tbody").append(`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.loginId}</td>
                    <td>${user.userName}</td>
                    <td class="access-count">${user.connections}</td>
                    <td>${user.registrationDate}</td>
                    <td>${user.userStatus}</td>
                    <td><button class="user-del-btn">강제 탈퇴 버튼</button></td>
                </tr>
            `);
        }

    }

    // 10 이하 숫자 앞에 0 붙이는 함수
    function setNum(num) {
        return num < 10 ? `0${num}` : num;
    }

    var users = []  // 유저 배열
    var id = 1;     // 유저 번호
    
    // 유저 10명 자동 추가
    for (var i = 0; i < 10; i++) {
        var newUser = new User(id, `testId${setNum(id)}`, `testName${setNum(id)}`, id++ * 10, "2023-09-10", "회원");
        users.push(newUser);
    }

    setUserTable();     // 시작 시 자동 테이블 생성

    // 조회 버튼 클릭 시 자동 생성
    $(".search-btn").click(function () {
        $(".user-info-table>tbody>tr").remove();
        setUserTable();
    });

    // db연결시 db 유저정보 삭제 예정
    $(".user-info-table").on("click", ".user-del-btn",function(){
        var idx = $(this).closest("tr").find("td:first-child").text();
        var userName = $(this).closest("tr").find("td:eq(2)").text();

        if (confirm(`${userName}님을 강제 탈퇴 시키겠습니까?`)) {
            $(this).closest("tr").remove();
            delete users[idx - 1];
            console.log(users);
            return alert("탈퇴 되었습니다.");
        }
        alert("취소합니다.");
    });

});