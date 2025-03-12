/*
class Produto{
    constructor(nome, codigo, preco, quantidade){
        this.cod = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quant = quantidade;
    }

    vender (quantidade){
        this.quant -= quantidade;
        console.log('Venda realizada. Quantidade atual do produto: ', this.quant);
    }

    lancarchegada (quantidade){
        this.quant += quantidade
        console.log('Recebimento de item contabilizado. Estoque atual: ', this.quant);
    }

    alterarpreco (preco){
        this.preco = preco
        console.log('Preço alterado para R$', this.preco);
    }
    verificarqtde (){
        console.log('A quantidade em estoque deste item é: ', this.quant);
    }
}

const aparelhotelemovel = new Produto('iPhone 15 Pro Max', 1, 15000, 500)
aparelhotelemovel.vender(480);
aparelhotelemovel.lancarchegada(500)
aparelhotelemovel.verificarqtde()
aparelhotelemovel.alterarpreco(14500)



    escalibur (ataque){
        this.atk = ataque
        console.log(`Seu guerreiro recebeu um buff no ataque e agora o ataque dele da ${this.atk} de dano`)
    }

    bisento (ataque){
        this.atk = ataque
        console.log(`Seu guerreiro recebeu um buff no ataque e agora o ataque dele da ${this.atk} de dano`)
    }
*/


const maxhp = 250
const maxdef = 500
const maxatk = 250

class Guerreiro{
    constructor(player, hp, defesa, ataque){
        this.pl = player
        this.hp = hp
        this.def = defesa
        this.atk = ataque
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
        if(this.atk < player.def){
            console.log(`Seu ataque não causou dano pois a defesa do jogador ${player.pl} é muito alta.`)
            player.def = player.def - this.atk
        }
        else{
            player.hp = player.hp - (this.atk - player.def)
            console.log(`O ataque causou ${this.atk - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
            player.def = player.def - 5
        }
        this.morte(player)
        stats()
    }

    info(player){
        console.log(`${this.pl}\nHP: ${this.hp}\nAtaque: ${this.atk}\nDefesa: ${this.def}`)
        stats()
    }

    small(player){
        player.hp = player.hp + 25
        if(player.hp > maxhp){
            player.hp = maxhp
        }
        console.log(`Jogador ${this.pl} usou uma poção de cura pequena e agora está com ${player.hp} de vida`)
        stats()
    }

    medium(player){
        player.hp = player.hp + 50
        if(player.hp > maxhp){
            player.hp = maxhp
        }
        console.log(`Jogador ${this.pl} usou uma poção de cura média e agora está com ${player.hp} de vida`)
        stats()
    }

    big(player){
        player.hp = player.hp + 75
        if(player.hp > maxhp){
            player.hp = maxhp
        }
        console.log(`Jogador ${this.pl} usou uma poção de cura grande e agora está com ${player.hp} de vida`)
        stats()
    }

    escalibur(player){
        this.atk += 60
        if(player.atk > maxatk){
            player.atk = maxatk
        }
        console.log(`O Jogador ${this.pl} pegou a ESCALIBUR e aumentou seu ataque em 100 de dano.`)
        stats()
    }

    mjolnir(player){
        this.atk += 90
        if(player.atk > maxatk){
            player.atk = maxatk
        }
        console.log(`O Jogador ${this.pl} pegou O MJOLNIR e aumentou seu ataque em 200.`)
        stats()
    }

    ornamental(player){
        this.def += 50
        if(player.def > maxdef){
            player.def = maxdef
        }
        console.log(`O Jogador ${this.pl} pegou o escudo ornamental e aumentou sua defesa em 100.`)
        stats()
    }

    pesado(player){
        this.def += 80
        if(player.def > maxdef){
            player.def = maxdef
        }
        console.log(`O Jogador ${this.pl} pegou o escudo pesado e aumentou sua defesa em 100.`)
        stats()
    }

    critico(player){
        var chance = Math.floor(Math.random() * 20) + 1
        console.log(`chance ${chance}`)
        if(chance>=15){
                player.hp = player.hp - ((this.atk * 2) - player.def)
                console.log(`O ataque causou ${(this.atk * 2) - player.def} de dano e deixou seu oponente com ${player.hp} de vida.`)
                player.def = player.def - 5
        }
        else{
            console.log(`Você errou o ataque crítico.`)
        }
        this.morte(player)
        stats()
    }

    morte(player){
        if(player.hp <= 0){
            console.log(`O jogador ${player.pl} Morreu.`)
            alert(`O jogador ${player.pl} Morreu.`)
        }

        }
    }




const defensor = new Guerreiro('def', 120, 80, 35)
const atacante = new Guerreiro('atk', 70, 50, 85)






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
hpp1.textContent = `HP: ${defensor.hp}/${maxhp}`
var atkp1 = document.getElementById('atkp1')
atkp1.textContent = `ATK: ${defensor.atk}/${defensor.atk}`
var defp1 = document.getElementById('defp1')
defp1.textContent = `DEF: ${defensor.def}/${defensor.def}`
var nomep2 = document.getElementById('nomep2')
nomep2.textContent = `${atacante.pl}`
var hpp2 = document.getElementById('hpp2')
hpp2.textContent = `HP: ${atacante.hp}/${maxhp}`
var atkp2 = document.getElementById('atkp2')
atkp2.textContent = `ATK: ${atacante.atk}/${atacante.atk}`
var defp2 = document.getElementById('defp2')
defp2.textContent = `DEF: ${atacante.def}/${atacante.def}`
}


stats()
