const alpaa={
   a : 10
   ,b : 5
}
function chan(al)
{
let temp;
temp=al.a;
al.a=al.b;
al.b=temp;
}
chan(alpaa);
console.log(alpaa.a);
console.log(alpaa.b);



let a=10;
let b=4;
function change(x,y){
let temp=0;
temp=x;
x=y;
y=temp;
return x,y;
}
change(a,b)
console.log(a);
console.log(b);