var mandrill = require('node-mandrill')('hAB8dj3UNNaI2a2Q-LsBog');

mandrill('/messages/send', {
    message: {
        to: [{email: 'loveson821@gmail.com', name: 'Jim Rubenstein'}],
        from_email: 'loveson821@gmail.com',
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }
}, function(error, response)
{
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});