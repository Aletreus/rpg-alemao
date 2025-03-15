const maxbig = 2
const maxmed = 3
const maxsmall = 5
const maxhp = 250
const maxdef = 500
const maxatk = 250
const maxataque = 1
const maxescudo = 2
const rodada = 3
const maxpocao = 2
c = 0
let contador = 0



class Guerreiro{
    constructor(player, hp, defesa, ataque, pequena, mediana, grande, maximoataque, maximoescudo, pocoes){
        this.pl = player
        this.hp = hp
        this.def = defesa
        this.atk = ataque
        this.peq = pequena
        this.medi = mediana
        this.grande = grande
        this.maxatq = maximoataque
        this.maxesc = maximoescudo
        this.pocao = pocoes

    }

    upgradeatk(ataque){
        this.atk += ataque
        console.log(`O Jogador ${this.pl} conseguiu um buff de ataque e aumentou seu ataque em ${ataque}.`)
        stats()
    }

    upgradedef(defesa){
        this.def += defesa
        console.log(`O Jogador ${this.pl} conseguiu um buff de defesa e aumentou sua defesa em ${defesa}.`)
        stats()
    }


    slash(player){
        if(this.atk - player.def < 0){
            player.def = player.def - this.atk
            console.log(`O ataque causou 0 de dano mas causou ${this.atk} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
        }
        
        else{
            player.hp = player.hp - (this.atk - player.def)
            console.log(`O ataque quebrou o escudo do oponente e causou ${this.atk - player.def} de dano, deixando seu oponente com ${player.hp} de vida.`)
            player.def = 0
        }
    
        this.morte(player)
        stats()
    }

    info(player){
        console.log(`${this.pl}\nHP: ${this.hp}\nAtaque: ${this.atk}\nDefesa: ${this.def}`)
        stats()
    }

    small(player){
        if(player.peq >= maxsmall){
            console.log(`Você já utilizou o máximo de poções de cura pequena que tinha`)
        }
        else{
            player.peq += 1
            player.hp = player.hp + 25
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura pequena e agora está com ${player.hp} de vida.\nVocê ainda tem ${maxsmall - player.peq} poções de cura pequena para utilizar.`)
            stats()
        }
    }

    medium(player){
        if(player.medi >= maxmed){
            console.log(`Você já utilizou o máximo de poções de cura pequena que tinha`)
        }
        else{
            player.medi += 1
            player.hp = player.hp + 50
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura média e agora está com ${player.hp} de vida.\nVocê ainda tem ${maxmed - player.medi} poções de cura média para utilizar.`)
            stats()
        }
    }

    big(player){
        if(player.grande >= maxbig){
            console.log(`Você já utilizou o máximo de poções de cura grande que tinha`)
        }
        else{
            player.grande += 1
            player.hp = player.hp + 75
            if(player.hp > maxhp){
                player.hp = maxhp
            }
            console.log(`Jogador ${this.pl} usou uma poção de cura grande e agora está com ${player.hp} de vida.\nVocÊ ainda tem ${maxbig - player.grande} poções de cura grande para utilizar.`)
            stats()
    }
    }

    escalibur(player){
        if(player.maxatq >= maxataque){
            console.log(`Você já pegou o número máximo de buffs de ataque`)
        }
        else{
            player.maxatq += 1
            this.atk += 50
            if(player.atk > maxatk){
                player.atk = maxatk
            }
            console.log(`O Jogador ${this.pl} pegou a ESCALIBUR e aumentou seu ataque em 50 de dano.`)
            stats()
    }
    }

    mjolnir(player){
        if(player.maxatq >= maxataque){
            console.log(`Você já pegou o número máximo de buffs de ataque`)
        }
        else{
            player.maxatq += 1
            this.atk += 75
            if(player.atk > maxatk){
                player.atk = maxatk
            }
            console.log(`O Jogador ${this.pl} pegou o MJOLNIR e aumentou seu ataque em 75 de dano.`)
            stats()
    }
    }

    ornamental(player){
        if(player.maxesc >= maxescudo){
            console.log(`Você já pegou o número máximo de buffs de escudo`)
        }
        else{
            player.maxesc += 1
            this.def += 40
            this.atk += 25
            if(player.def > maxdef){
                player.def = maxdef
            }
            if(player.atk > maxatk){
                player.atk = maxatk
            }
            console.log(`O Jogador ${this.pl} pegou o escudo ornamental e aumentou sua defesa em 40 e seu ataque em 25.`)
            stats()
    }
    }

    pesado(player){
        if(player.maxesc >= maxescudo){
            console.log(`Você já pegou o número máximo de buffs de escudo`)
        }
        else{
            player.maxesc += 1
            this.def += 80
            if(player.def > maxdef){
                player.def = maxdef
            }
            console.log(`O Jogador ${this.pl} pegou o escudo pesado e aumentou sua defesa em 80.`)
            stats()
    }
    }
    critico(player){
        var chance = Math.floor(Math.random() * 20) + 1
        console.log(`chance ${chance}`)
        
        if(chance == 16){
            if((this.atk * 1.2) - player.def < 0){
                player.def = player.def - this.atk * 1.2
                console.log(`O ataque causou 0 de dano mas causou ${(this.atk * 1.2)} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
            }
            
            else{
                player.hp = player.hp - ((this.atk * 1.2) - player.def)
                console.log(`O ataque quebrou o escudo do oponente e causou ${(this.atk * 1.2) - (player.def)} de dano, deixando seu oponente com ${player.hp} de vida.`)
                player.def = 0
        }
    }
        if(chance == 17){
            if((this.atk * 1.4) - player.def < 0){
                player.def = player.def - this.atk * 1.4
                console.log(`O ataque causou 0 de dano mas causou ${(this.atk * 1.4)} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
            }
            
            else{
                player.hp = player.hp - ((this.atk * 1.4) - player.def)
                console.log(`O ataque quebrou o escudo do oponente e causou ${(this.atk * 1.4) - (player.def)} de dano, deixando seu oponente com ${player.hp} de vida.`)
                player.def = 0
        }
    }
        if(chance == 18){
            if((this.atk * 1.6) - player.def < 0){
                player.def = player.def - this.atk * 1.6
                console.log(`O ataque causou 0 de dano mas causou ${(this.atk * 1.6)} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
            }
            
            else{
                player.hp = player.hp - ((this.atk * 1.6) - player.def)
                console.log(`O ataque quebrou o escudo do oponente e causou ${(this.atk * 1.6) - (player.def)} de dano, deixando seu oponente com ${player.hp} de vida.`)
                player.def = 0
        }
    }
        if(chance == 19){
            if((this.atk * 1.8) - player.def < 0){
                player.def = player.def - this.atk * 1.8
                console.log(`O ataque causou 0 de dano mas causou ${(this.atk * 1.8)} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
            }
            
            else{
                player.hp = player.hp - ((this.atk * 1.8) - player.def)
                console.log(`O ataque quebrou o escudo do oponente e causou ${(this.atk * 1.8) - (player.def)} de dano, deixando seu oponente com ${player.hp} de vida.`)
                player.def = 0
        }
    }
        if(chance == 20){
            if((this.atk * 2) - player.def < 0){
                player.def = player.def - this.atk * 2
                console.log(`O ataque causou 0 de dano mas causou ${(this.atk * 2)} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
            }
            
            else{
                player.hp = player.hp - ((this.atk * 2) - player.def)
                console.log(`O ataque quebrou o escudo do oponente e causou ${(this.atk * 2) - (player.def)} de dano, deixando seu oponente com ${player.hp} de vida.`)
                player.def = 0
        }
    }
        if(chance <= 15){
            console.log(`Você errou o ataque crítico.`)
        }
        
        this.morte(player)
        stats()
    }

    morte(player){
        if(player.hp <= 0){
            player.hp = 0
            player.def = 0
            player.atk = 0
            console.log(`O jogador ${player.pl} Morreu.`)
            alert(`O jogador ${player.pl} Morreu.`)
        }
    }
    veneno(player){
        if(this.pocao >= maxpocao){
            console.log(`Você não possuí mais poções.`)
        }
        else{
            const intervalo = setInterval(() => {
                player.hp = player.hp - 5;
                console.log(`${player.pl} tomou 5 de dano`);
                contador ++;
                if(contador == 15){
                    clearInterval(intervalo);
                }
            }, 100);
            stats()
            morte(player)
        }
        
        
    }
    
    
    
    
}




const defensor = new Guerreiro('Marcos', 120, 80, 35, 0, 0, 0, 0, 0, 0)
const atacante = new Guerreiro('Henrique Muito Foda', 70, 50, 85, 0, 0, 0, 0, 0, 0)






function morte(){
    if(defensor.hp <= 0){
        console.log(`O jogador ${defensor.pl} Morreu.`)
    }
    if(atacante.hp <= 0){
        console.log(`O jogador ${atacante.pl} Morreu.`)
    }
}




function stats(){
var nomep1 = document.getElementById('nomep1')
nomep1.textContent = `${defensor.pl}`
var hpp1 = document.getElementById('hpp1')
hpp1.textContent = `HP: ${Math.round(defensor.hp)}/${maxhp}`
var atkp1 = document.getElementById('atkp1')
atkp1.textContent = `ATK: ${defensor.atk}/${defensor.atk}`
var defp1 = document.getElementById('defp1')
defp1.textContent = `DEF: ${defensor.def}/${defensor.def}`
var nomep2 = document.getElementById('nomep2')
nomep2.textContent = `${atacante.pl}`
var hpp2 = document.getElementById('hpp2')
hpp2.textContent = `HP: ${Math.round(atacante.hp)}/${maxhp}`
var atkp2 = document.getElementById('atkp2')
atkp2.textContent = `ATK: ${atacante.atk}/${atacante.atk}`
var defp2 = document.getElementById('defp2')
defp2.textContent = `DEF: ${atacante.def}/${atacante.def}`
}


stats()





