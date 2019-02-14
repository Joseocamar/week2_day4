/* 
// Preparación del entorno
function DrawApp(){
    this.version = '1.0'
    this.name = 'Drawing App'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
}

DrawApp.prototype.init = function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this._setDimensions()
    this._setHandlers()
}

DrawApp.prototype._setDimensions = function(){
    var windowWidth = window.innerWidth
    var windowHeight = window.innerHeight

    this.canvasDom.setAttribute('width', windowWidth)
    this.canvasDom.setAttribute('height', windowHeight)

    this.w = windowWidth
    this.h = windowHeight
}

DrawApp.prototype._setHandlers = function(){

    window.onresize = function(){
        this._setDimensions()
    }.bind(this)

} */









/* function DrawApp(){
    this.version = '1.0'
    this.name = 'Drawing App'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
}

DrawApp.prototype.init = function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this._setDimensions()
    this._setHandlers()
}

DrawApp.prototype._setDimensions = function(){
    var windowWidth = window.innerWidth
    var windowHeight = window.innerHeight

    this.canvasDom.setAttribute('width', windowWidth)
    this.canvasDom.setAttribute('height', windowHeight)

    this.w = windowWidth
    this.h = windowHeight
}

DrawApp.prototype._setHandlers = function(){

    window.onresize = function(){
        this._setDimensions()
    }.bind(this)
    
}

DrawApp.prototype.drawFilledSquare = function(){

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.w / 2 - 50, this.h / 2 - 50, 100, 100)
}


DrawApp.prototype.drawLinearSquare = function(){

    this.ctx.strokeRect(this.w - 100, this.h / 2 - 50, 100, 100)
}

DrawApp.prototype.drawRect = function(){

    this.ctx.beginPath()
    this.ctx.lineWidth = 20
    this.ctx.strokeStyle = 'red'
    this.ctx.setLineDash([50, 10])
    this.ctx.moveTo(0, this.h / 2)
    this.ctx.lineTo(this.w, this.h / 2)
    this.ctx.stroke()
}


DrawApp.prototype.drawCircle = function(){
    this.ctx.fillStyle = 'blue'
    this.ctx.arc(this.w / 2, this.h / 2, 20, 0, Math.PI * 2)
    this.ctx.stroke()
    this.ctx.fill()
}


DrawApp.prototype.addText = function(text){
    this.ctx.font = "40px sans-serif"
    this.ctx.textBaseline = "top"
    this.ctx.fillText(text, 10, 10)
}

DrawApp.prototype.showImage = function(url){
    var img = new Image();   // Create new img element
    img.src = url; // Set source path

    img.onload = function(){

        this.ctx.drawImage(img, 100, 100, 100, 100)
    }.bind(this)
} */






/* 
function AnimateApp(){
    this.version = '1.0'
    this.name = 'Drawing App'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.posX = 0
    this.dir = 1
}

AnimateApp.prototype.init = function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this._setDimensions()
    this._setHandlers()
}

AnimateApp.prototype._setDimensions = function(){
    var windowWidth = window.innerWidth
    var windowHeight = window.innerHeight

    this.canvasDom.setAttribute('width', windowWidth)
    this.canvasDom.setAttribute('height', windowHeight)

    this.w = windowWidth
    this.h = windowHeight
}

AnimateApp.prototype._setHandlers = function(){

    window.onresize = function(){
        this._setDimensions()
    }.bind(this)
    
}

AnimateApp.prototype._moveLeft = function(){
    this.dir = 1
}

AnimateApp.prototype._moveRight = function(){
    this.dir = -1
}


AnimateApp.prototype.drawMovingSquare = function(){

    setInterval(function(){

        if (this.posX === this.w - 100) this._moveRight()
        if (this.posX === 0) this._moveLeft()

        this.posX += this.dir

        this._update() 

    }.bind(this), 10)
}

AnimateApp.prototype._update = function(){
    this.ctx.clearRect(0, 0, this.w, this.h)
    this.ctx.fillRect(this.posX, this.h / 2 - 50, 100, 100)
} */







function ControlsApp(){
    this.version = '1.0'
    this.name = 'Drawing App'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.posX = 0
}

ControlsApp.prototype.init = function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this._setDimensions()
    this._setHandlers()
    this._setListeners()
    this._update()
}

ControlsApp.prototype._setDimensions = function(){
    var windowWidth = window.innerWidth
    var windowHeight = window.innerHeight

    this.canvasDom.setAttribute('width', windowWidth)
    this.canvasDom.setAttribute('height', windowHeight)

    this.w = windowWidth
    this.h = windowHeight
}

ControlsApp.prototype._setHandlers = function(){

    window.onresize = function(){
        this._setDimensions()
    }.bind(this)
    
}

ControlsApp.prototype._setListeners = function(){

    document.onkeyup = function(e){
        switch(e.keyCode) {
            case 39:
                this._moveRight()
                break;
            case 37:
                this._moveLeft()
                break;
        }
    }.bind(this)
}

ControlsApp.prototype._moveLeft = function(){
    this.posX -= 10
    this._update()
}

ControlsApp.prototype._moveRight = function(){
    this.posX += 10
    this._update()
}

ControlsApp.prototype._update = function(){
    this.ctx.clearRect(0, 0, this.w, this.h)
    this.ctx.fillRect(this.posX, this.h / 2 - 50, 100, 100)
}