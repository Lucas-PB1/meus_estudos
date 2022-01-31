import random
users = []
palavras = []


def mostrar():
    count = 1
    print("Nosso dicionario de palabras inclui: ")
    for i in palavras:
        print("** {} -  {} **".format(count, i))
        count = 1 + 1
    return print('')


def save():
    while True:
        word = input("Digite algo:\n>: ").split(' ')
        for arg in word:
            num = [i for i in range(len(arg)) if arg[i].isnumeric() is False]
            if arg.lower() not in palavras and len(num) == len(arg):
                palavras.append(arg.lower())
        mostrar()
        if input("Clique qualquer coisa para continuar ou digite sair\n>: ").lower() == "sair":
            return print('')


def register():
    print('Digite seu nome: ')
    [reg_name, reg_id] = [verify(input('>: ')), (len(users) + 1) * random.randrange(1, 999)]
    users.append({'name': reg_name, 'id': reg_id})
    save()


def verify(new_name):
    for i in users:
        if i['name'] == new_name:
            print("Bem vindo de volta {}\n".format(new_name))
            return new_name
    print("Seja bem vindo {}\n".format(new_name))
    return new_name


while True:
    print('Olá seja bem vindo!')
    register()
