const walls = document.querySelectorAll('.wall')
const wall7last = document.querySelector('#wall7last')
const cursor = document.querySelector('#cursor')
const obstacle1 = document.querySelector('#obstacle1')
const obstacle2 = document.querySelector('#obstacle2')
const obstacle3 = document.querySelector('#obstacle3')
const obstacle4 = document.querySelector('#obstacle4')
const obstacle5 = document.querySelector('#obstacle5')
const obstacle6 = document.querySelector('#obstacle6')
const obstacle7 = document.querySelector('#obstacle7')
const obstacle8 = document.querySelector('#obstacle8')
const obstacle9 = document.querySelector('#obstacle9')
const obstacle10 = document.querySelector('#obstacle10')
const obstacle11 = document.querySelector('#obstacle11')
const obstacle12 = document.querySelector('#obstacle12')
const obstacle13 = document.querySelector('#obstacle13')
const obstacle14 = document.querySelector('#obstacle14')
const obstacle15 = document.querySelector('#obstacle15')
const obstacle16 = document.querySelector('#obstacle16')
const obstacle17 = document.querySelector('#obstacle17')
const teleport = document.querySelector('#teleport')
const finish = document.querySelector('#finish')

let squarePosY = 935
let squarePosX = 975

cursor.style.top = "935px"
cursor.style.left = "975px"

teleport.style.background = "transparent"

function checkFirstObstacle() {
    if(obstacle1.style.display == 'block' && squarePosX == 815 && squarePosY == 555 || obstacle1.style.display == 'block' && squarePosX == 795 && squarePosY == 555) {
     window.location.replace("http://127.0.0.1:5500/html/index.html")
    }
}
function triggerFirstObstacle() {
    obstacle1.style.display = 'block'
    setTimeout(() => {
        obstacle1.style.display = 'none'
        setTimeout(() => {
            obstacle1.style.display = 'block'
            setTimeout(() => {
                obstacle1.style.display = 'none' 
            }, 2000);
        }, 750);
    }, 2000);
}
function checkSecondObstacle() {
    if(obstacle2.style.display == 'block' && squarePosX == 675 && squarePosY == 295 ||
    obstacle3.style.display == 'block' && squarePosX == 655 && squarePosY == 295 ||
    obstacle4.style.display == 'block' && squarePosX == 635 && squarePosY == 295 ||
    obstacle4.style.display == 'block' && squarePosX == 635 && squarePosY == 315) {
    window.location.replace("http://127.0.0.1:5500/html/index.html")
}
}
function triggerSecondObstacle() {
    obstacle2.style.display = 'block'
    setTimeout(() => {
        obstacle3.style.display = "block"
        setTimeout(() => {
            obstacle4.style.display = "block"
        }, 350);
    }, 350);
}
function generateObstacleWall() {
    obstacle5.style.display = "block"
    setTimeout(() => {
        obstacle6.style.display = "block"
        setTimeout(() => {
            obstacle7.style.display = "block"
            setTimeout(() => {
                obstacle8.style.display = "block"
                setTimeout(() => {
                    obstacle9.style.display = "block"
                    setTimeout(() => {
                        obstacle10.style.display = "block"
                        setTimeout(() => {
                            obstacle11.style.display = "block"
                            setTimeout(() => {
                                obstacle12.style.display = "block"
                                setTimeout(() => {
                                    obstacle13.style.display = "block"
                                    setTimeout(() => {
                                        obstacle14.style.display = "block"
                                        setTimeout(() => {
                                            obstacle15.style.display = "block"
                                            setTimeout(() => {
                                                obstacle16.style.display = "block"
                                                setTimeout(() => {
                                                    obstacle17.style.display = "block"
                                                    setTimeout(() => {
                                                        obstacle5.style.display = "none"
                                                        obstacle6.style.display = "none"
                                                        obstacle7.style.display = "none"
                                                        obstacle8.style.display = "none"
                                                        obstacle9.style.display = "none"
                                                        obstacle10.style.display = "none"
                                                        obstacle11.style.display = "none"
                                                        obstacle12.style.display = "none"
                                                        obstacle13.style.display = "none"
                                                        obstacle14.style.display = "none"
                                                        obstacle15.style.display = "none"
                                                        obstacle16.style.display = "none"
                                                        obstacle17.style.display = "none"
                                                        setTimeout(() => {
                                                            obstacle5.style.display = "block"
                                                            obstacle6.style.display = "block"
                                                            obstacle7.style.display = "block"
                                                            obstacle8.style.display = "block"
                                                            obstacle9.style.display = "block"
                                                            obstacle10.style.display = "block"
                                                            obstacle11.style.display = "block"
                                                            obstacle12.style.display = "block"
                                                            obstacle13.style.display = "block"
                                                            obstacle14.style.display = "block"
                                                            obstacle15.style.display = "block"
                                                            obstacle16.style.display = "block"
                                                            obstacle17.style.display = "block"
                                                            setTimeout(() => {
                                                                blackenScreen()
                                                            }, 4000);
                                                        }, 2000);
                                                    }, 6000);
                                                }, 600);
                                            }, 600);
                                        }, 600);
                                    }, 600);
                                }, 600);
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
        }, 600);
    }, 600);
}
function makeObstacleWallKill() {
    if(
    // 17
    squarePosY == 915 && squarePosX == 975 && document.querySelector('#teleport') == null && obstacle17.style.display == "block" || 
    squarePosY == 895 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle17.style.display == "block" ||

    // 16
    squarePosY == 875 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle16.style.display == "block" ||
    squarePosY == 855 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle16.style.display == "block" ||

    // 15
    squarePosY == 855 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle15.style.display == "block" ||
    squarePosY == 835 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle15.style.display == "block" ||

    // 14
    squarePosY == 815 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle14.style.display == "block" ||
    squarePosY == 795 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle14.style.display == "block" ||

    // 13
    squarePosY == 795 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle13.style.display == "block" ||
    squarePosY == 775 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle13.style.display == "block" ||
    
    // 12
    squarePosY == 775 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle12.style.display == "block" ||
    squarePosY == 755 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle12.style.display == "block" ||

    // 11
    squarePosY == 735 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle11.style.display == "block" ||
    squarePosY == 715 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle11.style.display == "block" ||

    // 10
    squarePosY == 715 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle10.style.display == "block" ||
    squarePosY == 695 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle10.style.display == "block" ||

    // 9
    squarePosY == 675 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle9.style.display == "block" ||
    squarePosY == 655 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle9.style.display == "block" ||

    // 8
    squarePosY == 655 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle8.style.display == "block" ||
    squarePosY == 635 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle8.style.display == "block" ||

    // 7
    squarePosY == 615 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle7.style.display == "block" ||
    squarePosY == 595 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle7.style.display == "block" ||

    // 6
    squarePosY == 595 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle6.style.display == "block" ||
    squarePosY == 575 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle6.style.display == "block" ||
    
    // 5
    squarePosY == 575 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle5.style.display == "block" ||
    squarePosY == 555 && squarePosX == 975 && document.querySelector("#teleport") == null && obstacle5.style.display == "block") {
        window.location.replace("http://127.0.0.1:5500/html/index.html")        
    }
}
function blackenScreen() {
    document.body.style.background = "#000"
    setTimeout(() => {
        for(let i = 0; i < walls.length; i++){
            walls[i].style.background = "#000"
        }
    }, 2000);
    obstacle1.style.display = "none"
    obstacle2.style.display = "none"
    obstacle3.style.display = "none"
    obstacle4.style.display = "none"
    obstacle5.style.display = "none"
    obstacle6.style.display = "none"
    obstacle7.style.display = "none"
    obstacle8.style.display = "none"
    obstacle9.style.display = "none"
    obstacle10.style.display = "none"
    obstacle11.style.display = "none"
    obstacle12.style.display = "none"
    obstacle13.style.display = "none"
    obstacle14.style.display = "none"
    obstacle15.style.display = "none"
    obstacle16.style.display = "none"
    obstacle17.style.display = "none"
}
function checkToChangeFace() {
    if(squarePosX == 975 && squarePosY == 555 && teleport.style.background == "" && finish.style.top == "925px") {
        cursor.innerHTML = ";)"
    }
}
function makeSecretWay() {
    if(squarePosX == 635 && squarePosY == 335) {
        wall7last.style.opacity = "0.97"
    }
}

setInterval(makeSecretWay, 30)
setInterval(checkToChangeFace, 30)
setInterval(checkFirstObstacle, 30)
setInterval(checkSecondObstacle, 30)
setInterval(makeObstacleWallKill, 30)

function moveSquare(e) {
    if(e.keyCode == 38) {
        squarePosY = squarePosY - 20
        cursor.style.top = `${squarePosY}px`
        console.log("Y: " + squarePosY)
    }
    if(e.keyCode == 40) {
        squarePosY = squarePosY + 20
        cursor.style.top = `${squarePosY}px`
        console.log("Y: " + squarePosY)
    }
    if(e.keyCode == 37) {
        squarePosX = squarePosX - 20
        cursor.style.left = `${squarePosX}px`
        console.log("X: " + squarePosX)
    }
    if(e.keyCode == 39) {
        squarePosX = squarePosX + 20
        cursor.style.left = `${squarePosX}px`
        console.log("X: " + squarePosX)
    }
    if(squarePosX == 955 && squarePosY == 935 || squarePosX == 995 && squarePosY == 935 || squarePosY == 915 && squarePosX == 955 ||
        squarePosY == 915 && squarePosX == 995 || squarePosY == 895 && squarePosX == 955 || squarePosY == 895 && squarePosX == 995 ||
        squarePosY == 875 && squarePosX == 995 || squarePosY == 875 && squarePosX == 955 || squarePosY == 855 && squarePosX == 995 ||
        squarePosY == 855 && squarePosX == 955 || squarePosY == 835 && squarePosX == 955 || squarePosY == 835 && squarePosX == 995 ||
        squarePosY == 815 && squarePosX == 955 || squarePosY == 815 && squarePosX == 995 || squarePosY == 795 && squarePosX == 955 ||
        squarePosY == 795 && squarePosX == 995 || squarePosY == 775 && squarePosX == 995 || squarePosY == 775 && squarePosX == 955 ||
        squarePosY == 755 && squarePosX == 995 || squarePosY == 755 && squarePosX == 955 || squarePosY == 735 && squarePosX == 995 ||
        squarePosY == 735 && squarePosX == 955 || squarePosY == 715 && squarePosX == 995 || squarePosY == 715 && squarePosX == 955 ||
        squarePosY == 695 && squarePosX == 995 || squarePosY == 695 && squarePosX == 955 || squarePosY == 675 && squarePosX == 995 ||
        squarePosY == 675 && squarePosX == 955 || squarePosY == 655 && squarePosX == 995 || squarePosY == 655 && squarePosX == 955 ||
        squarePosY == 635 && squarePosX == 995 || squarePosY == 635 && squarePosX == 955 || squarePosY == 615 && squarePosX == 995 ||
        squarePosY == 615 && squarePosX == 955 || squarePosY == 595 && squarePosX == 995 || squarePosY == 595 && squarePosX == 955 ||
        squarePosY == 575 && squarePosX == 995 || squarePosY == 575 && squarePosX == 955 || squarePosY == 555 && squarePosX == 995 ||
        squarePosY == 535 && squarePosX == 975 || squarePosY == 535 && squarePosX == 955 || squarePosY == 575 && squarePosX == 935 ||
        squarePosY == 535 && squarePosX == 935 || squarePosY == 535 && squarePosX == 915 || squarePosY == 575 && squarePosX == 915 ||
        squarePosY == 535 && squarePosX == 895 || squarePosY == 575 && squarePosX == 895 || squarePosY == 535 && squarePosX == 875 ||
        squarePosY == 575 && squarePosX == 875 || squarePosY == 535 && squarePosX == 855 || squarePosY == 575 && squarePosX == 855 ||
        squarePosY == 535 && squarePosX == 835 || squarePosY == 575 && squarePosX == 835 || squarePosY == 535 && squarePosX == 815 ||
        squarePosY == 575 && squarePosX == 815 || squarePosY == 535 && squarePosX == 795 || squarePosY == 575 && squarePosX == 795 ||
        squarePosY == 535 && squarePosX == 775 || squarePosY == 575 && squarePosX == 775 || squarePosY == 535 && squarePosX == 755 ||
        squarePosY == 575 && squarePosX == 755 || squarePosY == 535 && squarePosX == 735 || squarePosY == 535 && squarePosX == 735 ||
        squarePosY == 575 && squarePosX == 715 || squarePosY == 535 && squarePosX == 715 || squarePosY == 575 && squarePosX == 695 ||
        squarePosY == 535 && squarePosX == 695 || squarePosY == 575 && squarePosX == 675 || squarePosY == 535 && squarePosX == 675 ||
        squarePosY == 575 && squarePosX == 655 || squarePosY == 535 && squarePosX == 655 || squarePosY == 575 && squarePosX == 635 ||
        squarePosY == 555 && squarePosX == 615 || squarePosY == 535 && squarePosX == 615 || squarePosY == 515 && squarePosX == 615 ||
        squarePosY == 495 && squarePosX == 615 || squarePosY == 475 && squarePosX == 615 || squarePosY == 455 && squarePosX == 615 ||
        squarePosY == 435 && squarePosX == 615 || squarePosY == 415 && squarePosX == 615 || squarePosY == 395 && squarePosX == 615 ||
        squarePosY == 375 && squarePosX == 615 || squarePosY == 355 && squarePosX == 615 || squarePosY == 335 && squarePosX == 615 ||
        squarePosY == 315 && squarePosX == 615 || squarePosY == 295 && squarePosX == 615 || squarePosY == 515 && squarePosX == 655 ||
        squarePosY == 495 && squarePosX == 655 || squarePosY == 475 && squarePosX == 655 || squarePosY == 455 && squarePosX == 655 ||
        squarePosY == 435 && squarePosX == 655 || squarePosY == 415 && squarePosX == 655 || squarePosY == 395 && squarePosX == 655 ||
        squarePosY == 375 && squarePosX == 655 || squarePosY == 355 && squarePosX == 655 || squarePosY == 335 && squarePosX == 695 ||
        squarePosY == 315 && squarePosX == 655 || squarePosY == 275 && squarePosX == 655 || squarePosY == 275 && squarePosX == 635 ||
        squarePosY == 315 && squarePosX == 695 || squarePosY == 315 && squarePosX == 715 || squarePosY == 355 && squarePosX == 675 ||
        squarePosY == 315 && squarePosX == 735 || squarePosY == 315 && squarePosX == 755 || squarePosY == 315 && squarePosX == 775 ||
        squarePosY == 315 && squarePosX == 795 || squarePosY == 315 && squarePosX == 815 || squarePosY == 315 && squarePosX == 835 ||
        squarePosY == 315 && squarePosX == 855 || squarePosY == 315 && squarePosX == 875 || squarePosY == 315 && squarePosX == 895 ||
        squarePosY == 275 && squarePosX == 675 || squarePosY == 275 && squarePosX == 695 || squarePosY == 275 && squarePosX == 715 ||
        squarePosY == 275 && squarePosX == 735 || squarePosY == 275 && squarePosX == 755 || squarePosY == 275 && squarePosX == 775 ||
        squarePosY == 275 && squarePosX == 795 || squarePosY == 275 && squarePosX == 815 || squarePosY == 275 && squarePosX == 835 ||
        squarePosY == 275 && squarePosX == 855 || squarePosY == 275 && squarePosX == 875 || squarePosY == 275 && squarePosX == 895) {
        window.location.replace("http://127.0.0.1:5500/html/index.html")
    }
    if(squarePosX == 835 && squarePosY == 555) {
        triggerFirstObstacle()
    }
    if(squarePosX == 655 && squarePosY == 295) {
        triggerSecondObstacle()
    }
    if(squarePosX == 875 && squarePosY == 295 && teleport.style.background == "transparent none repeat scroll 0% 0%") {
        cursor.style.top = '935px'
        cursor.style.left = '975px'
        squarePosX = 975
        squarePosY = 935
        teleport.style.background = ""
        teleport.remove()
        cursor.innerHTML = ":o"
        setTimeout(() => {
            generateObstacleWall() 
        }, 1000);
    }
    if(squarePosX == 915 && squarePosY == 295 && teleport.style.background == "") {
        finish.style.padding = "10px 12.5px"
        finish.style.left = "920px"
        finish.style.top = "925px"
        cursor.style.top = "295px"
        cursor.style.left = "895px"
        squarePosX = 895
        squarePosY = 295
        cursor.innerHTML = ":("
        finish.style.borderTopLeftRadius = "10px"
        finish.style.borderBottomLeftRadius = "10px"
    }
    if(teleport.style.background == "" && finish.style.top == "925px") {
        if(squarePosX == 975 && squarePosY == 915) {
            window.location.href = "http://127.0.0.1:5500/html/level2.html"
        }
    }
    if(squarePosY == 955) {
        window.location.replace("http://127.0.0.1:5500/html/index.html")
    }
}

document.addEventListener('keydown', moveSquare)