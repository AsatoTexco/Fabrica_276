def hello(nome,idade):
    print(f"Bem vindo {nome}, você possuir {idade} anos")
    return int(input("Insira seu cpf: "))
    
cpf = hello("arthur",17)
print("cpf: ",cpf)

print(hello())