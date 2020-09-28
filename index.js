class ticTacNano{
    constructor(xPlayer, oPlayer, x = "❌", o = "⭕", b = "ㅤ"){
        this.board = {
            A1: '',
            A2: '',
            A3: '',
            B1: '',
            B2: '',
            B3: '',
            C1: '',
            C2: '',
            C3: ''
        };

        this.emojis = {
            x: x,
            o: o,
            b: b
        };

        this.turn = function(pos = "A1" || "A2" || "A3" || "B1" || "B2" || "B3" || "C1" || "C2" || "C3",player = "x" || "o"){
            this.board[pos] = player
        };

        this.didWin = function(){
            if(this.board.A1 === this.board.A2 && this.board.A2 === this.board.A3 && this.board.A1 === 'x'){
                return `${xPlayer} Wins`
            }
            else if(this.board.A1 === this.board.A2 && this.board.A2 === this.board.A3 && this.board.A1 === 'o'){
                return `${oPlayer} Wins`
            }
            else if(this.board.B1 === this.board.B2 && this.board.B2 === this.board.B3 && this.board.B1 === 'x'){
                return `${xPlayer} Wins`
            }
            else if(this.board.B1 === this.board.B2 && this.board.B2 === this.board.B3 && this.board.B1 === 'o'){
                return `${oPlayer} Wins`
            }
            else if(this.board.C1 === this.board.C2 && this.board.C2 === this.board.C3 && this.board.C1 === 'x'){
                return `${xPlayer} Wins`
            }
            else if(this.board.C1 === this.board.C2 && this.board.C2 === this.board.C3 && this.board.C1 === 'o'){
                return `${oPlayer} Wins`
            }
        
            else if(this.board.A1 === this.board.B1 && this.board.B1 === this.board.C1 && this.board.A1 === 'x'){
                return `${oPlayer} Wins`
            }
            else if(this.board.A1 === this.board.B1 && this.board.B1 === this.board.C1 && this.board.A1 === 'o'){
                return `${oPlayer} Wins`
            }
            else if(this.board.A2 === this.board.B2 && this.board.B2 === this.board.C2 && this.board.A2 === 'x'){
                return `${oPlayer} Wins`
            }
            else if(this.board.A2 === this.board.B2 && this.board.B2 === this.board.C2 && this.board.A2 === 'o'){
                return `${oPlayer} Wins`
            }
        
            else if(this.board.A3 === this.board.B3 && this.board.B3 === this.board.C3 && this.board.A3 === 'x'){
                return `${oPlayer} Wins`
            }
            else if(this.board.A3 === this.board.B3 && this.board.B3 === this.board.C3 && this.board.A3 === 'o'){
                return `${oPlayer} Wins`
            }
        
            else if(this.board.A1 === this.board.B2 && this.board.B2 === this.board.C3 && this.board.A1 === 'x'){
                return `${xPlayer} Wins`
            }
            else if(this.board.A1 === this.board.B2 && this.board.B2 === this.board.C3 && this.board.A1 === 'o'){
                return `${oPlayer} Wins`
            }
            else if(this.board.A3 === this.board.B2 && this.board.B2 === this.board.C1 && this.board.A3 === 'x'){
                return `${xPlayer} Wins`
            }
            else if(this.board.A3 === this.board.B2 && this.board.B2 === this.board.C1 && this.board.A3 === 'o'){
                return `${oPlayer} Wins`
            }
        
            else{
                return "No winner yet"
            }
        }

        this.v = function(pos){
            if(pos === ''){
                return this.emojis.b
            }else if(pos === 'x'){
                return this.emojis.x
            }else if(pos === 'o'){
                return this.emojis.o
            }
        }

        this.visualize = function(){
            let display = `${this.v(this.board.A1)}|${this.v(this.board.A2)}|${this.v(this.board.A3)}\n${this.v(this.board.B1)}|${this.v(this.board.B2)}|${this.v(this.board.B3)}\n${this.v(this.board.C1)}|${this.v(this.board.C2)}|${this.v(this.board.C3)}`
        
            return display
        }
    }
}

module.exports = ticTacNano