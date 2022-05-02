let teste = [];

for (let i = 0; i < 10; i++) {
    teste.push(() =>{
        console.log(i);
    })
}

teste[2]();