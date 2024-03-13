class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenhaObjeto(){
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)

        
    }

    desenhaImagem(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x , this.y, this.w, this.h)
    }
}

class Tank extends Obj{
    dirX = 0
    dirY = 0
    pontuacao = 0
    vida = 10
    frame = 1
    tempo = 0

    desenhaTank(){
       

    // roda dianteira direita
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x+40,this.y-60,10,10)
    des.closePath()
    des.stroke()
    des.fill()
        
     // roda dianteira esquerda
     des.beginPath()
     des.lineWidth = '5'
     des.strokeStyle="black"
     des.fillStyle = "black"
     des.rect(this.x,this.y-60,10,10)
     des.closePath()
     des.stroke()
     des.fill()
        
    // roda traseira direita
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x+40,this.y-20,10,10)
    des.closePath()
    des.stroke()
    des.fill()
        
    // roda traseira esquerda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x,this.y-20,10,10)
    des.closePath()
    des.stroke()
    des.fill()
        
    // trapezio do carro
    des.beginPath()
    des.moveTo(this.x,this.y)  
    des.lineTo(this.x+50,this.y)
    des.lineTo(this.x+40,this.y-50)
    des.lineTo(this.x+10,this.y-50)
    des.closePath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.stroke()
    des.fill()
        
    // desenhando corpo frente em um retangulo
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.rect(this.x+10,this.y-70,30,20) 
    des.closePath()
    des.stroke()
    des.fill()
        
    // desenhando asa frente em um retangulo sobrescrevendo a borda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.rect(this.x,this.y-80,50,10)
    des.closePath()
    des.stroke()
    des.fill()
            
    }
    atualizaTank(){
        this.x += this.dirX
        this.y += this.dirY
        
        if(this.x <30){
            this.x = 30
        }
        else if(thix.x >= 420){
            this.x = 420
        }
        if(this.y <=70){
            this.y = 70
        }
        else if(this.y >=590){
            this.y = 590
        }
    } 

    pontuacao(objeto){

    }
    recomeca(){

    }
}
   
class Tiro extends Obj{
    desenhaTiro(){
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h)
    }
    movimentacao(){
        this.y -= 10
    }
}

