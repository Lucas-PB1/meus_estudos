function count() {
    this.x = 0;
    setInterval(() => {
        this.x++;
        console.log(this.x);
    }, 1000)
}
// A função arrow sempre se utiliza do this dentro do contexto em que se encontra podendo ignorar o bind
new count;