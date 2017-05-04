#function
def add(p,q):
    return p+q
    
def subtract(p,q):
    return p-q

def multiply (p,q):
    return p*q

def divide (p,q):
    return float(p)/float(q)
a=input("Enter a:") #getting input
b=input("Enter b:")

print add (a,b)
print subtract (a,b)
print multiply (a,b)
print float(divide (a,b))
print a%b #modulo function