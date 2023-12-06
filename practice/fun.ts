function getTime():number{
    return new Date().getTime()
}
console.log(getTime())

function printHello():void{
    console.log('Hello!');
  }
 
  function add(a:number,b:number,c?:number):number{

    return(a + b+ (c||0))
  }

  console.log(add(2,3,6));

  function pow (val:number,ex:number=10){

    return (val**ex)
  }
  console.log(pow(2,3))