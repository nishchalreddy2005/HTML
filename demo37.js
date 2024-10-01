const n = parseInt(prompt("Enter Input",0))
let digit=0
let sum=0
let temp=temp
while(n!=0)
{
    digit = n%10
    sum = sum+Math.pow(digit,3)
    n=parseInt(n/10)
}
if(sum==temp)
{
    document.writeln('${temp} is an armstrom number')
}
else
{
    document.writeln('${temp} is not an armstrom number')
}