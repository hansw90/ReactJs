var obj = {name : 'han'}

function bindTest(){
  console.log(this.name)
}
bindTest();
// undifined

var bindTest2 = bindTest.bind(obj);

bindTest2();
// han
// undefined

