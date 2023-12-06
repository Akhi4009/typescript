// In TypeScript, enums are a way to create a named set of numeric or string values. Enums are defined using the enum keyword


enum Days {
    Monday=1,
    tuesday,
    wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today:Days=Days.wednesday
console.log(today)

enum Colors {
    Red = "Red",
    Green = "Gren",
    Blue = "Blue"
}

let color:Colors= Colors.Blue
console.log(color);