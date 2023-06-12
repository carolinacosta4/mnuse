import * as User from "../models/modelUsers.js"

let resultSideInfo = ""

const sideInfo = document.getElementById("sideInfo")

// let countDownDate = new Date().getTime() + (5 * 60 * 1000)
let countDownDate = new Date().getTime() + (0.1 * 60 * 1000)

resultSideInfo = `<div id="countdown"></div>`

let x = setInterval(function() {

    let now = new Date().getTime()
    let distance = countDownDate - now
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s "
    if (distance < 0) {
        clearInterval(x)
        document.getElementById("countdown").innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" id="restartBtn" data-bs-target="#exampleModal">RESTART</button>`
    }
}, 1000)

resultSideInfo += `<h3>Words unlocked</h3>`

if(User.getUserLogged().words[0] == undefined){
    resultSideInfo += `<div id="words"><p>a</p></div><div id="words"><p>a</p></div>`
}else if(User.getUserLogged().words[1] == undefined){
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>a</p></div>`
}else{
    resultSideInfo += `<div id="words"><p>${User.getUserLogged().words[0]}</p></div><div id="words"><p>${User.getUserLogged().words[1]}</p></div>`
}

resultSideInfo += `<h3>Challenges</h3><p id="challenges">${User.getUserLogged().finishedChallenges.length}/3</p>`

sideInfo.innerHTML = resultSideInfo