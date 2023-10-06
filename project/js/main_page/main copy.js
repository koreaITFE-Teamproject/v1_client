$(document).ready(function () {
    // 클릭했을때 작동 하는지 확인하기 위해 만든 script 페이지 필요 없으면 없애도 됩니다.
    $(".bar_item, .class_item").on("click", function () {
        alert("클릭되었습니다."); // 임의 값
    });
    
    var columnprevButton = $('#column_left');
    var columnnextButton = $('#column_right');
    var columnslideBar = $('#column_slide_bar');

    var bookprevButton = $('#book_left');
    var booknextButton = $('#book_right');
    var bookslideBar = $('#book_slide_bar');

    var discussRoomprevButton = $('#discussRoom_left');
    var discussRoomnextButton = $('#discussRoom_right');
    var discussRoomslideBar = $('#discussRoom_slide_bar');

    // var currentIndex = 1;

    bwWidth = window.innerWidth - 17;   // 브라우저 현재 길이
    currentSlideWidth = 0;              // 움직인 슬라이드의 길이를 저장하기위한 변수 선언

    // 브라우저의 크기가 변할 시
    $(window).on("resize", function () {
        setSlideBarCss(currentIndex);
    });

    // 슬라이드 관련 함수
    function setSlideBarCss(curIdx) {
        bwWidth = window.innerWidth - 17;             // 현재 브라우저의 길이값 다시 저장
        currentSlideWidth = bwWidth * (curIdx - 1);   // 현재의 인덱스에서 브라우저의 길이가 변할 때 길이가 깨지는거 방지용               
        slideBar.css("transform", `translate3d(-${currentSlideWidth}px, 0, 0)`);
    }

    function setIndicatorsLabelCss(curIdx) {
        $(".indicators-label").css("backgroundColor", "#F6E3CE");
        $(".indicators-label").eq(curIdx).css("backgroundColor", "#764127");
    }

    // 라디오 버튼 클릭 시
    $(".indicators-radio").click(function () {
        let indicatorsIdx = $(this).parent().index();                   // 현재 선택한 지표 인덱스
        currentIndex = indicatorsIdx + 1;

        setIndicatorsLabelCss(currentIndex - 1);                        // 라디오 색 변경
        setSlideBarCss(currentIndex);                                   // 해당 인덱스로 슬라이드 움직임
        showBtn();
    });

    function showBtn(prevButton, nextButton, maxIndex, currentIndex) {
        prevButton.show();
        nextButton.show();
        if (currentIndex === 1) {
            prevButton.hide();
        } else if (currentIndex === maxIndex) {
            nextButton.hide();
        }
    }

    // 슬라이드 버튼 관련 이벤트 핸들러
    function initializeSlideButtons(prevButton, nextButton, slideBar, maxIndex, currentIndex) {
        prevButton.click(function () {
            if (currentIndex > 1) {
                currentSlideWidth -= bwWidth;
                slideBar.css("transform", `translate3d(-${currentSlideWidth}px, 0, 0)`);
                currentIndex--;
                setIndicatorsLabelCss(currentIndex - 1);
                showBtn(prevButton, nextButton, maxIndex, currentIndex);
            }
        });

        nextButton.click(function () {
            if (currentIndex < maxIndex) {
                slideBar.css("transform", `translate3d(-${bwWidth * currentIndex}px, 0, 0)`);
                currentSlideWidth = bwWidth * currentIndex;
                setIndicatorsLabelCss(currentIndex++);
                showBtn(prevButton, nextButton, maxIndex, currentIndex);
            }
        });
    }

    // 각 슬라이드 관련 초기화
    initializeSlideButtons(columnprevButton, columnnextButton, columnslideBar, 3, 1);
    initializeSlideButtons(bookprevButton, booknextButton, bookslideBar, 3, 1);
    initializeSlideButtons(discussRoomprevButton, discussRoomnextButton, discussRoomslideBar, 3, 1);
});
