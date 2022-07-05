// class college extends Date{
//     constructor(year) {
//         super(year)
//     }
// }
// let shule = new college("June 13,2022 18:25:00")
// document.writeln("  Sahizi ni")
// document.writeln(shule.getUTCHours())

class cow{
    constructor() {
        this.breed = "frazier "
        this.gender = "female"
    }
}
class animal extends cow{
    constructor(color,prize) {
        super();
        this.color = color
        this.prize = prize
    }
}

let jina = new animal("black and white",50000 )
document.writeln(jina.breed + " " + jina.color + " " + jina.prize + " " + jina.gender)