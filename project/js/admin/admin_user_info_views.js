$(function () {
    for (var i = 0; i < 10; i++) {
        $(".user-info-table>tbody").append(`
            <tr>
                <td>${i + 1}</td>
                <td>test${i + 1}</td>
                <td>testName${i + 1}</td>
                <td class="access-count">${(i + 1) * 10}</td>
                <td>2023-09-10</td>
                <td>회원</td>
                <td><button class="user-del-btn">강제 탈퇴 버튼</button></td>
            </tr>
        `);
    }


    // db연결시 db 유저정보 삭제 예정
    $(".user-del-btn").click(function () {
        var idx = $(this).parent().parent().index();
        var userName = $(this).parent().prev().prev().prev().prev().text();
            
        if(confirm(`${userName}님을 강제 탈퇴 시키겠습니까?`)){
            $(".user-info-table>tbody>tr").eq(idx).remove();
            return alert("탈퇴 되었습니다.");
        }
        alert("취소합니다.");
    });
});