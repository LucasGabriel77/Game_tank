let des = document.getElementById('desenha').getContext('2d')

let tank = new Tank (220, 550,45,100,'white')

let grupoTiros = [] 
let tiros = 0
let grupoCarro = []
let carros = 0

function tiros(){
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


 function carros(){
    time1 = 0 
    time2 = 0
    time3 = 0

    criaCarros()
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=60){
            this.time1 = 0
            grupoCarro.push(new Disco(pos_x,-200,50,50,'blue'))
            console.log(grupoCarro)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoCarro.push(new Disco(pos_x2,-300,50,50,'blue'))
            console.log(grupoCarro)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoCarro.push(new Disco(pos_x3,-400,50,50,'blue'))
            console.log(grupoCarro)
        }
    
    des()
        grupoCarro.forEach((car)=>{
            car.des_obj()
        })

    destroiDisco()
        grupoTiros.forEach((tiro)=>{
            grupoCarro.forEach((car)=>{
                if(tiro.colid(car)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoCarro.splice(grupoCarro.indexOf(car), 1)
                    nav1.pontuacao +=1
                }
            })
        })
    
    atual()
        this.criaDisco()
        this.destroiDisco()
        grupoCarro.forEach((car)=>{
            disc.mov()
            if(disc.y >= 710){
                grupoCarro.splice(grupoCarro.indexOf(car),1)
            }
        })
    }

document.addEventListener('keydown', (e)=>{
    console.log(e.key)
    if(e.key === 'a'){
        tank.dirX -= 10
    }
    else if(e.key === 'd'){
        tank.dirX += 10
    }
    else if(e.key === 'w'){
        tank.dirY -= 10
    }
    else if(e.key === 's'){
        tank.dirY += 10
    }
})

document.addEventListener('keyup', (e)=> {
    if(e.key === 'a'){
        carro.dirX = 0
    }
    else if(e.key === 'd'){
        carro.dirX = 0
    }
    else if(e.key === 'w'){
        carro.dirY = 0
    }
    else if(e.key === 's'){
        carro.dirY = 0
    }
})


function desenha(){
    tank.desenhaTank()
}

function atualiza(){

}


setInterval(main,10)