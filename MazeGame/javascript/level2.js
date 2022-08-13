const cursor = document.querySelector('#cursor')
const maze = document.querySelector('#maze')
const finish = document.querySelector('#finish')
const lives = document.querySelectorAll('.life')
const lifediv = document.querySelector('.lives')

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

function loseALife() {
    lifediv.removeChild(lives[lifediv.childElementCount - 1])
    squareX = Math.floor((window.innerWidth / 2) - (cursorWidth * 8))
    squareY = Math.floor((window.innerHeight / 2) - (cursorHeight / 2))

    cursor.style.top = `${squareY}px`
    cursor.style.left = `${squareX}px`
}
// Check if there are no lives left
function checkIfZero() {
    if(lifediv.childElementCount == 0) {
        window.location.href = "http://127.0.0.1:5500/html/index.html"
    }
}

let body = document.body
bodyHeight = window.innerHeight
body.style.height = `${bodyHeight}px`

for(let i = 0; i < lives.length; i++) {
    let lifeWidthHeight = Math.floor(window.innerWidth * 2 / 100)
    lives[i].style.width = `${lifeWidthHeight}px`
    lives[i].style.height = `${lifeWidthHeight}px`
}

// Create the Square
const cursorWidth =  Math.floor(window.innerWidth * 5 / 100)
const cursorHeight = cursorWidth

cursor.style.width = `${cursorWidth}px`
cursor.style.height = `${cursorHeight}px`

// Create the Maze based on the square's position
const mazeHeight = cursorHeight * 7
const mazeWidth = cursorWidth * 18

maze.style.width = `${mazeWidth}px`
maze.style.height = `${mazeHeight}px`

maze.style.border = "#000 solid 3px"

// Resize and position the finish line
const finishHeight = mazeHeight
const finishWidth = cursorWidth
const finishX = Math.floor((window.innerWidth / 2) - (cursorWidth * -7.92))

finish.style.width = `${cursorWidth}px`
finish.style.height = `${finishHeight - 6}px` // 6 being the border
finish.style.left = `${finishX + 5}px`

// Position the square in the correct spot
let squareY = Math.floor((window.innerHeight / 2) - (cursorHeight / 2))
let squareX = Math.floor((window.innerWidth / 2) - (cursorWidth * 8))

// Center the square inside the Maze
cursor.style.top = `${squareY}px`
cursor.style.left = `${squareX}px`

function moveSquare(e) {
    if(e.keyCode == 38) {
        squareY = squareY - cursorHeight
        cursor.style.top = `${squareY}px`
    }
    if(e.keyCode == 40) {
        squareY = squareY + cursorHeight
        cursor.style.top = `${squareY}px`
    }
    if(e.keyCode == 37) {
        squareX = squareX - cursorWidth
        cursor.style.left = `${squareX}px`
    }
    if(e.keyCode == 39) {
        squareX = squareX + cursorWidth
        cursor.style.left = `${squareX}px`
    }
}
function ifFinished() {
    if(finishX == squareX - 12 || finishX == squareX - 11 || finishX == squareX - 10 || finishX == squareX - 9 ||finishX == squareX - 8 || finishX == squareX - 7 || finishX == squareX - 6 || finishX == squareX - 5 || finishX == squareX - 4 || finishX == squareX - 3 || finishX == squareX - 2 || finishX == squareX - 1 || finishX == squareX) {
        window.location.href = "http://127.0.0.1:5500/html/level3.html"
    }
}

setInterval(ifFinished, 150)

////////// Traps //////////

////////// Wall Traps //////////

let wall1 = document.createElement('div')
let wall2 = document.createElement('div')
let wall3 = document.createElement('div')

let walls = [wall1, wall2, wall3]

//// Styling
for(let i = 0; i < walls.length; i++) {
    walls[i].style.position = "absolute"
    walls[i].style.background = "#555"
    walls[i].style.borderLeft = "2px solid #000"
    walls[i].style.borderRight = "2px solid #000"
    walls[i].style.width = `${cursorWidth}px`
    walls[i].style.height = `${mazeHeight - 6}px`
}

//// Positioning
const wall1X = Math.floor((window.innerWidth / 2) - (cursorWidth * 6))
const wall2X = Math.floor((window.innerWidth / 2) - (cursorWidth * 4))
const wall3X = Math.floor((window.innerWidth / 2) - (cursorWidth * 2))

wall1.style.left = `${wall1X}px`
wall2.style.left = `${wall2X}px`
wall3.style.left = `${wall3X}px`

//// Appending
maze.appendChild(wall1)
maze.appendChild(wall2)
maze.appendChild(wall3)

function makeTrapWallsBlink() {
    // Set their display to none
    wall1.style.display = "none"
    wall2.style.display = "none"
    wall3.style.display = "none"
    
    // Then set it to block again
    setTimeout(() => {
        wall1.style.display = "block"
        wall2.style.display = "block"
        wall3.style.display = "block"
    }, 500)
}
async function makeTrapWallsKill() {
    while(true) {
        await sleep(100)
        if(wall1.style.display == "block" && squareX == wall1X || wall2.style.display == "block" && squareX == wall2X ||
        wall3.style.display == "block" && squareX == wall3X) {
            loseALife()
        }
    }
}

makeTrapWallsKill()

////////// Rotation trap //////////

//// Styling
const rotatorWall = document.createElement('div')
const rotator = document.createElement('div')

rotatorWall.style.position = "absolute"
rotator.style.position = "absolute"

rotatorWall.style.background = "#555"
rotator.style.background = "#ffa500"
rotator.style.border = "2px solid #000"

rotatorWall.style.width = `${cursorWidth}px`
rotator.style.width = `${cursorWidth}px`

rotatorWall.style.height = `${mazeHeight - (cursorHeight * 2)}px`
rotator.style.height = `${cursorHeight}px`

rotatorWall.style.borderRadius = "5px"
rotatorWall.style.border = "2px solid #000"

//// Positioning
let rotatorWallX = Math.floor((window.innerWidth / 2) - (cursorWidth * -1))
let rotatorX = Math.floor((window.innerWidth / 2) - (cursorWidth * -1))

let rotatorWallY = Math.floor(squareY - cursorHeight * 2)
let rotatorY = Math.floor(squareY + cursorHeight * 3 - 2)

rotatorWall.style.left = `${rotatorWallX}px`
rotator.style.left = `${rotatorX}px`

rotatorWall.style.top = `${rotatorWallY}px`
rotator.style.top = `${rotatorY}px`

//// Appending
maze.appendChild(rotatorWall)
maze.appendChild(rotator)

//// Rotation trap functions

function makeRotatorSpin() {
    let Y = (window.innerHeight / 2) - (cursorHeight / 2)

    rotatorX = Math.floor((window.innerWidth / 2) - (cursorWidth * -2) + 2)
    rotator.style.left = `${rotatorX}px`

    if(squareX == rotatorX - 2 || squareX == rotatorX - cursorHeight) {
        loseALife()
    }

    setTimeout(() => {
        rotatorY = Math.floor(Y + cursorHeight * 2)
        rotator.style.top = `${rotatorY}px`

        if(squareY == rotatorY && squareX == rotatorX) {
            loseALife()
        }

        setTimeout(() => {
            rotatorY = Math.floor(Y + cursorHeight * 1)
            rotator.style.top = `${rotatorY}px`

            if(squareY == rotatorY && squareX == rotatorX) {
                loseALife()
            }

            setTimeout(() => {
                rotatorY = Math.floor(Y + cursorHeight * 0)
                rotator.style.top = `${rotatorY}px`

                if(squareY == rotatorY && squareX == rotatorX) {
                    loseALife()
                }

                setTimeout(() => {
                    rotatorY = Math.floor(Y + cursorHeight * -1)
                    rotator.style.top = `${rotatorY}px`

                    if(squareY == rotatorY && squareX == rotatorX) {
                        loseALife()
                    }

                    setTimeout(() => {
                        rotatorY = Math.floor(Y + cursorHeight * -2)
                        rotator.style.top = `${rotatorY}px`

                        if(squareY == rotatorY && squareX == rotatorX) {
                            loseALife()
                        }

                        setTimeout(() => {
                            rotatorY = Math.floor(Y + cursorHeight * -3 + 2)
                            rotator.style.top = `${rotatorY}px`

                            if(squareY == rotatorY && squareX == rotatorX) {
                                loseALife()
                            }

                            setTimeout(() => {
                                rotatorX = Math.floor((window.innerWidth / 2) - (cursorWidth * -1))
                                rotator.style.left = `${rotatorX}px`

                                if(squareX == rotatorX && squareY == rotatorY - 2 || squareX == rotatorX - cursorHeight && squareY == rotatorY) {
                                    loseALife()
                                }

                                setTimeout(() => {
                                    rotatorX = Math.floor((window.innerWidth / 2) - (cursorWidth * 0))
                                    rotator.style.left = `${rotatorX}px`

                                    if(squareX == rotatorX && squareY == rotatorY - 2 || squareX == rotatorX - cursorHeight && squareY == rotatorY) {
                                        loseALife()
                                    }
                                    
                                    setTimeout(() => {
                                        rotatorY = Math.floor(Y + cursorHeight * -2)
                                        rotator.style.top = `${rotatorY}px`

                                        if(squareY == rotatorY && squareX == rotatorX) {
                                            loseALife()
                                        }

                                        setTimeout(() => {
                                            rotatorY = Math.floor(Y + cursorHeight * -1)
                                            rotator.style.top = `${rotatorY}px`

                                            if(squareY == rotatorY && squareX == rotatorX) {
                                                loseALife()
                                            }

                                            setTimeout(() => {
                                                rotatorY = Math.floor(Y + cursorHeight * 0)
                                                rotator.style.top = `${rotatorY}px`

                                                if(squareY == rotatorY && squareX == rotatorX) {
                                                    loseALife()
                                                }

                                                setTimeout(() => {
                                                    rotatorY = Math.floor(Y + cursorHeight * 1)
                                                    rotator.style.top = `${rotatorY}px`

                                                    if(squareY == rotatorY && squareX == rotatorX) {
                                                        loseALife()
                                                    }

                                                    setTimeout(() => {
                                                        rotatorY = Math.floor(Y + cursorHeight * 2)
                                                        rotator.style.top = `${rotatorY}px`

                                                        if(squareY == rotatorY && squareX == rotatorX) {
                                                            loseALife()
                                                        }

                                                        setTimeout(() => {
                                                            rotatorY = Math.floor(Y + cursorHeight * 3 - 3)
                                                            rotator.style.top = `${rotatorY}px`

                                                            if(squareY == rotatorY + 3 && squareX == rotatorX) {
                                                                loseALife()
                                                            }

                                                            setTimeout(() => {
                                                                rotatorX = Math.floor((window.innerWidth / 2) - (cursorWidth * -1))
                                                                rotator.style.left = `${rotatorX}px`

                                                                if(squareX == rotatorX && squareY == rotatorY + 3 || squareX == rotatorX - cursorHeight && squareY == rotatorY) {
                                                                    loseALife()
                                                                }

                                                                setTimeout(() => {
                                                                    makeRotatorSpin()
                                                                }, 30)
                                                            }, 30)
                                                        }, 30)
                                                    }, 30)
                                                }, 30)
                                            }, 30)
                                        }, 30)
                                    }, 30)
                                }, 30)
                            }, 30)
                        }, 30)
                    }, 30)
                }, 30)
            }, 30)
        }, 30)
    }, 30)
}
function makeRotWallKill() {
    let rotY = Math.floor((window.innerHeight / 2) - (cursorHeight / 2))

    if(squareX == rotatorWallX && squareY == rotY - cursorHeight || squareX == rotatorWallX && squareY == rotY + cursorHeight ||
    squareX == rotatorWallX && squareY == rotY || squareX == rotatorWallX && squareY == rotY + cursorHeight * 2 ||
    squareX == rotatorWallX && squareY == rotY - cursorHeight * 2) {
        loseALife()
    }
}

makeRotatorSpin()

////////// Cannon traps //////////

const leftBlockTop = document.createElement('div')
const topBlockTop = document.createElement('div')
const bottomBlockTop = document.createElement('div')

const leftBlockBottom = document.createElement('div')
const topBlockBottom = document.createElement('div')
const bottomBlockBottom = document.createElement('div')

const blocksTop = [leftBlockTop, topBlockTop, bottomBlockTop]
const blocksBottom = [leftBlockBottom, topBlockBottom, bottomBlockBottom]

//// Styling
for(let i = 0; i < blocksTop.length; i++) {
    blocksTop[i].style.position = "absolute"
    blocksTop[i].style.background = "#555"
    blocksTop[i].style.width = `${cursorWidth}px`
    blocksTop[i].style.height = `${cursorHeight}px`
}
for(let i = 0; i < blocksBottom.length; i++) {
    blocksBottom[i].style.position = "absolute"
    blocksBottom[i].style.background = "#555"
    blocksBottom[i].style.width = `${cursorWidth}px`
    blocksBottom[i].style.height = `${cursorHeight}px`
}

topBlockTop.style.borderRight = "2px solid #000"
leftBlockTop.style.borderLeft = "2px solid #000"
leftBlockTop.style.borderBottom = "2px solid #000"
bottomBlockTop.style.borderRight = "2px solid #000"
bottomBlockTop.style.borderBottom = "2px solid #000"
bottomBlockTop.style.borderLeft = "2px solid #000"

bottomBlockBottom.style.borderRight = "2px solid #000"
leftBlockBottom.style.borderLeft = "2px solid #000"
leftBlockBottom.style.borderTop = "2px solid #000"
topBlockBottom.style.borderRight = "2px solid #000"
topBlockBottom.style.borderLeft = "2px solid #000"
topBlockBottom.style.borderTop = "2px solid #000"

//// Positioning
const middleBarTop = [topBlockTop, bottomBlockTop]
const middleBarBottom = [topBlockBottom, bottomBlockBottom]

const middleBarTopX = Math.floor((window.innerWidth / 2) - (cursorWidth * -6))
const leftBlockTopX = Math.floor((window.innerWidth / 2) - (cursorWidth * -5))

const middleBarBottomX = Math.floor((window.innerWidth / 2) - (cursorWidth * -6))
const leftBlockBottomX = Math.floor((window.innerWidth / 2) - (cursorWidth * -5))

const topBlockTopY = Math.floor(squareY - cursorHeight * 3 + 1)
const bottomBlockTopY = Math.floor(squareY - cursorHeight * 2 + 1)
const leftBlockTopY = Math.floor(squareY - cursorHeight * 3 + 1)

const topBlockBottomY = Math.floor(squareY - cursorHeight * -2)
const bottomBlockBottomY = Math.floor(squareY - cursorHeight * -3)
const leftBlockBottomY = Math.floor(squareY - cursorHeight * -3)

for(let i = 0; i < middleBarTop.length; i++) {middleBarTop[i].style.left = `${middleBarTopX}px`}
leftBlockTop.style.left = `${leftBlockTopX}px`
leftBlockTop.style.top = `${leftBlockTopY}px`

topBlockTop.style.top = `${topBlockTopY}px`
bottomBlockTop.style.top = `${bottomBlockTopY}px`

for(let i = 0; i < middleBarBottom.length; i++) {middleBarBottom[i].style.left = `${middleBarBottomX}px`}
leftBlockBottom.style.left = `${leftBlockBottomX}px`
leftBlockBottom.style.top = `${leftBlockBottomY}px`

topBlockBottom.style.top = `${topBlockBottomY}px`
bottomBlockBottom.style.top = `${bottomBlockBottomY}px`

topBlockTop.style.background = "#555 url('/images/skull.png') no-repeat center center/cover"
topBlockTop.style.backgroundSize = "80%"

bottomBlockBottom.style.background = "#555 url('/images/skull.png') no-repeat center center/cover"
bottomBlockBottom.style.backgroundSize = "80%"
//// Appending
for(let i = 0; i < blocksTop.length; i++) {maze.appendChild(blocksTop[i])}
for(let i = 0; i < blocksBottom.length; i++) {maze.appendChild(blocksBottom[i])}

//// Make cannons shoot

async function leftLoop() {
    const cannonBallLeftTop = document.createElement('div')
    const cannonBallLeftBottom = document.createElement('div')

    const cannonballs = [cannonBallLeftTop, cannonBallLeftBottom]

    const ballWidthHeight = Math.floor(cursorWidth / 3)
    for(let i = 0; i < cannonballs.length; i++) {
        cannonballs[i].style.position = "absolute"
        cannonballs[i].style.width = `${ballWidthHeight}px`
        cannonballs[i].style.height = `${ballWidthHeight}px`
        cannonballs[i].style.background = "#ff0000"
        cannonballs[i].style.border = "2px solid #000"
        cannonballs[i].style.zIndex = "999"  
    }

    cannonBallLeftTop.style.left = `${leftBlockTopX + ballWidthHeight}px`
    cannonBallLeftBottom.style.left = `${leftBlockBottomX + ballWidthHeight}px`

    cannonBallLeftTop.style.top = `${leftBlockTopY + ballWidthHeight}px`
    cannonBallLeftBottom.style.top = `${leftBlockBottomY + ballWidthHeight}px`

    for(let i = 0; i < cannonballs.length; i++) {maze.appendChild(cannonballs[i])}

    let leftTopX = leftBlockTopX
    let leftBottomX = leftBlockBottomX

    while(leftTopX && leftBottomX > mazeWidth / 18) {
        await sleep(100)

        leftTopX = leftTopX - cursorWidth
        leftBottomX = leftBottomX - cursorWidth

        cannonBallLeftTop.style.left = `${leftTopX}px`
        cannonBallLeftBottom.style.left = `${leftBottomX}px`

        if(squareX == leftBottomX && squareY == leftBlockBottomY || squareX == leftTopX && squareY == leftBlockTopY - 1) {
            loseALife()
        }

        if(leftTopX && leftBottomX <= mazeWidth / 18) {
            cannonBallLeftTop.remove()
            cannonBallLeftBottom.remove()
            leftLoop()
        }
    }
}

leftLoop()

async function topBottomLoop() {
    const cannonBallBottomTop = document.createElement('div')
    const cannonBallTopBottom = document.createElement('div')

    const cannonballs = [cannonBallBottomTop, cannonBallTopBottom]

    const ballWidthHeight = Math.floor(cursorWidth / 3)
    for(let i = 0; i < cannonballs.length; i++) {
        cannonballs[i].style.position = "absolute"
        cannonballs[i].style.width = `${ballWidthHeight}px`
        cannonballs[i].style.height = `${ballWidthHeight}px`
        cannonballs[i].style.background = "#ff0000"
        cannonballs[i].style.border = "2px solid #000"
        cannonballs[i].style.zIndex = "999"
    }

    cannonBallBottomTop.style.left = `${middleBarTopX + ballWidthHeight}px`
    cannonBallTopBottom.style.left = `${middleBarBottomX + ballWidthHeight}px`

    cannonBallBottomTop.style.top = `${topBlockBottomY + ballWidthHeight}px`
    cannonBallTopBottom.style.top = `${bottomBlockTopY + ballWidthHeight}px`

    for(let i = 0; i < cannonballs.length; i++) {maze.appendChild(cannonballs[i])}

    let topY = bottomBlockTopY + ballWidthHeight
    let bottomY = topBlockBottomY + ballWidthHeight

    while(topY < topBlockBottomY && bottomY > bottomBlockTopY) {
        await sleep(125)

        topY = topY + cursorHeight
        bottomY = bottomY - cursorHeight

        cannonBallBottomTop.style.top = `${topY}px`
        cannonBallTopBottom.style.top = `${bottomY}px`


        if(squareX == middleBarTopX && squareY == topY - ballWidthHeight || squareX == middleBarTopX && squareY == bottomY - ballWidthHeight) {
            loseALife()
        }

        if(bottomY >= bottomBlockTopY && topY >= topBlockBottomY) {
            cannonBallBottomTop.remove()
            cannonBallTopBottom.remove()
            topBottomLoop()
        }
    }
}

topBottomLoop()

// Repeat the functions over and over again
setInterval(checkIfZero, 100)
setInterval(makeTrapWallsBlink, 600)
setInterval(makeRotWallKill, 30)

// Kill if out of the maze
function killIfOut() {
    if(squareX < mazeWidth / 18 || squareX > mazeWidth + cursorWidth ||
    squareY < Math.floor((window.innerHeight / 2) - (cursorHeight * 4)) ||
    squareY > Math.floor((window.innerHeight / 2) - (cursorHeight * -3))) {
        loseALife()
    }
}

setInterval(killIfOut, 30)

document.addEventListener('keydown', moveSquare)