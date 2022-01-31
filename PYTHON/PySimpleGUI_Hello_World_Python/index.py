import PySimpleGUI as sg

sg.theme('DarkAmber')   # Add a touch of color
# All the stuff inside your window.
layout = [  [sg.Text('Texto da primeira coluna')],
            [sg.Text('Escreva algo aqui: '), sg.InputText()],
            [sg.Button('Ok'), sg.Button('Cancelar')] ]

# Create the Window
window = sg.Window('Hello world', layout)
# Event Loop to process "events" and get the "values" of the inputs
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED or event == 'Cancel': # if user closes window or clicks cancel
        break
    print('Você digitou:', values[0])

window.close()
