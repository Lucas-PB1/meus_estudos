const passo1 = (ctx, next) => {
    ctx.valor = 'm1';
    next();
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'm2';
    next();
}

const passo3 = ctx => ctx.valor3 = 'm3';

const exec = (ctx, ...mid) => {
    const execP = i => {
        mid && i < mid.length &&
            mid[i](ctx, () => execP(i + 1));
    }
    execP(0);
}

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);