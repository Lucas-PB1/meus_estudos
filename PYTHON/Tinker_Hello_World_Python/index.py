import tkinter as tk


class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        self.button_1 = tk.Button(self,text="Iae, Clica aqui po! \n Cancela, não gostei do tinker", fg="white", bg="black", padx='10px', pady='5px')
        self.button_1["command"] = self.fale_algo
        self.button_1.pack(side="top")
        self.quit = tk.Button(self, text="Sair", fg="white", bg="black", padx='10px', pady='5px',
                              command=self.master.destroy)
        self.quit.pack(side="bottom")

    def fale_algo(self):
        print("Opa, opa testando!")


root = tk.Tk()
app = Application(master=root)
app.mainloop()
