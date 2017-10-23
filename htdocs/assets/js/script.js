$(function() {
    'use strict';

    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();  // windowのスクロール位置を取得する
        var headerOffset = $('header').offset().top; // headerのページ内から数えてどこにいるか取得する

        if (windowTop > headerOffset) {
            $('.nav__wrapper').addClass('is-fixed');
            $('.nav__wrapper').removeClass('is-top');
            $('.nav__wrapper__logo').css({
                'width': '130px',
                'height': '50px'
            });
        } else {
            $('.nav__wrapper').addClass('is-top');
            $('.nav__wrapper').removeClass('is-fixed');
            $('.nav__wrapper__logo').css({
                'width': '208px',
                'height': '80px'
            });
        }
    });


    $('.product__list__name').children('li').hover(
        function() {
            var $product__list = $(this);
            var getList = $product__list.data('list');
            // console.log(getList);
            $('.product__list__img').css(
                'background-image', 'url("/assets/images/png/icon_' + getList + '.png")'
            );
            // $(this).toggleClass('is-orange');
            if (getList) {
                //getListがgetDataを探して何もなかった時の処理を書きたい
            }
            $('.product__wrap').children('li').each(function() {
                var getData = $(this).data('category-type');

                if (getList === 'all') {
                    $product__list.addClass('is-orange');
                } else if(getList === getData) {
                    $product__list.toggleClass('is-orange');
                } else {
                    $product__list.addClass('is-gray');
                }
            });
        },
        function() {
            if ($(this).hasClass('is-orange')) {
                $(this).removeClass('is-orange');
            } else if($(this).hasClass('is-gray')) {
                $(this).removeClass('is-gray');
            }
        }
    );

    $('.product__list__name').children('li').on('click', function() {
        var getList = $(this).data('list');
        // console.log(getList);
        $('.product__wrap').children('li').each(function() {
            var getData = $(this).data('category-type');
            // console.log(getData);
            if (getList === 'all') {
                $(this).show();
            } else if (getList !== getData) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    $('.posts__list').children('li').hover(function() {
        $(this).find('.posts__list__box__update__text').css('color', 'orange');
    },
    function() {
        $(this).find('.posts__list__box__update__text').css('color', '#fff');
    });
    // childrenとfindの違いがよくわかる
    // childrenはあくまでその子要素だけしか探せないけど、findは子要素全体から探し出してくれる

    $('.movie').on('click', function() {
        if ($('.movie__setting')[0].paused) {
            $('.movie__setting')[0].play();
            $('.movie__btn').hide();
        } else {
            $('.movie__setting')[0].pause();
        }
    });
});