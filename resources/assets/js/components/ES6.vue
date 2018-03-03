<template id="ES6">
  <div>
    <h2 id="es6">This content is about ES6:</h2>
    <h3 id="let">Let:</h3>
    <hr>
    <p>let declares a variable in the scope that it's declared in, unlike var that goes outside a block.</p>
<pre><h2 class="is-marginless">ES5</h2><code>
var name = "Andrew";
if(true){
  var name = "John";
  console.log(name); //Outputs John
}
console.log(name); //Outputs John</code>
</pre>          
<pre><h2 class="is-marginless">ES6</h2><code>
let name = "Andrew";
if(true){
  let name = "John";
  console.log(name); //Outputs John
}
console.log(name); //Outputs Andrew, despite declaring name = "John" inside the if</code>
</pre>
    <h3 id="arrowFunction">Arrow functions:</h3>
    <hr>
    <p>A different way to declare a function that solves some scoping issues.</p>          
<pre><h2 class="is-marginless">ES5</h2><code>
function func(x){
  return x*2;
}</code>
</pre>           
<pre><h2 class="is-marginless">ES6</h2><code>
let func = (x) => x*2; //returns x*2  

//OR
  
let func = () => ({name: 'Andrew', age: 20}); //returning an object, there's also no parameters

//OR
  
let func = (x, y) => {
  /*body*/
};</code>
</pre>
    <h3 id="classes">Classes:</h3>
    <p>very similar to Java, very clean.</p>
<pre><h2 class="is-marginless">ES6</h2><code>
class Person{

  construct(name, age){
    this.name = name;
    this.age = age;
  }
  
  getAge(){
    return this.age;
  }
  
  saySomething(){
    console.log("hello I am ");
  }
  
}

class Programmer extends Person{
  
  construct(name, age, language){
    super(name, age);
    this.language = language;
  }
  
  saySomething(){
    super.saySomething(); //calls parent method
    console.log(this.name+" and my language is "+this.language);
  }
  
  static shock(){
    console.log("good pun");
  }
  
}

let hey = new Person('hey', 20);
hey.saySomething(); //hello I am 

Programmer.shock(); //good pun
let andrew = new Programer('Andrew', 20, 'Java');
andrew.saySomething(); //hello I am Andrew and my language is Java

//NOTE: if I didn't call super.saySomething in the child, it would override the
//parent method and would have just said console.log(this.name+" and my language is "+this.language);</code>
</pre>
  </div>
</template>