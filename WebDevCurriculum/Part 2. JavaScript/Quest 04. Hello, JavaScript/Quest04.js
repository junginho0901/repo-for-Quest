function draws(line)
{
for(var l=0;l<line;l++){
for(var i=line-1;i>l;i--)
{console.log(' ')}
for(var j=0;j<2*l+1;j++)
{
console.log('*')
}
console.log('\n');
}
}
var star=prompt();
draws(star);

