setTimeout(() => {
    console.log('Two seconds are up');
}, 2000);

const names = ['saeed', 'jen', 'jess'];

const shortNames = names.filter((name) => {
    return names.length <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
        callback(data) ;
    }, 2000);
};

geocode('riyadh', (data) => {
   console.log(data);
});

const add = (a,b,callback) => {
    setTimeout(()=> {
        callback(a+b);
    },2000);
}
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})