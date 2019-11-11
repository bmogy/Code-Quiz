var wrapper = document.querySelector(".wrapper")
var interval;
var countDownLength;
var countDownWrapper = document.createElement("p")
function mainPage() {
    wrapper.innerHTML = ""
    var h1 = document.createElement("h1")
    h1.innerHTML = "Coding Quiz Challenge"
    wrapper.appendChild(h1)
    var p = document.createElement("p")
    p.innerHTML = "Try to answer the following code related questions within the time limit.Keep in mind that the incorrect answers will penalize your score time by 10 seconds"
    wrapper.appendChild(p)
    var button = document.createElement("button")
    button.innerHTML = "Start Quiz"
    button.setAttribute("id", "start-game")
    wrapper.appendChild(button)
    button.addEventListener("click", game)
}
mainPage()

var button = document.querySelector("#start-game")

function game() {
    document.querySelector(".time").innerHTML=""
    countDownLength = 75
    wrapper.innerHTML = ""
    clearInterval(interval)
    countDown()
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
 var filterQuestions= questions.filter(function(item){
 return item.title.includes("What does HTML stand for?")
 })
    filterQuestions = filterQuestions.forEach(function (item) {
        var div = document.createElement("div")
        div.setAttribute("class","group-div")
        var h2 = document.createElement("h2")
        h2.innerHTML = item.title
        div.appendChild(h2)
        var ul = document.createElement("ul")
        ul.setAttribute("class", "list-buttons")
     
        div.appendChild(ul)
        for (var i = 0; i < questions.length -1; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-index", i)
            ul.appendChild(li)
            var button = document.createElement("button")
            button.innerHTML = item.choices[i]
            li.appendChild(button)
        }
        ul.addEventListener("click", function (e) {
            if (e.target.matches("button")) {
                var index = e.target.parentElement.getAttribute("data-index")
                if (item.choices[index] === item.answer) {
                    p.innerHTML = "correct answer"
                    document.querySelector(".time").appendChild(p)
                    question2()
                } else if (item.choices[index] !== item.answer) {
                    p.innerHTML = "Wrong Answer"
                    countDownLength = countDownLength - 15
                    document.querySelector(".time").appendChild(p)
                    question2()
                }
            
            }
        })
 
        wrapper.appendChild(div)
    })
}
function question2() {
    wrapper.innerHTML = ""
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
 var filterQuestions= questions.filter(function(item){
 return item.title.includes("What doess css stand for?")
 })
    filterQuestions = filterQuestions.forEach(function (item) {
        var div = document.createElement("div")
        div.setAttribute("class","group-div")
        var h2 = document.createElement("h2")
        h2.innerHTML = item.title
        div.appendChild(h2)
        var ul = document.createElement("ul")
        ul.setAttribute("class", "list-buttons")
        div.appendChild(ul)
        for (var i = 0; i < questions.length -1; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-index", i)
            ul.appendChild(li)
            var button = document.createElement("button")
            button.innerHTML = item.choices[i]
            li.appendChild(button)
        }
        ul.addEventListener("click", function (e) {
            if (e.target.matches("button")) {
                var index = e.target.parentElement.getAttribute("data-index")
                if (item.choices[index] === item.answer) {
                    p.innerHTML = "correct answer"
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question3()
                } else if (item.choices[index] !== item.answer ) {
                    p.innerHTML = "Wrong Answer"
                    countDownLength = countDownLength - 15
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question3()
                }
            }
        })
        wrapper.appendChild(div)
    })
}
function question3(){
    wrapper.innerHTML = ""
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
 var filterQuestions= questions.filter(function(item){
 return item.title.includes("What is the purpose of javascript?")
 })
    filterQuestions = filterQuestions.forEach(function (item) {
        var div = document.createElement("div")
        div.setAttribute("class","group-div")
        var h2 = document.createElement("h2")
        h2.innerHTML = item.title
        div.appendChild(h2)
        var ul = document.createElement("ul")
        ul.setAttribute("class", "list-buttons")
        div.appendChild(ul)
        for (var i = 0; i < questions.length -1; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-index", i)
            ul.appendChild(li)
            var button = document.createElement("button")
            button.innerHTML = item.choices[i]
            li.appendChild(button)
        }
        ul.addEventListener("click", function (e) {
            if (e.target.matches("button")) {
                var index = e.target.parentElement.getAttribute("data-index")
                if (item.choices[index] === item.answer) {
                    p.innerHTML = "correct answer"
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question4()
                } else if (item.choices[index] !== item.answer ) {
                    p.innerHTML = "Wrong Answer"
                    countDownLength = countDownLength - 15
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question4()
                }
            }
        })
        wrapper.appendChild(div)
    })
}
function question4(){
    wrapper.innerHTML = ""
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
 var filterQuestions= questions.filter(function(item){
 return item.title.includes("What is a variable?")
 })
    filterQuestions = filterQuestions.forEach(function (item) {
        var div = document.createElement("div")
        div.setAttribute("class","group-div")
        var h2 = document.createElement("h2")
        h2.innerHTML = item.title
        div.appendChild(h2)
        var ul = document.createElement("ul")
        ul.setAttribute("class", "list-buttons")
        div.appendChild(ul)
        for (var i = 0; i < questions.length -1; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-index", i)
            ul.appendChild(li)
            var button = document.createElement("button")
            button.innerHTML = item.choices[i]
            li.appendChild(button)
        }
        ul.addEventListener("click", function (e) {
            if (e.target.matches("button")) {
                var index = e.target.parentElement.getAttribute("data-index")
                if (item.choices[index] === item.answer) {
                    p.innerHTML = "correct answer"
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question5()
                } else if (item.choices[index] !== item.answer) {
                    p.innerHTML = "Wrong Answer"
                    countDownLength = countDownLength - 15
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    question5()
                }
              
            }
        })
        wrapper.appendChild(div)
    })
}
function question5(){
    wrapper.innerHTML = ""
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
 var filterQuestions= questions.filter(function(item){
 return item.title.includes("What is an array?")
 })
    filterQuestions = filterQuestions.forEach(function (item) {
        var div = document.createElement("div")
        div.setAttribute("class","group-div")
        var h2 = document.createElement("h2")
        h2.innerHTML = item.title
        div.appendChild(h2)
        var ul = document.createElement("ul")
        ul.setAttribute("class", "list-buttons")
        div.appendChild(ul)
        for (var i = 0; i < questions.length -1; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-index", i)
            ul.appendChild(li)
            var button = document.createElement("button")
            button.innerHTML = item.choices[i]
            li.appendChild(button)
        }
        ul.addEventListener("click", function (e) {
            if (e.target.matches("button")) {
                var index = e.target.parentElement.getAttribute("data-index")
                if (item.choices[index] === item.answer) {
                    p.innerHTML = "correct answer"
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    allDone()
                } else if (item.choices[index] !== item.answer) {
                    p.innerHTML = "Wrong Answer"
                    countDownLength = countDownLength - 15
                    document.querySelector(".time").innerHTML=""
                    document.querySelector(".time").appendChild(p)
                    allDone()
                }
            }
        })
        wrapper.appendChild(div)
    })
}
function countDown() {
    interval = setInterval(function () {
        countDownLength--
        countDownWrapper.innerHTML = "Time " + countDownLength
        stopCountDown()
    }, 1000)
}
function stopCountDown() {
    if (countDownLength <= 0) {
        clearInterval(interval)
    }
}
function allDone() {
    wrapper.innerHTML = ""
    var h1 = document.createElement("h1")
    h1.innerHTML = "All Done"
    wrapper.appendChild(h1)
    var p = document.createElement("p")
    var stuckCountDownLength = countDownLength
    p.innerHTML = "You score is " + (stuckCountDownLength)
    wrapper.appendChild(p)
    var label = document.createElement("label")
    label.setAttribute("for", "initial")
    label.innerHTML = "Your initials"
    wrapper.appendChild(label)
    var initial = document.createElement("input")
    initial.setAttribute("type", "text")
    initial.setAttribute("placeholder", "type your intial")
    wrapper.appendChild(initial)
    var button = document.createElement("button")
    button.innerHTML = "Submit"
    wrapper.appendChild(button)
    button.addEventListener("click", function () {
        var getUserScore = localStorage.getItem("userInfo")
        var userScore;
        if (getUserScore !== null) {
            userScore = JSON.parse(getUserScore)
        } else {
            userScore = []
        }
        userScore.push({
            initial: initial.value,
            score: stuckCountDownLength
        })
        localStorage.setItem("userInfo", JSON.stringify(userScore))
        highScore()
    })
}
function highScore() {
    wrapper.innerHTML = ""
    var div = document.createElement("div")
    var h1 = document.createElement("h1")
    h1.innerHTML = "High score"
    wrapper.appendChild(h1)
    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    userInfo.forEach(function (item) {
        var p = document.createElement("p")
        p.innerHTML = "Initial: " + item.initial + " Score: " + item.score
        div.appendChild(p)
        wrapper.appendChild(div)
    })
    var goBack = document.createElement("button")
    goBack.innerHTML = "Go Back"
    var clearScore = document.createElement("button")
    clearScore.innerHTML = "Clear Score"
    wrapper.appendChild(goBack)
    wrapper.appendChild(clearScore)
    clearScore.addEventListener("click", function () {
        div.innerHTML = ""
        localStorage.clear()
    })
    goBack.addEventListener("click", function () {
        mainPage()
    })
}



