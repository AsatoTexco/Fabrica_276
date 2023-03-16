class Estudante:
    def __init__(self,nome,idade,nota):
        self.nome = nome
        self.idade = idade
        self.nota = nota
    
    def get_nome(self):

        return self.nome
    
    def set_nome(self):
        nomeI = input("Nome: ")
        self.nome = nomeI

    def get_age(self):
        self.idade = input("idade: ")


p1 = Estudante("arthur",17,10)
print(p1.get_nome())
p1.set_nome()
print(p1.get_nome())