// JS program to do modular division
function gcd(a, b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
  
// Function to find modulo inverse of b. It returns
// -1 when inverse doesn't
// modInverse works for prime m
function modInverse(b,m)
{
    g = gcd(b, m) ;
    if (g != 1)
        return -1;
    else
    {
        //If b and m are relatively prime,
        //then modulo inverse is b^(m-2) mode m
        return Math.pow(b, m - 2, m);
    }
}
  
// Function to compute a/b under modulo m
function modDivide(a,b,m)
{
    a = a % m;
    inv = modInverse(b,m);
    if(inv == -1)
        document.write("Division not defined");
    else
        document.write("Result of Division is ",(inv*a) % m);
}
  
// Driver Program
a = 8;
b = 3;
m = 5;
modDivide(a, b, m);
  
// This code is Contributed by phasing17
