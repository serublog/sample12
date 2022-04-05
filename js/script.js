$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.burger-musk').fadeToggle(500);
    $('.header__nav').fadeToggle(200);
    $('body').toggleClass('noscroll');
  });

  // #から始まるURLがクリックされた時
      jQuery('a[href^="#"]').click(function () {
          // .headerクラスがついた要素の高さを取得
          let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
          let speed = 300;
    // hrefで指定されたidを取得
          let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
          let target = jQuery("#" == id ? "html" : id);
          // ページのトップを基準にターゲットの位置を取得しトップからの距離からヘッダー分の高さを引く
          let position = jQuery(target).offset().top - header;
          // その分だけ移動すればヘッダーと被りません
          jQuery("html, body").animate(
              {
                  scrollTop: position
              },
              speed
          );
          return false;
      });

  // スクロール検知
      jQuery(window).on("scroll", function ($) {
  // トップから100px以上スクロールしたら
          if (jQuery(this).scrollTop() > 100) {
    totopクラスを指定したセクターが映る
              jQuery('.totop').show();
          } else {
    totopクラスを指定したセクターは隠れる
              jQuery('.totop').hide();
          }
      });
  
  // クリック時に要素に線を引く
      jQuery('.header__nav ul li a').click(function() {
      jQuery('.header__nav ul li a').removeClass( 'is-active' );
      jQuery(this).addClass( 'is-active' );
       return false;
  });