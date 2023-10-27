AOS.init();

lightbox.option( {
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
})

var audio = document.querySelector('.audio');
var videos = document.querySelectorAll('video');

var currentPlayingVideo = null;

videos.forEach(function (video) {
    video.addEventListener('play', function () {
        if (currentPlayingVideo && currentPlayingVideo !== video) {
            // Jika ada video lain yang sedang diputar, pause video tersebut
            currentPlayingVideo.pause();
            // Pause audio dari video yang di-pause
            var pausedAudio = currentPlayingVideo.closest('div').querySelector('audio');
            if (pausedAudio) {
                pausedAudio.pause();
            }
        }

        // Simpan video yang sedang diputar saat ini
        currentPlayingVideo = video;

        // Pause audio dari web jika sedang bermain
        if (!audio.paused) {
            audio.pause();
        }
        // Mulai audio yang sesuai dengan video
        var currentVideoAudio = video.closest('div').querySelector('audio');
        if (currentVideoAudio) {
            currentVideoAudio.play();
        }
    });

    video.addEventListener('pause', function () {
        var allVideosPaused = true;
        videos.forEach(function (v) {
            if (!v.paused) {
                allVideosPaused = false;
            }
        });

        if (allVideosPaused) {
            // Jika semua video telah di-pause, mulai kembali audio dari web
            if (audio.paused) {
                audio.play();
            }
        }
    });
});


function mulai() 
{
    audio.play();
    window.scrollTo(0, 0);
    var mail_section = $('#mail-section');
    $('#mail').attr('src', 'assets/img/mail.gif');
    setTimeout(function() {
        mail_section.css('opacity', 0);
        $('body').removeClass('overflow-hidden');
    }, 2000);
    setTimeout(function() {
        mail_section.removeClass('d-flex');
        mail_section.addClass('d-none');
    }, 4000);
    
}


    function wa(isi)
    {
        open("https://wa.me/6281299816480?text=makasih ya udah inget sama hari ulang tahun aku, di hari spesial ini aku mau " + isi);
    }


async function makeawish() 
{
    var {
        value: kado
    } = await swal.fire({
        ImageUrl: 'assets/img/kado.png',
        title: 'Di Hari Spesial Ini, Apa Permintaan Kamu? 🤔',
        imageWidth: 400, 
        imageHeight: 400,
        confirmButtonColor: '#2fe965',
        confirmButtonText: 'kirim ✈',
        input: 'text',
        showCancelButton: false
    })


    if (kado) {
        await swal.fire({
            ImageUrl: 'assets/img/icon_wa.png',
            title: 'Wajib Dikirim Ya, Ke Nomer Wa Aku !!! 😄',
            confirmButtonColor: '#2fe965',
            confirmButtonText: 'kirim ✈',
        })
        wa(kado)
    } else {
        await swal.fire({
            icon: 'error',
            title: 'Jangan Dikosongin Dong! 😠'
        })
        makeawish();
    }
}

   