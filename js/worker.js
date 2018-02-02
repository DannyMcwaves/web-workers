// importScripts('/js/app.min.js');

const Tweets = {
    danny: {
        tweet: 'The world is a play with fictional characters. You need to take a center stage to be the protagonist.',
        user: 'danny'
    },
    mcwaves: {
        tweet: 'Today is the R2D2 of my #100DaysOfCodeChallenge.',
        user: 'mcwaves'
    },
    py: {
        tweet: 'This is the baddest guy tweeting. I have a real vibe that will resonate in all of this year. so please listen.',
        user: 'py'
    },
    slick: {
        tweet: 'A success story does not have an end. This is just the beginning.',
        user: 'slick'
    },
    obrigado: {
        tweet: 'More life. More life and more knowledge is what we preach on the daily.',
        user: 'obrigado'
    }
};


self.addEventListener('message', (e) => {
    let data = e.data;
    postMessage(Tweets[data]);
    i = 0;
    twits = ['danny', 'mcwaves', 'py', 'slick', 'obrigado'];
    setInterval(_ => {
        "use strict";
        i = (i+1) % twits.length;
        postMessage(Tweets[twits[i]]);
    }, 20000);
});
