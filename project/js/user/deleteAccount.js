$(function () {
    const searchButton = document.querySelector('#withdrawButton');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        AlertCheckbox()	// all unchecked 일 때, 이 함수 소환!
    })

    //😍 ALL NO checked 함수
    function AlertCheckbox() {
        const checkPart = document.querySelector('.checkbox-part');
        const checkboxes = checkPart.querySelectorAll('input');
        let checkedCnt = 0;

        //😍 이렇게 바꿨어요!
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked === true) {
                checkedCnt++
            }
        }

        if (checkedCnt == 0) {
            alert("체크박스를 선택해주세요.")
            return;
        }

        // 체크없으면 바로 return해서 alert 띄우기!

        // 비밀번호 입력 확인
        var passwordInput = document.getElementById('passwordInput').value;
        if (passwordInput.trim() === '') {
            // 비밀번호가 비어있을 때 경고 메시지 표시
            alert('비밀번호를 작성해 주세요.');
            return;
        }

        alert('탈퇴되었습니다.');
    }






    // var checkbox = document.getElementById('reasonCheckbox');
    // if (!checkbox.checked) {
    //     // 체크되지 않았을 때 경고 메시지 표시
    //     alert('체크박스를 선택하세요.');
    //     return;
    // }


    // });
});