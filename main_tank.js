let des = document.getElementById('desenha').getContext('2d')
let tanque = new Tanque (100,200,70,70,"../Assets/tanque_01.png")
let bg = new Objeto (0,0,1200,450,"../Assets/normal.png")
let text1 = new Text()
let text2 = new Text()
let text3 = new Text()
let text4 = new Text()
let text5 = new Text()
let grupoTiros = [] 
let tiros = {
    des(){
        grupoTiros.forEach((tiro)=>{
            tiro.des_tiro()
        })
    },
    atual(){
        grupoTiros.forEach((tiro)=>{
            tiro.mov()
            if(tiro.y <= -10){
                grupoTiros.splice(tiro[0],1)
            }
        })
    }
}

let jogar = true

document.addEventListener('keypress', (e)=>{
    if (e.key === 'l') {
        grupoTiros.push(new Tiro(tanque.x - 2 + tanque.w / 1, tanque.y + 30, 10, 10, "../Assets/tiro.png"))
    }
})

let grupoInimigos = []
let inimigos = {
    time1: 0, 
    time2: 0,
    time3: 0,
    criaInimigos(){
        this.time1 += 1
        this.time2 += 1
        let pos_y = Math.floor(Math.random() * (320 - 140) + 140)
        let pos_y2 = Math.floor(Math.random() * (320 - 140) + 140)
        if(this.time1 >=100){
            this.time1 = 0
            grupoInimigos.push(new Inimigos(1100, pos_y,70,70, "../Assets/tanque_inimigo.png"))
        }
        if(this.time2 >=200){
            this.time2 = 0
            grupoInimigos.push(new Inimigos(1250,pos_y2,70,70, "../Assets/tanque_inimigo.png"))
        }
    },
    des(){
        grupoInimigos.forEach((inimig)=>{
            inimig.desenha_img()
            console.log(inimig)
        })
    },
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoInimigos.forEach((inimigo)=>{
                if(tiro.colid(inimigo)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoInimigos.splice(grupoInimigos.indexOf(inimigo), 1)
                    tanque.pts +=1
                }
            })
        })
    },
    atual(){
        this.criaInimigos()
        this.destroiInimigo()
        grupoInimigos.forEach((inimigo)=>{
            inimigo.mov()
            if(inimigo.x <= 0){ ((tanque.vida -=1) && (
                grupoInimigos.splice(grupoInimigos.indexOf(inimigo),1)))
            }
        })
    }
}


document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if(e.key === 'a' || e.key === 'ArrowLeft'){
        tanque.dirX -= 2
    }
    else if(e.key === 'd' || e.key === 'ArrowRight'){
        tanque.dirX += 2
    }
    else if(e.key === 'w' || e.key === 'ArrowUp'){
        tanque.dirY -= 2
    }
    else if(e.key === 's' || e.key === 'ArrowDown'){
        tanque.dirY += 2
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
    }
}

function colisao(){
    grupoInimigos.forEach((inimigo)=>{
        if(tanque.colid(inimigo)){
            grupoInimigos.splice(grupoInimigos.indexOf(inimigo), 1)
            tanque.vida -= 1
        }
    })
}


function desenha(){
    if(jogar){
        bg.desenha_img()
        tiros.des()
        tanque.desenha_img()
        inimigos.des()
        text1.desenhaTexto('Pontos:', 1000, 20, 'yellow', '20px times')
        text2.desenhaTexto(tanque.pts, 1065, 20, 'yellow', '20px times')
        text3.desenhaTexto('Vida:', 800,20, 'yellow', '20px times')
        text4.desenhaTexto(tanque.vida,850,20, ' yellow', '20px times')
    }else{
        bg.desenha_img()
        text5.desenhaTexto('Game Over', 500, 230, 'black', '40px times')
    }
}

function atualiza(){
    if(jogar){
    tanque.atualiza_tanque()
    tiros.atual()
    inimigos.atual()
    colisao()
    }
    gameOver()
}

function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
}

setInterval(main,10)