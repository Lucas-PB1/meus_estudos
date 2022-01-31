from random import seed
from tkinter.constants import S
import PySimpleGUI as sg


class TelaPython():
    def __init__(self):
        sg.change_look_and_feel('DarkBrown4')
        # Layout
        layout = [
            [sg.Text('Nome', size=(5, 0)), sg.Input(size=(15, 0), key='Nome')],
            [sg.Text('Idade', size=(5, 0)), sg.Input(
                size=(15, 0), key='Idade')],
            [sg.Text('Quais provedores de Email são aceitos:')],
            [sg.Text('Cartão de credito:')],
            [sg.Radio('sim', 'cartoes', key='cartao_sim'),
             sg.Radio('não', 'cartoes', key='cartao_nao')],
            [sg.Checkbox('Gmail', key='Gmail'), sg.Checkbox(
                'Outlook', key='Outlook'), sg.Checkbox('Yahoo', key='Yahoo')],
            [sg.Button('Enviar Dados')],
            [sg.Slider(range=(0, 100), default_value=0,
                       orientation='h', size=(15, 20), key='Slider')],
            [sg.Output(size=(50, 20))]
        ]
        # Janela
        self.janela = sg.Window('Dados do usuario').layout(layout)
        # Extrair os dados da tela

    def iniciar(self):

        while True:
            self.button, self.values = self.janela.Read()

            nome = self.values['Nome']
            idade = self.values['Idade']
            aceita_gmail = self.values['Gmail']
            aceita_outlook = self.values['Outlook']
            aceita_yahoo = self.values['Yahoo']
            cartaoSim = self.values['cartao_sim']
            cartaoNao = self.values['cartao_nao']
            slider = self.values['Slider']

            print(' Nome: {}\n Idade: {}\n Gmail: {} || Outlook: {} || Yahoo: {}\n Aceita cartão?: {} || Não aceita: {}\n Testando o slider: {}'.format(
                nome, idade, aceita_gmail, aceita_outlook, aceita_yahoo, cartaoSim, cartaoNao, slider))


tela = TelaPython()
tela.iniciar()
