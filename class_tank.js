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

    desenha_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    colid(objeto) {
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }


}
}


class Tanque extends Obj{
    dirX = 0
    dirY = 0
    pontuacao = 0
    vida = 10
    frame = 1
    tempo = 0

    atualiza_tanque(){
        this.x += this.dirX
        this.y += this.dirY
        
        if(this.x <-15){
            this.x = -15
        }
        else if(this.x > 200){
            this.x = 200
        }
        if(this.y <= 110){
            this.y = 110
        }
        else if(this.y >=290){
            this.y = 290
        }
    } 

    pontos(objeto){
        if(this.y > objeto.y){
            return true
        }
    }
    recomeca(){

    }
}
class Tanque2 extends Obj {

mov_inimigo() {
    this.x += 2;
    if (this.x >= 0) {
    this.x = 1300;
        }
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


