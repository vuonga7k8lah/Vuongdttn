let toggle = true;
do {
    let playMusic = confirm("Chào Mừng Quí Dị Đến Với Profile Của Vuongdttn, Chúc Bạn ! Ngày Mới Vui Vẻ <3");
    if (playMusic) {
        musicPlay();
        toggle = false;
    }
} while (toggle);