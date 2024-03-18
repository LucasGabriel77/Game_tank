let des = document.getElementById('desenha').getContext('2d')
let tanque = new Tanque (100,200,70,70,"../Assets/tanque_01.png")
// let tanque_inimigo = new Tanque2 (1320,250,60,60,"../Assets/tanque_inimigo.png")
// let tanque_inimigo2 = new Tanque2 (1050,200,60,60,"../Assets/tanque_inimigo.png")
// let tanque_inimigo3 = new Tanque2 (1000,300,60,60,"../Assets/tanque_inimigo.png")
// let tanque_inimigo4 = new Tanque2 (900,150,60,60,"../Assets/tanque_inimigo.png")
// let tanque_inimigo5 = new Tanque2 (700,220,60,60,"../Assets/tanque_inimigo.png")
// let tanque_inimigo6 = new Tanque2 (750,175,60,60,"../Assets/tanque_inimigo.png")

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
            if(tiro.x += 10){
                grupoTiros.splice(tiro[0],1)
            }
        })
    }
}

let grupoInimigos = []
let inimigos = {
    time1: 0, 
    time2: 0,
    time3: 0,

    criaInimigos(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        let pos_y = Math.floor(Math.random() * (320 - 140) + 140)
        let pos_y2 = Math.floor(Math.random() * (320 - 140) + 140)
        let pos_y3 = Math.floor(Math.random() * (320 - 140) + 140)
        if(this.time1 >=60){
            this.time1 = 0
            grupoInimigos.push(new Inimigos(1100, pos_y,40,40,"../Assets/tanque_inimigo.png"))
            console.log(grupoInimigos)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoInimigos.push(new Inimigos(1150,pos_y2,40,40,"../Assets/tanque_inimigo.png"))
            console.log(grupoInimigos)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoInimigos.push(new Inimigos(1000,pos_y3,40,40,"../Assets/tanque_inimigo.png"))
            console.log(grupoInimigos)
        }
    },
    des(){
        grupoInimigos.forEach((disc)=>{
            disc.desenhaObjeto()
        })
    },
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoInimigos.forEach((disc)=>{
                if(tiro.colid(disc)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoInimigos.splice(grupoInimigos.indexOf(disc), 1)
                    nav1.pts +=1
                }
            })
        })
    },
    atual(){
        this.criaInimigos()
        this.destroiInimigo()
        grupoInimigos.forEach((disc)=>{
            disc.mov()
            if(disc.x <= 10){
                grupoInimigos.splice(grupoInimigos.indexOf(disc),1)
            }
        })
    }
}



document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
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
    // console.log(e.key)
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
document.addEventListener('keypress', (e)=>{
    if (e.key === 'l') {
        grupoTiros.push(new Tiro(tanque.x - 4 + tanque.w / 2, tanque.y, 8, 16, 'red'))
        console.log(grupoTiros)
    }

})

function colisao(){
    grupoInimigos.forEach((disc)=>{
        if(tanque.colid(disc)){
            grupoInimigos.splice(grupoInimigos.indexOf(disc), 1)
            tanque.vida -=1
        }
    })
}
function pontos(){
}

function desenha(){
    // tiros.desenhaObjeto()
    tanque.desenha_img()
    tiros.des()
    inimigos.des()
    // tanque_inimigo.desenha_img()
    // tanque_inimigo2.desenha_img()
    // tanque_inimigo3.desenha_img()
    // tanque_inimigo4.desenha_img()
    // tanque_inimigo5.desenha_img()
    // tanque_inimigo6.desenha_img()
    

}

function atualiza(){
    tanque.atualiza_tanque()
    tiros.atual()
    inimigos.atual()
    // tanque_inimigo.mov_inimigo()
    // tanque_inimigo2.mov_inimigo()
    // tanque_inimigo3.mov_inimigo()
    // tanque_inimigo4.mov_inimigo()
    // tanque_inimigo5.mov_inimigo()
    // tanque_inimigo6.mov_inimigo()
    // colid()
    colisao()
    // tiros.atual()
}

// function colid(){
//     if(tanque.colid(tanque_inimigo)){
//         tanque.vida -= 1
//         tanque_inimigo.recomeca()
//     }
//     if(tanque.colid(tanque_inimigo2)){
//         tanque.vida -= 1
//         tanque_inimigo2.recomeca()
//     }
//     if(tanque.colid(tanque_inimigo3)){
//         tanque.vida -= 1
//         tanque_inimigo3.recomeca()
//     }
//     if(tanque.colid(tanque_inimigo34)){
//         tanque.vida -= 1
//         tanque_inimigo4.recomeca()
//     }
//     if(tanque.colid(tanque_inimigo5)){
//         tanque.vida -= 1
//         tanque_inimigo5.recomeca()
//     }
//     if(tanque.colid(tanque_inimigo6)){
//         tanque.vida -= 1
//         tanque_inimigo6.recomeca()
//     }
// }


function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
}


setInterval(main,10)