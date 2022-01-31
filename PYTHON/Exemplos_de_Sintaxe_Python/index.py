# parte 1
# print("Ola Mundo!")

# parte 2
# n1 = 10
# n2 = 5

# if n1 > n2:
#     print('Maior')

# parte 3
"""
Comentario longo!
"""

# parte 4
# x = str(3)    # x vai ser uma string '3'
# y = int(3)    # y um inteiro 3
# z = float(3)  # z vai ser um float 3.0

# print(type(x))
# print(type(y))
# print(type(z))

# parte 5
# x, y, z = "Orange", "Banana", "Cherry" # Multiplas declarações
# x = y = z = "Orange"  # Um valor pra muitas variaveis
# fruits = ["apple", "banana", "cherry"] # usando um array para preencher valores
# x, y, z = fruits
# print(x)
# print(y)
# print(z)

# parte 6
# Tipos de print, ligador é o +
# x = "Python e "
# y = "incrivel"
# print(x + y)

# parte 7
# x = 1
# def soma(y):
# global x
# return x + y
# print(soma(1))

# parte 8
# O python possui um tipo chamado "complex" que armazena número
# imaginarios, usando "j" para a parte imaginaria
# num = 12j
# print(type(num))

# Conversão de número
# x = 1
# a = complex(x)
# print(type(a))

# Número randomico
# import random
# print(random.randrange(1, 10))

# Parte 9
# Texto em varias linhas
# Para isso se ou ''' meio ''' ou """ meio """
# text = """Esse texto aqui
# tem mais de  uma Linha!"""
# print(text)

# Strings em python sempre são matriz cada letra sendo um elemento
# test = "Ola Lucas"
# print(test[5])

# Loops através uma "corda", sendo i o resultado
# for i in "Lucas":
#    print(i)

# Comprimento de um elemento
# a = "testando"
# print(len(a))

# Verificando se existe essa string no texto
# testing = 'Lucas Hero Bruno'
# print('Lucas' in testing)

# text  = 'Ola cara'
# if 'Ola' in text:
#     print('Achou')

# text = 'Pedro Soares Lima'
# if 'Pedro' not in text:
#     print('Nada de pedros')

# Parte 10
# Quebra de string
# text = 'Lucas Soares Lima'
# print(text[5:9]) # Esse metodo permite a leitura do caracteres mas se incluir o ponto de inicio e fim

# Obtendo todo desde o inicio sem incluir
# text = 'aaaaaaa bbbbbbb'
# print(text[:9])
# Inverso do de cima
# print(text[8:])

# Indexação negativa, desta vez incluindo
# test = 'Todo mundo!'
# print(test[-6: -1])

# Parte 11
# a = 'case menor'
# print(a.upper())

# b = 'CASE MAIOR'
# print(b.lower())

# Removendo espaço em branco antes e dps textos
# hum = ' sim isso mesmo '
# print(hum.strip())

# Reescrevendo certa parte com replace
# a = 'Troca isso aqui não'
# print(a.replace('não', 'sim'))

# Dividindo uma string
# text = "Lucas é incrivel"
# text = text.split(' ')
# for i in text:
#    print(i)

# Concatenação
# a = 'Lucas e {}'
# print(a.format('lindo'))
# print("Lucas é {}".format('lindo'))

# Parte 12
# Escape de string
# print("ISSO É UM \"TESTE\" ")
# \' Single Quote \\ Backslash \n New Line \r Carriage Return	\t Tab
# \b Backspace \f Form Feed \ooo Octal value \xhh Hex value

# Parte 13
# Metodos string
'''
capitalize() primeira letra maiscula || casefold() Case menor
center() um string centralizada || count() conta quantas vezes o valor passado aperece na string
encode() Codifica uma string || endswith() Veririfica se tal valor existe no fim da string
expandtabs() Define o espaço de tab || find() Procura um valor e retorna sua posição
format() Transforma certo valor em uma string || format_map() Metodo mais complexo de formatação em string 
index() Procura um valor e retorna posição || join() Insere um elemento no fim de certa string
ljust() Justifica uma string pela esquerda || lower() case menor || replace() Subtitui um valor
rjust()	Justifica uma string pela direita || split() Separa por um elemento especifico e retorna a lista
splitlines() Separa uma string por linhas e retornar || startswith() Verifica se um string começa com o valor pedido
strip()	Retorna a versão aparada de uma string || swapcase() Troca os cases
title()	Converte a primeira letra de cada palavra em um maisculo || translate() traduz
upper()	transforme em maiusculo
'''

# Parte 14
# Array, inserindo elemento em posição especifica
# array = ['ola', 'ola', 'ola']
# array.insert(2, 'teste')
# print(array)

# Array, inserindo um elemento no final da lista
# array = ["1", 2, 3]
# array.append(4)
# print(type(array))

# Juntando duas listas
# thislist = ["apple", "banana", "cherry"]
# tropical = ["mango", "pineapple", "papaya"]
# thislist.extend(tropical)
# print(thislist)

# Removendo um item
# x = ['a', 'b', 'c', 'd', 'e']
# x.remove('a') Tirano um item
# x.pop(3) Eliminanto pela posição
# del x[2] deletando um elemento
# x.clear() limpando a lista
# print(x)

# Percorrendo uma lista de forma manual
# x = (1, 2 ,3)
# for i in range(len(x)):
#    print(x[i])

# Forma automatica
# for i in x:
#    print(i)

# Com while
# thislist = ["apple", "banana", "cherry"]
# i = 0
# while i < len(thislist):
#  print(thislist[i])
#  i = i + 1

# Modo simples
# thislist = ["apple", "banana", "cherry"]
# [print(x) for x in thislist]

# Pegando um itens em especifico
# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = [x for x in fruits if "a" in x]
# print(newlist)

# Pegando todos os itens que não sejam 'apple'
# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = [x for x in fruits if x != "apple"]
# print(newList)

# Gerando items até 5
# newlist = [x for x in range(10) if x < 5]
# print(newlist)

# Transformando em case maisculo
# newlist = [x.upper() for x in fruits]

# Ordem alfabetica, em caso de haver maisculas a maiscula saíra na frente
# thislist = ["a", "c", "e", "z", "m"]
# thislist.sort()
# print(thislist)

# Ordem numerica
# thislist = [100, 50, 65, 82, 23]
# thislist.sort()
# print(thislist)

# Ordem alfabetica crescente
# thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
# thislist.sort(reverse = True)
# print(thislist)

# Ordem alfabetica decrescente
# thislist = [100, 50, 65, 82, 23]
# thislist.sort(reverse = True)
# print(thislist)

# Ordem alfabetica ignorando o case
# thislist = ["banana", "Orange", "Kiwi", "cherry"]
# thislist.sort(key = str.lower)
# print(thislist)

# Parte 15
# array.reverse(), inverte uma lista
# array.copy(), Copia a lista
# array = list(oldArray), tb copia uma lista

# Uma tupla, nada mais é um do que "array" no entanto totalmente imutavel e não pode ser reordenado
# tup = ('1', 2, 2.0)
# print(type(tup))
# O unico jeito de mexer nos dados de um tupla é temporariamente a trasnformar em lista

# Parte 16
# Descompactamento, no python é possivel descompactar itens da de seguinte forma

# cores = ('red', 'yellow', 'blue')
# (red, yellow, blue) = cores
# Os valores das cores foram passadas as variaveis

# Se os números de elementos forem maiores que o número de variaveis passadas pode ser usar *
# num = (1, 2, 3, 4, 5, 6, 7)
# (um, dois, tres, *all) = num, mudando a posição do * tb muda os valores que serão recebidos
# print(all)

# Parte 17
# Um set não pode ter valores duplicados, não pode ser alterado após a criação
# O mesmo  não é ordenado porém é indexado e assim como a tupla são imutaveis
# set = {1, 2, 3}

# É possivel adicionar novos itens no set, com add
# set.add(4)

# É possivel adicionar um novo set ao set anterios com update
# set2 = {5, 6, 7}
# set.update(set2)

# Existem dois metodos para remover itens com suas particularidades, o "discard" remove o item e se o item
# não existir ele nõa gera erro, ja o remove se o item não existir ele joga um erro
# set.remove(1)
# set.discard(80)

# pop para eliminar o primeiro item, clear e del tb funcionam]
# set.pop()

# O metodo union diferente do update somente gera um novo set que  tem os dois valores ao inves de juntar
# os dois no ex inicial
# ex = {'a', 'b'}
# ex2 = {'c', 'd'}
# ex3 = ex.union(ex2)
# print(ex3)

# Nesse metodo ele manterá somente os valores que são presentes em ambos os grupos
# x = {"apple", "banana", "cherry"}
# y = {"google", "microsoft", "apple"}
# x.intersection_update(y)
# para retornaar o valor ser usar x.intersection, sem o update
# print(x)

# Vai pegar todos os valores e manter apenas os que não tiverem duplicatas
# x.symmetric_difference_update(y)
# x.symmetric_difference(y)

# Parte 18
# Dictionary

# Um dicionario se comporta de maneira muito semelhante a um objeto
# library = {
#    'Nome': 'Legend',
#    'Ano': '2011',
#    'Author': 'None'
# }

# Metodos de pegar um item em especifico
# x = library['Ano']
# x = library.get("Ano")

# Pegando todas as chaves
# x = library.keys()

# É possivel atualizar um valor usando
# library['Ano'] = '2015'

# Retorna todos os valores do dictionary
# x = library.values()

# Listando todos os items por chave e valor
# x = library.items()

# Metodo correto de atualizar um item
# library.update({'Ano': 2020})

# Se um update for realizado usando um chave/valor não existente esse item será adicionado
# library.update({'Estado': 'Conservado'})

# Removendo um item
# library.pop('Ano')

# O ultimo item inserido é removido, del e clear tb são utilizaveis
# library.popitem()
# print(library)

# Dicinarios aninhados
# Nada mais é do que juntas varios dictionarys em apenas 1
# child1 = {"name": "Emil", "year" : 2004}
# child2 = {"name": "Tobias", "year" : 2007}
# child3 = {"name": "Linus", "year" : 2011}
# myfamily = {"child1": child1, "child2": child2, "child3": child3}
# OU
# family = {
#    "child1": {"name": "Emil", "year": 2004},
#    "child2": {"name": "Tobias", "year": 2007},
#    "child3": {"name": "Linus", "year": 2011}
# }
# print(myfamily)

# Parte 19
# Ifs
# x = input("Um número: ")
# y = input("Outro número: ")
# if x > y:
#    print('Condição 1')
# elif x == y:
#    print("Condição 2")
# else:
#    print("Condição 3")

# Parte 20
# funções

# Se o número de argumentos não é conhecido se usa *
# def get_test(*args):
#    print(args)
# get_test(1, 2, 3, 4, 5)


# É possivel passar keywords, como argumentos,
# no entanto o primeiro elemento deverá corresponder ao nome passado na função
# def test(x):
#     print(x)
# test(x='aaaaa')
# Se for mais de um keyword e não se sabe quantas se receberá use ** ao inves *

# Funções não devem ser vazias mas se por algum motivo forem, use pass para evitar erros
# def testing():
#    pass

# Lambda é um declaração de função instantanee
# soma = lambda a, b: a + b
# print(soma(1,1))

# Parte 21
# arrays possuem 3 funções basicas

# Adicionar
# abc = [1, 2]
# abc.append(3)
# print(abc)
# Remover = pop e clear

# Parte 22
# Classes
# Self se refere ao objeto da função em si, o nome pode variar
# class User:
#    def __init__(self, inte, defe, atk):
#        self.inte = inte
#        self.defe = defe
#        self.atk = atk
#   def mostrar(self):
#        print(self.defe)
# x = User(1, 1, 1)
# x.mostrar()

# Classe pai e filho
# class Pai:
#    def __init__(self, nome, idade):
#        self.nome = nome
#        self.idade = idade
#    def mostrar(self):
#        print("Este é o nome {}, e ésta é a idade {} anos".format(self.nome, self.idade))
# Filho é um classe que herda tudo da classe pai
# class Filho(Pai):
# É possivel herdar todos os dados do pai dessa forma
#    def __init__(self):
#        super().__init__(fname, fidade)
#    pass
# x = Filho('Lucas', 20)
# x.mostrar()


