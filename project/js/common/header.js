        $(document).ready(function () {
            // 각 메뉴 항목에 대한 클릭 이벤트 리스너 추가
            $('.menu_bar_item').on('mouseenter', function () {
                $(this).find('.dropdown-content').css('display', 'block');
            });

            $('.menu_bar_item').on('mouseleave', function () {
                $(this).find('.dropdown-content').css('display', 'none');
            });
        });
