var wrapper = document.querySelector(".wrapper")
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
}
mainPage()
var button = document.querySelector("#start-game")
function game(){
wrapper.innerHTML =""
questions.forEach(function(item){
var div = document.createElement("div")
var h2 = document.createElement("h2")
h2.innerHTML = item.title
div.appendChild(h2)
ul = document.createElement("ul")
ul.setAttribute("id","list-buttons")
div.appendChild(ul)
for(var i =0;i<questions.length -1;i++){
var li = document.createElement("li")
li.setAttribute("data-index",i)
ul.appendChild(li)
var button = document.createElement("button")
button.innerHTML = item.choices[i]
li.appendChild(button)
}
ul.addEventListener("click",function(e){
    if(e.target.matches("button")){
    var index =e.target.parentElement.getAttribute("data-index")
    if(item.choices[index] ===item.answer){
    var p = document.createElement("p")
    p.innerHTML ="correct answer"
    div.appendChild(p)
    }else if(item.choices[index] !==item.answer){
        var p = document.createElement("p")
        p.innerHTML ="Wrong Answer"
        div.appendChild(p)
    }
    }
    })
    wrapper.appendChild(div)
})

}
button.addEventListener("click",game)



