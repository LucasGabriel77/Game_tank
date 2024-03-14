let des = document.getElementById('desenha').getContext('2d')

let tanque = new Tanque (220, 260,45,100,'black')

let grupoTiros = []
let tiros = 0


function tiro(){
    des()
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })
    
    atualiza()
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -10){
                grupoTiros.splice(tiro[0],1)
            }
        })
}


document.addEventListener('keydown', (e)=>{
    console.log(e.key)
    if(e.key === 'a'){
        tanque.dirX -= 10
    }
    else if(e.key === 'd'){
        tanque.dirX += 10
    }
    else if(e.key === 'w'){
        tanque.dirY -= 10
    }
    else if(e.key === 's'){
        tanque.dirY += 10
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
    tanque.desenha_tanque()
}

function atualiza(){
    tanque.atualiza_tanque()
}

function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
}


setInterval(main,10)