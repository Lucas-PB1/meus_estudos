const schedule = require('node-schedule');

// String definição: */valor-de-loop minutos hora dia-do-mes mes dia-da-semana 
const tarefa = schedule.scheduleJob('*/5 * 20 * * 4', function () {
    console.log('Tarefa 1!', new Date().getSeconds());
});

// Cancelando a tarefa
setTimeout(() => {
    tarefa.cancel();
    console.log('Tarefa cancelada');
}, 20000)

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 20;
regra.second = 15;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Tarefa 2!', new Date().getSeconds());
})