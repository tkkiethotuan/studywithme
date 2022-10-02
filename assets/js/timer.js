function timer_25_5() {
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = 24
    var second = 60
    var focus_timer_interval = setInterval(function () {
        second -= 1

        screen_minute.innerText = `${minute}m`
        screen_second.innerText = `${second}s`

        console.log(minute)
        console.log(`${second} \n`)

        if (second == 1) {
            second = 60
            minute -= 1
        }
        if (minute == -1) {
            // console.log("End focus")
            // // chỗ này thêm vào lỗi để có thể dừng interval :))
            // clearInterval(enddd);
            // screen_minute.innerText = "0 m"
            // screen_second.innerText = "0 s"

            screen_minute.innerText = "Relax"
            screen_second.innerText = "Time"

            clearInterval(focus_timer_interval);

            var end_time_sound = new Audio(`/assets/sound/end_time.mp3`);
            end_time_sound.volume = "0.5"
            end_time_sound.play();

            var start_focus_button = document.querySelector("#start_timer")
            start_focus_button.setAttribute("class", "btn btn-primary d-inline-block disabled")

            var start_relax_button = document.querySelector("#relax_timer")
            start_relax_button.setAttribute("class", "btn btn-success d-inline-block")

            var skip_relax_button = document.querySelector("#skip_relax")
            skip_relax_button.setAttribute("class", "btn btn-outline-success d-inline-block")
        }
    }, 1000)
}

function timer_25_5_relax() {
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = 4
    var second = 60
    var relax_timer_interval = setInterval(function () {
        second -= 1

        screen_minute.innerText = `${minute}m`
        screen_second.innerText = `${second}s`

        console.log(minute)
        console.log(`${second} \n`)

        if (second == 1) {
            second = 60
            minute -= 1
        }
        if (minute == -1) {
            // console.log("End focus")
            // // chỗ này thêm vào lỗi để có thể dừng interval :))
            // clearInterval(enddd);
            // screen_minute.innerText = "0 m"
            // screen_second.innerText = "0 s"

            screen_minute.innerText = "Focus"
            screen_second.innerText = "Time"

            clearInterval(relax_timer_interval);

            var end_time_sound = new Audio(`/assets/sound/end_time.mp3`);
            end_time_sound.volume = "0.5"
            end_time_sound.play();

            var start_focus_button = document.querySelector("#start_timer")
            start_focus_button.setAttribute("class", "btn btn-primary d-inline-block")

            var start_relax_button = document.querySelector("#relax_timer")
            start_relax_button.setAttribute("class", "btn btn-success d-inline-block disabled")

            var skip_relax_button = document.querySelector("#skip_relax")
            skip_relax_button.setAttribute("class", "btn btn-outline-success d-inline-block disabled")
        }
    }, 1000)
}