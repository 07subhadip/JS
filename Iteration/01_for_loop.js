for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }  
}