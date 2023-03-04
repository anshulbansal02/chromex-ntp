const hhWrapper = document.getElementById("hh");
const mmWrapper = document.getElementById("mm");

let prevMM = null,
    prevHH = null;

function updateHH(date) {
    let hh = date.getHours();

    if (hh === 0) hh = 12;
    else if (hh > 12) hh -= 12;

    if (hhWrapper && prevHH !== hh) {
        hhWrapper.innerText = hh < 10 ? "0" + hh : hh;
        prevHH = hh;
    }
}

function updateMM(date) {
    let mm = date.getMinutes();

    if (mmWrapper && prevMM !== mm) {
        mmWrapper.innerText = mm < 10 ? "0" + mm : mm;
        prevMM = mm;
    }
}

function updateTime() {
    const date = new Date();
    updateHH(date);
    updateMM(date);
}

window.addEventListener("load", () => {
    updateTime();
    const clockInterval = setInterval(updateTime, 500);

    window.addEventListener("beforeunload", () => {
        clearInterval(clockInterval);
    });
});
