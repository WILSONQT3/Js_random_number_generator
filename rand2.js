genButton = document.getElementById('genRand')
var rand1 = document.getElementById('rand1')
var rand2 = document.getElementById('rand2')
var rand3 = document.getElementById('rand3')
let random1, random2, random3
let max_num = 30; min_num = 2;
genButton.onclick = function(){

    random1 = Math.floor(Math.random()*max_num + min_num)
    random2 = Math.floor(Math.random()*max_num + min_num)
    random3 = Math.floor(Math.random()*max_num + min_num)
    rand1.innerText = random1
    rand2.innerHTML = random2
    rand3.textContent = random3
    

}