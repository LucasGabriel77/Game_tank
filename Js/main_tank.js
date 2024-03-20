let des = document.getElementById('desenha').getContext('2d')
let tanque = new Tanque (100,200,70,70,"../Assets/tanque_01.png")
let tanque_inimigo = new Tanque2 (0,250,60,60,"../Assets/tanque_inimigo.png")
let tanque_inimigo2 = new Tanque2 (0,200,60,60,"../Assets/tanque_inimigo.png")
let tanque_inimigo3 = new Tanque2 (0,175,60,60,"../Assets/tanque_inimigo.png")


let text1 = new Text()
let text2 = new Text()
let text3 = new Text()
let text4 = new Text()
let text5 = new Text()


let grupoTiros = []
let tiros = 0
let jogar = true




document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if(e.key === 'a' || e.key === 'ArrowLeft'){
        tanque.dirX -= 3
    }
    else if(e.key === 'd' || e.key === 'ArrowRight'){
        tanque.dirX += 3
    }
    else if(e.key === 'w' || e.key === 'ArrowUp'){
        tanque.dirY -= 3
    }
    else if(e.key === 's' || e.key === 'ArrowDown'){
        tanque.dirY += 3
    }
})

document.addEventListener('keyup', (e)=> {
    // console.log(e.key)
    if(e.key === 'a' || e.key === 'ArrowLeft'){
        tanque.dirX = 0
    }
    else if(e.key === 'd' || e.key === 'ArrowRight'){
        tanque.dirX = 0
    }
    else if(e.key === 'w' || e.key === 'ArrowUp'){
        tanque.dirY = 0
    }
    else if(e.key === 's' || e.key === 'ArrowDown'){
        tanque.dirY = 0
    }
})

function gameOver(){
    if(tanque.vida <= 0){
        jogar = false
        motor.pause()
    }
}        

function pontos(){
    if(tanque.pontos(tanque_inimigo)){
        tanque_inimigo.pontuacao += 1
    }else if(tanque.pontos(tanque_inimigo2)){
        tanque_inimigo2.pontuacao += 1
    }else if(tanque.pontos(tanque_inimigo3)){
        tanque_inimigo3.pontuacao += 1
    }
}

function desenha(){
    // tiros.desenhaObjeto()
    
    if(jogar){
        tanque.desenha_img()
        tanque_inimigo.desenha_img()
        tanque_inimigo2.desenha_img()
        tanque_inimigo3.desenha_img()
        text1.desenhaTexto('Pontos:', 1000, 20, 'yellow', '20px times')
        text2.desenhaTexto(tanque.pontuacao, 1065, 20, 'yellow', '20px times')
        text3.desenhaTexto('Vida:', 800,20, 'yellow', '20px times')
        text4.desenhaTexto(tanque.vida,850,20, ' yellow', '20px times')
    }else{
        text5.desenhaTexto('Game Over', 500, 230, 'black', '40px times')

    }
}


function atualiza(){
    if(jogar){
        tanque.atualiza_tanque()
        tanque_inimigo.mov_inimigo()
        tanque_inimigo2.mov_inimigo()
        tanque_inimigo3.mov_inimigo()
        pontos()
        colid()

    }
    gameOver()

}

function colid(){
    if(tanque.colid(tanque_inimigo)){
        tanque.vida -= 1
        tanque_inimigo.recomeca()
    }
    if(tanque.colid(tanque_inimigo2)){
        tanque.vida -= 1
        tanque_inimigo2.recomeca()
    }
    if(tanque.colid(tanque_inimigo3)){
        tanque.vida -= 1
        tanque_inimigo3.recomeca()
    }
}


function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
    
}


setInterval(main,10)