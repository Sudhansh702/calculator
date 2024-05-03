let display = document.getElementById("display")

function appendOp(o) {
    if (display.value.length == 0) {
        return
    }else{
        let lc = display.value.slice(-1)
        if (/[0-9]/.test(lc)) {
            display.value += o
        }else{
            display.value = display.value.slice(0,-1) + o
        }
    }
} 