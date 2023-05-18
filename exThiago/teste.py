class Cachorro:

    def __init__(self,nome,raca,cor,peso,idade,porte) -> None:
        self.nome = nome 
        self.raca = raca
        self.cor = cor
        self.peso = peso
        self.idade = idade
        self.porte = porte

    def latir(self):
        print("Au Au!")
    def comer(self):
        print("Chomp Chomp")
    def dormir(self):
        print("Zzzzzzzzz")

    def nome(self):
        return(self.nome())

dog = Cachorro("peluda","vira-lata","marrom",7,12,"médio")

# dog.latir()
# dog.comer()
# dog.dormir()

print(dog.nome())