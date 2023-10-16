$(function () {
    var datas = [15339, 21345, 18483, 24003, 23489, 24092, 12034];

    'use strict';
    // 그래프
    var ctx = $('#myChart')[0].getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            datasets: [{
                data: datas,
                tension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    boxPadding: 3
                }
            }
        }
    });


    $(".select-marketing-data-graph li").click(function () {
        discussPath($(this).index(), $(this).text());;

        $(".select-marketing-data-graph li").css({
            "fontWeight": "normal",
            "borderBottom": 0,
        });
        $(this).css({
            "fontWeight": "bold",
            "borderBottom": "2px solid #764127",
        });

        // 그래프 전환 보기용
        var dataset = myChart.data.datasets;
        datas = [15339, 21345, 18483, 24003, 23489, 24092, 12034];      // 기본값으로 초기화
        for(var i = 0; i < datas.length; i++){
            var rand = Math.round(Math.random() * 2 + 1);
            datas[i] = datas[i] * rand;
        }
        dataset[0].data = datas;
        myChart.update();
    });

    discussPath(0, "Hot Book");

    function discussPath(idx, $text) {
        var marketing = "#";
        var graph = "#";        // 사용 미정

        var pathText = `<i class="fa-solid fa-house"></i> > <a href='${marketing}'>마케팅 데이터 화면</a> > ${$text}`;
        if (idx == 0) {
            discuss = "#";
        } else if (idx == 1) {
            discuss = "#";
        } else {
            discuss = "#";
        }

        $(".path").html(pathText);
    }







});