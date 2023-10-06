$(document).ready(function () {
    // 클릭했을때 작동 하는지 확인하기 위해 만든 script 페이지 필요 없으면 없애도 됩니다.
    $(".bar_item, .class_item").on("click", function () {
        alert("클릭되었습니다."); // 임의 값
    });
    const prevButton = $('.bi-chevron-left');
    const nextButton = $('.bi-chevron-right');
    const slideBar = $('.slide_bar');

    let currentIndex = 1;

    bwWidth = window.innerWidth - 17;   // 브라우저 현재 길이
    currentSlideWidth = 0;              // 움직인 슬라이드의 길이를 저장하기위한 변수 선언

    showBtn();                          // 버튼 보이기, 숨기기

    // 브라우저의 크기가 변할 시
    $(window).on("resize", function () {
        setSlideBarCss(currentIndex);
    });

    // 이전버튼 클릭 시
    prevButton.click(function () {
        if (currentIndex > 1) {
            currentSlideWidth = currentSlideWidth - bwWidth;
            slideBar.css("transform", `translate3d(-${currentSlideWidth}px, 0, 0)`);
            currentIndex--
            setIndicatorsLabelCss(currentIndex - 1);
            showBtn();
        }
    });

    // 다음버튼 클릭 시
    nextButton.click(function () {
        if (currentIndex < 3) {
            slideBar.css("transform", `translate3d(-${bwWidth * currentIndex}px, 0, 0)`);
            currentSlideWidth = bwWidth * currentIndex;
            setIndicatorsLabelCss(currentIndex++);
            showBtn();
        }
    });

    $(".indicators-label").first().css("backgroundColor", "black");     // 시작 시 첫번째 라벨 색 변경, 선택된거 표시
    // 라디오 버튼 클릭 시
    $(".indicators-radio").click(function () {
        let indicatorsIdx = $(this).parent().index();                   // 현재 선택한 지표 인덱스
        currentIndex = indicatorsIdx + 1;

        setIndicatorsLabelCss(currentIndex - 1);                        // 라디오 색 변경
        setSlideBarCss(currentIndex);                                   // 해당 인덱스로 슬라이드 움직임
        showBtn();
    });


    // 슬라이드 길이 변경 함수
    function setSlideBarCss(curIdx) {
        bwWidth = window.innerWidth - 17;             // 현재 브라우저의 길이값 다시 저장
        currentSlideWidth = bwWidth * (curIdx - 1);   // 현재의 인덱스에서 브라우저의 길이가 변할 때 길이가 깨지는거 방지용               
        slideBar.css("transform", `translate3d(-${currentSlideWidth}px, 0, 0)`);
    }

    // 지표 색 변경 함수
    function setIndicatorsLabelCss(curIdx) {
        $(".indicators-label").css("backgroundColor", "#7e7e7e");
        $(".indicators-label").eq(curIdx).css("backgroundColor", "black");
    }

    // 버튼 각 끝에 위치할떄 보이기, 숨기기
    function showBtn() {
        prevButton.show();
        nextButton.show();
        if (currentIndex === 1) {
            prevButton.hide();
        } else if (currentIndex === 3) {
            nextButton.hide();
        }
    }

})
