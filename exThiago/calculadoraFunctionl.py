def soma(x:float,y:float):
    res = x + y
    return res

def sub(x:float,y:float):
    res = x - y
    return res

def mult(x:float,y:float):
    res = x * y
    return res

def div(x:float,y:float):
    res = x / y
    return res

def raiz(x:float):
    res = x**0.5
    return res

def radi(x:float):
    res = x**2
    return res

n1 = float(input("1 valor: "))
n2 = float(input("2 valor: "))
print(f"Somados         : {soma(n1,n2)}")
print(f"Subtraidos      : {sub(n1,n2)}")
print(f"multiplicados   : {mult(n1,n2)}")
print(f"divididos       : {div(n1,n2)}")
n3 = float(input("raiz quadrada do número: "))
print(f"Raiz quadrada de {n3} é {raiz(n3)}")
n4 = float(input("número ao quadrado: "))
print(f"{n4} ao quadrado é {radi(n4)}")

testesssss = 344555