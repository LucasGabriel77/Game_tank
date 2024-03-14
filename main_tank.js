let des = document.getElementById('desenha').getContext('2d')
let tanque = new Tanque (100,200,70,70,"./Assets/tanque_01.png")
let tanque_inimigo = new Tanque (1120,250,60,60,"./Assets/tanque_inimigo.png")
let tanque_inimigo2 = new Tanque (1050,200,60,60,"./Assets/tanque_inimigo.png")
let tanque_inimigo3 = new Tanque (1150,175,60,60,"./Assets/tanque_inimigo.png")
let grupoTiros = []
let tiros = 0



document.addEventListener('keydown', (e)=>{
    console.log(e.key)
    if(e.key === 'a'){
        tanque.dirX -= 3
    }
    else if(e.key === 'd'){
        tanque.dirX += 3
    }
    else if(e.key === 'w'){
        tanque.dirY -= 3
    }
    else if(e.key === 's'){
        tanque.dirY += 3
    }
})

document.addEventListener('keyup', (e)=> {
    if(e.key === 'a'){
        tanque.dirX = 0
    }
    else if(e.key === 'd'){
        tanque.dirX = 0
    }
    else if(e.key === 'w'){
        tanque.dirY = 0
    }
    else if(e.key === 's'){
        tanque.dirY = 0
    }
})

function pontos(){
    if (carro.point(carro02)){
        carro.pontuacao += 10
    }
}

function desenha(){
    tanque.desenha_img()
    tanque_inimigo.desenha_img()
    tanque_inimigo2.desenha_img()
    tanque_inimigo3.desenha_img()

}

function atualiza(){
    tanque.atualiza_tanque()
    tanque_inimigo.mov_inimigo()
    tanque_inimigo2.mov_inimigo()
    tanque_inimigo3.mov_inimigo()
}

function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
}


setInterval(main,10)