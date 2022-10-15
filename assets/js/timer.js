function timer_25_5() {
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Focus"
    var start_focus_button = document.querySelector("#start_timer")
    start_focus_button.setAttribute("class", "btn btn-primary d-inline-block disabled")
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
        if (minute <= -1) {
            // console.log("End focus")
            // // chỗ này thêm vào lỗi để có thể dừng interval :))
            // clearInterval(enddd);
            // screen_minute.innerText = "0 m"
            // screen_second.innerText = "0 s"

            screen_minute.innerText = "Relax"
            screen_second.innerText = "Time"

            clearInterval(focus_timer_interval);

            var end_time_sound = new Audio(`/assets/sound/end_time.mp3`);
            // end_time_sound.volume = "0.5" --> Don't set sound volume  
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
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Relax"
    var start_relax_button = document.querySelector("#relax_timer")
    start_relax_button.setAttribute("class", "btn btn-success d-inline-block disabled")
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
            // end_time_sound.volume = "0.5" --> Don't set sound volume
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


// 50 - 10

function timer_50_10() 
{
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Focus"
    var start_focus_button = document.querySelector("#start_timer")
    start_focus_button.setAttribute("class", "btn btn-primary d-inline-block disabled")
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = 49
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
            // end_time_sound.volume = "0.5" --> Don't set sound volume
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

function timer_50_10_relax() 
{
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Relax"
    var start_relax_button = document.querySelector("#relax_timer")
    start_relax_button.setAttribute("class", "btn btn-success d-inline-block disabled")
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = 9
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
            // end_time_sound.volume = "0.5" --> Don't set sound volume
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
 

// elective mode

var focus_time_get = (document.querySelector("#focus-time-input").value) / 1
var relax_time_get = (document.querySelector("#relax-time-input").value) / 1

function elective_focus()
{
    var focus_time_get = (document.querySelector("#focus-time-input").value) / 1
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Focus"
    var start_focus_button = document.querySelector("#start_timer")
    start_focus_button.setAttribute("class", "btn btn-primary d-inline-block disabled")
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = focus_time_get -= 1
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
            // end_time_sound.volume = "0.5" --> Don't set sound volume
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

function elective_relax()
{
    var relax_time_get = (document.querySelector("#relax-time-input").value) / 1
    var time_status = document.querySelector("#time-status")
    time_status.innerText = "Relax"
    var start_relax_button = document.querySelector("#relax_timer")
    start_relax_button.setAttribute("class", "btn btn-success d-inline-block disabled")
    var screen_minute = document.querySelector("#timer_minute")
    var screen_second = document.querySelector("#timer_second")
    var minute = relax_time_get -= 1
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
            // end_time_sound.volume = "0.5" --> Don't set sound volume
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