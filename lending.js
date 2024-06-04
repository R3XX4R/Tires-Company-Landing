let img = document.getElementById('ti')

let circlesArray = document.getElementsByClassName("fa-solid fa-circle")
let imgArray = ["легковушка.jpg", "Велики.jpeg", "Трактор.jpg", "Самолеты.jpeg","квадр.jpg"]
let imgTitle = document.getElementById("imgTtl")

let imgSwitch = function() {
    for (let i = 0; i < circlesArray.length; i++){
        circlesArray[i].onclick = function(){
            img.attributes.src.nodeValue = imgArray[i];
            activeCircleCheck();
        } 
    }
}

let circleColorChange = function(circleNumber){
    circleNumber.style.color = "#ffff00";
}

let circleColorDefault = function(circleNumber, ...otherCircleNumbers){
    circleNumber.style.color = "#ffffff";
    otherCircleNumbers[0].style.color = "#ffffff";
    otherCircleNumbers[1].style.color = "#ffffff";
    otherCircleNumbers[2].style.color = "#ffffff";
}


let activeCircleCheck = function(){
    switch (img.attributes.src.nodeValue){
        case imgArray[0]:
            circleColorDefault(circlesArray[1], circlesArray[2], circlesArray[3], circlesArray[4]);
            circleColorChange(circlesArray[0]);
            imgTitle.innerText = "Легковые автомобили";
            break;
        case imgArray[1]:
            circleColorDefault(circlesArray[0], circlesArray[2], circlesArray[3], circlesArray[4])
            circleColorChange(circlesArray[1])
            imgTitle.innerText = "Велосипеды";
            break;
        case imgArray[2]:
            circleColorDefault(circlesArray[0], circlesArray[1], circlesArray[3], circlesArray[4])
            circleColorChange(circlesArray[2])
            imgTitle.innerText = "Сельскохозяйственная техника";
            break;
        case imgArray[3]:
            circleColorDefault(circlesArray[0], circlesArray[1], circlesArray[2], circlesArray[4])
            circleColorChange(circlesArray[3])
            imgTitle.innerText = "Воздушная техника";
            break;
        case imgArray[4]:
            circleColorDefault(circlesArray[0], circlesArray[1], circlesArray[2], circlesArray[3])
            circleColorChange(circlesArray[4])
            imgTitle.innerText = "Квадроциклы";
            break;
    }
}
    
imgSwitch()
console.log(imgTitle.innerText)


//////
let word1 = "собака"
console.log(word1.split)
