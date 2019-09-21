console.log('person1: shows ticket');
console.log('person1: shows ticket');

const preMovie = async () => {
    
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`Wife: i have the ${ticket}`);
    console.log('Husband: we should go in');
    console.log('Wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband: i got some ${popcorn}`);
    console.log('Husband: we should go in');
    console.log('Wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`Husband: i got some ${butter} on my popcorn`);
    console.log('Husband: anything else darling?');
    console.log('Wife: lets got we are getting late');
    console.log('Husband: :)');

    return ticket;
}

preMovie().then((message) => console.log(`person3: shows ${message}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');