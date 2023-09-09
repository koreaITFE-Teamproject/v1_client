$(document).ready(function () {
    // 입력 마우스: 모양 바꿈
    $('.enter_btn').mouseover(function () {
        $(this).css('cursor', 'pointer');
    });

    // 채팅 메시지 추가 함수
    function addChatMessage(message) {
        // 메시지를 chat_screen에 추가
        const chatMessage = `
            <div class="chat chat-start">
              <div class="chat-header">User<time class="text-xs opacity-50">Just now</time></div>
              <div class="chat-bubble">${message}</div>
            </div>
          `;
        $('.chat_screen').append(chatMessage);
    }

    // 입력 처리 함수
    function handleInput() {
        const message = $('#chat_input').val();
        if (message.trim() !== '') {
            addChatMessage(message);
            $('#chat_input').val('');
        }
    }

    // 입력 버튼 클릭(마우스) 이벤트 처리
    $('.enter_btn').on('click', handleInput);

    // Enter 키 눌렀을 때 이벤트 처리
    $('#chat_input').on('keyup', function (event) {
        if (event.key === 'Enter') {
            handleInput();
        }
    });
});