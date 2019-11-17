//grabbing the wrapper div
var wrapper = document.querySelector(".wrapper")
// setting interval to having no value
var interval;
//setting countdown to having no value
var countDownLength;
// creating a p tag
var countDownWrapper = document.createElement("p")
// creating my starter page
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
//invoking my starter page
mainPage()

// creating my standard question template page
function renderPage(search,call){
    wrapper.innerHTML = ""
    wrapper.appendChild(countDownWrapper)
    var p = document.createElement("p")
    // filtering through the question array to find a specific index
    var filterQuestions= questions.filter(function(item){
    return item.title.includes(search)
    })
    // printing only the title and questions for that index
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
    // creating a event listener to click click on the buttons
       //i am using event delegation
           ul.addEventListener("click", function (e) {
               if (e.target.matches("button")) {
                   var index = e.target.parentElement.getAttribute("data-index")
                   if (item.choices[index] === item.answer) {
                    document.querySelector(".time").innerHTML =""
                       p.innerHTML = "correct answer"
                    
                       document.querySelector(".time").appendChild(p)
                       call()
                   } else if (item.choices[index] !== item.answer) {
                    document.querySelector(".time").innerHTML =""
                       p.innerHTML = "Wrong Answer"
                       countDownLength = countDownLength - 15
                       document.querySelector(".time").appendChild(p)
                        call()
                   }
               
               }
           })
    // appending my main page to the wrapper div
           wrapper.appendChild(div)
       })

}
// loads first question
function game() {
    document.querySelector(".time").innerHTML=""
    countDownLength = 75
    clearInterval(interval)
    countDown()
    // filtering through the question title and calling the function that leads to the next page.
   renderPage("What does HTML stand for?",question2)
}
function question2() {
 // filtering through the question title and calling the function that leads to the next page.
    renderPage("What doess css stand for?", question3)
}
function question3(){
 // filtering through the question title and calling the function that leads to the next page.
    renderPage("What is the purpose of javascript?",question4)
}
function question4(){
 // filtering through the question title and calling the function that leads to the next page.
   renderPage("What is a variable?",question5)
}
function question5(){
 // filtering through the question title and calling the function that leads to the next page.
 renderPage("What is an array?",allDone)
}
// creating my interval timer
function countDown() {
    interval = setInterval(function () {
        countDownLength--
        countDownWrapper.innerHTML = "Time " + countDownLength
        stopCountDown()
    }, 1000)
}
// setting restrictions on when i will end the interval timer
function stopCountDown() {
    if (countDownLength <= 0) {
        clearInterval(interval)
    }
}
// loading the all Done page
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
    // retrieving the latest score from local storage
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
        // setting the score to local storage
        localStorage.setItem("userInfo", JSON.stringify(userScore))
        highScore()
    })
}
// displays the highscore page
function highScore() {
    wrapper.innerHTML = ""
    document.querySelector(".time").innerHTML =""
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
