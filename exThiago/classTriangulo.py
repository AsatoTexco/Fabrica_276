class Triangulo:

    def __init__(self,altura,largura) -> None:
        self.h = altura
        self.l = largura

    def get_altura(self):
        return self.h
    
    def get_largura(self):
        return self.l
    
    def get_area(self):
        return (self.l * self.h)/2


triangulo = Triangulo(2,5)
print("Altura: ",triangulo.get_altura())
print("Largura: ",triangulo.get_largura())
print("Área: ",triangulo.get_area())
