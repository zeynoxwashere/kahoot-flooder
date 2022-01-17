//KahootFlooder Revamped
console.clear()

console.log("Preparing...")

readline = require('readline-sync');
console.log("Required readline-sync")
const Kahoot = require("kahoot.js-updated");
console.log("Required kahoot.js-updated")
var faker = require('faker');
console.log("Required faker")
const request = require('request');
console.log("Required request")
var random = require('random-name')
console.log("Required random-name")
var setTitle = require('console-title');
console.log("Required console-title")
setTitle('Kahootz Flooder | REVAMP | KAHOOTZ.XYZ');
var beep = require('beepbeep')
console.log("Required beepbeep")
console.clear();
console.log("Loading...")
console.clear();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getName(method){
    if(method==1){
      request('https://apis.kahoot.it/', function (error, response, body) {
      if (error) { console.log(error); }
          return JSON.parse(body).name
      });
    }else if(method==2){
      request('https://api.namefake.com/', function (error, response, body) {
      if (error) { console.log(error); }
          return JSON.parse(body).username
      });          
    }else if(method==3){
      return faker.name.findName();

    }else if(method==4){
      return random();
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
process.setMaxListeners(Number.POSITIVE_INFINITY)


console.log('\x1b[31m%s\x1b[0m'," ██ ▄█▀▄▄▄       ██░ ██  ▒█████   ▒█████  ▄▄▄█████▓▒███████▒")
console.log('\x1b[31m%s\x1b[0m'," ██▄█▒▒████▄    ▓██░ ██▒▒██▒  ██▒▒██▒  ██▒▓  ██▒ ▓▒▒ ▒ ▒ ▄▀░")
console.log('\x1b[31m%s\x1b[0m',"▓███▄░▒██  ▀█▄  ▒██▀▀██░▒██░  ██▒▒██░  ██▒▒ ▓██░ ▒░░ ▒ ▄▀▒░ ")
console.log('\x1b[31m%s\x1b[0m',"▓██ █▄░██▄▄▄▄██ ░▓█ ░██ ▒██   ██░▒██   ██░░ ▓██▓ ░   ▄▀▒   ░")
console.log('\x1b[31m%s\x1b[0m',"▒██▒ █▄▓█   ▓██▒░▓█▒░██▓░ ████▓▒░░ ████▓▒░  ▒██▒ ░ ▒███████▒")
console.log('\x1b[31m%s\x1b[0m',"▒ ▒▒ ▓▒▒▒   ▓▒█░ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░   ▒ ░░   ░▒▒ ▓░▒░▒")
console.log('\x1b[31m%s\x1b[0m',"░ ░▒ ▒░ ▒   ▒▒ ░ ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░     ░    ░░▒ ▒ ░ ▒")
console.log('\x1b[31m%s\x1b[0m',"░ ░░ ░  ░   ▒    ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒    ░      ░ ░ ░ ░ ░")
console.log('\x1b[31m%s\x1b[0m',"░  ░        ░  ░ ░  ░  ░    ░ ░      ░ ░             ░ ░    ")
console.log('\x1b[31m%s\x1b[0m',"                                                   ░        ")
console.log('\x1b[33m%s\x1b[0m',"            Revamped by zeynox | KAHOOTZ.XYZ\n")

safemode=readline.question('\x1b[31m-\x1b[0m  Use the safemode? (y/n)>>  ');
if(safemode=="y"){
    console.log('\x1b[31m%s\x1b[0m',"WARNING: 2-factor brute forcing does not work with safemode.")
}

usingplugin = false

pin = readline.question('\x1b[31m-\x1b[0m  Enter game pin>>  ');
bots = readline.question('\x1b[31m-\x1b[0m  Enter number of bots>>  ');
if(safemode=="y"){
    ranname="y"
    er="n"
}else{
ranname = readline.question('\x1b[31m-\x1b[0m  Use random name?[SLOWER] (y/n)>>  ');}

if (ranname=="y"){
    optionchn = readline.question('\x1b[31m-\x1b[0m  Would you like to use Kahoot API(1)[SAFE],namefake.com(2),Faker(3)[FAST] or random-name(4)[OLD] to generate usernames? (1/2/3/4) >>  ');
    ranname=true
    if(optionchn==3 || optionchn==4){
      usingplugin = true
    }
}else{
    ranname=false
    botname = readline.question('\x1b[31m-\x1b[0m  Enter name>>  ');
}

if(safemode=="n"){er = readline.question('\x1b[31m-\x1b[0m  Use name bypass? (y/n)>>  ');}


usercontrolled = readline.question('\x1b[31m-\x1b[0m  Control the bots? (y/n)>>  ');

if (usercontrolled=="y"){
    usercontrolled =true
    beepis= readline.question('\x1b[31m-\x1b[0m  Beep when the bots need controlling? (y/n)>>  ');
}else{
    usercontrolled =false
    beepis="n"
}


console.clear()

repeattimes=0

function sendjoin(name,id) {
    if(ranname){    
        join(getName(optionchn),id)
    }else{
        join(name,id)
    }
}

function spam() {
    
      if(repeattimes==bots){
        console.log('\x1b[35m%s\x1b[0m',"Successfully sent all join requests.")
      }else{
        repeattimes++

        if(ranname && !usingplugin){rt=getRandomInt(80,180)}else{rt=15} //a little timeout so you wont get blacklisted from the apis

        setTimeout(() => {
            spam()
        }, rt);
        setTimeout(() => {
            
            if(ranname){
                sendjoin("kahootz gen",bots-repeattimes-1)
            }else{
                sendjoin(bots-repeattimes-1+" | "+botname,bots-repeattimes-1)
            }
        }, rt);
      }
}

process.setMaxListeners(Number.POSITIVE_INFINITY)

Arandomint = 0
validcode=false
function join(name,idee) {
    while (name==undefined) {
        name=getName(optionchn)
    }
    const client = new Kahoot();
    client.setMaxListeners(Number.POSITIVE_INFINITY)
        if(er=="y"){
            client.join(pin, name.replace(/a/g, 'ᗩ').replace(/b/g, 'ᗷ').replace(/c/g, 'ᑕ').replace(/d/g, 'ᗪ').replace(/e/g, 'E').replace(/f/g, 'ᖴ').replace(/g/g, 'G').replace(/h/g, 'ᕼ').replace(/i/g, 'I').replace(/j/g, 'ᒍ').replace(/k/g, 'K').replace(/l/g, 'ᒪ').replace(/m/g, 'ᗰ').replace(/n/g, 'ᑎ').replace(/o/g, 'O').replace(/p/g, 'ᑭ').replace(/q/g, 'ᑫ').replace(/r/g, 'ᖇ').replace(/s/g, 'ᔕ').replace(/t/g, 'T').replace(/u/g, 'ᑌ').replace(/v/g, 'ᐯ').replace(/w/g, 'ᗯ').replace(/x/g, '᙭').replace(/y/g, 'Y').replace(/z/g, 'ɀ').replace(/A/g, 'ᗩ').replace(/B/g, 'ᗷ').replace(/C/g, 'ᑕ').replace(/D/g, 'ᗪ').replace(/E/g, 'E').replace(/F/g, 'ᖴ').replace(/G/g, 'G').replace(/H/g, 'ᕼ').replace(/I/g, 'I').replace(/J/g, 'ᒍ').replace(/K/g, 'K').replace(/L/g, 'ᒪ').replace(/M/g, 'ᗰ').replace(/N/g, 'ᑎ').replace(/O/g, 'O').replace(/P/g, 'ᑭ').replace(/Q/g, 'ᑫ').replace(/R/g, 'ᖇ').replace(/S/g, 'ᔕ').replace(/T/g, 'T').replace(/U/g, 'ᑌ').replace(/V/g, 'ᐯ').replace(/W/g, 'ᗯ').replace(/X/g, '᙭').replace(/Y/g, 'Y').replace(/Z/g, 'ɀ'),[random.first(),random.last()]).catch(err=>{
                if(err.description=="Duplicate name"&ranname){
                    sendjoin(name,idee)
                }else{
                    console.log('\x1b[31m%s\x1b[0m',"Client "+idee+' failed to join with the error "'+err.description+'"')
                    client.leave()
                }
            });
        }else{
            client.join(pin, name,[random.first(),random.last()]).catch(err=>{
                if(err.description=="Duplicate name"&ranname){
                    sendjoin(name,idee)
                }else{
                    console.log('\x1b[31m%s\x1b[0m',"Client "+idee+' failed to join with the error "'+err.description+'"')
                    client.leave()
                }
            });
        }
    var list=[0,1,2,3]
    var validcode=false
    var waittime = 100
    client.on("Joined", info => {
        if(info.twoFactorAuth){
          console.clear();
          console.log('\x1b[34m%s\x1b[0m',"Detected 2FA...\n")
          if (safemode=="n"){
              setInterval(() => {
                  if(!validcode==false){
                      waittime = 50
                      client.answerTwoFactorAuth(validcode)
                  }else{
                      waittime = 100
                      shuffle(list)
                      client.answerTwoFactorAuth(list)
                  }
              }, waittime);
          }else if(safemode=="y"){
            console.log('\x1b[31m%s\x1b[0m',"2-factor authentication detected. You can not bypass it using safemode!")
          }
        }
    });
    client.on("TwoFactorCorrect", function () {
        console.log('\x1b[32m%s\x1b[0m',name+` bypassed 2-factor authentication! Pattern used: ${list}`)
        validcode=list
    })

    client.on("TwoFactorWrong", function () {
        validcode=false
    })

    client.on("QuestionReady", question => {
        if (idee==1&beepis=="y"){
            beep()
        }

        everyoneanswerthis=false
        if (question.type == "word_cloud") {
            if(usercontrolled){

                if (idee==1){
                    everyoneanswerthis=true
                    answer = readline.question('\x1b[31m-\x1b[0m  type your answer> ');
                    everyoneanswerthis=answer
                    Arandomint=answer
                    setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                }else{
                    var waittill=setInterval(() => {
                        if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint)
                            },getRandomInt(1,20000));
                        }
                    }, 100);
                   
                }
            }else{
                console.log(name+" answered")
            }
        }

        if (question.type == "jumble") {
            console.log("User controlling is not currently available for jumbles. The bot "+name+" responded with a random answer.")
            setTimeout(() => {client.answer(getRandomInt(0,question.quizQuestionAnswers[question.questionIndex]-1))},getRandomInt(1,20000));
        }

        if (question.type == "quiz") {
            if(usercontrolled){
                if(question.quizQuestionAnswers[question.questionIndex]==2){

                    
                    if (idee==1){
                        everyoneanswerthis=true
                        answer = readline.question('\x1b[31m-\x1b[0m  t for triangle, d for diamond> ');
                        answer = answer.replace('t', 1).replace('d', 2)
                        everyoneanswerthis=answer
                        Arandomint=answer
                        setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                    }else{
                        var waittill=setInterval(() => {
                            if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint-1)
                                },getRandomInt(1,20000));
                            }
                        }, 100);
                       
                    }

                }

                if(question.quizQuestionAnswers[question.questionIndex]==3){

                    if (idee==1){
                        everyoneanswerthis=true
                        answer = readline.question('\x1b[31m-\x1b[0m  t for triangle, d for diamond, c for circle>>  ');
                        answer = answer.replace('t', 1).replace('d', 2).replace('c', 3)
                        everyoneanswerthis=answer
                        Arandomint=answer
                        setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                    }else{
                        var waittill=setInterval(() => {
                            if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint-1)
                                },getRandomInt(1,20000));
                            }
                        }, 100);
                       
                    }
                }



                if(question.quizQuestionAnswers[question.questionIndex]==4){

                    if (idee==1){
                        everyoneanswerthis=true
                        answer = readline.question('\x1b[31m-\x1b[0m  t for triangle, d for diamond, c for circle or s for square >>  ');
                        answer = answer.replace('t', 1).replace('d', 2).replace('c', 3).replace('s', 4)
                        everyoneanswerthis=answer
                        Arandomint=answer
                        setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                    }else{
                        var waittill=setInterval(() => {
                            if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint-1)
                                },getRandomInt(1,20000));
                            }
                        }, 100);
                       
                    }


                }
            }else{
                setTimeout(() => {
                    toanswer=getRandomInt(0,question.quizQuestionAnswers[question.questionIndex]-1)
                    console.log(name+" answered with a random answer.")
                    client.answer(toanswer)
                },getRandomInt(1,30000));
                
            }
        } 


        if (question.type == "survey") {
            if(usercontrolled){
                if (idee==1){
                    everyoneanswerthis=true
                    answer = readline.question('\x1b[31m-\x1b[0m  t for triangle, d for diamond, c for circle or s for square >>  ');
                    answer = answer.replace('t', 1).replace('d', 2).replace('c', 3).replace('s', 4)
                    everyoneanswerthis=answer
                    Arandomint=answer
                    setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                }else{
                    var waittill=setInterval(() => {
                        if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint-1)
                            },getRandomInt(1,20000));
                        }
                    }, 100);
                   
                }
                
            }else{
                setTimeout(() => {
                    toanswer=getRandomInt(0,question.quizQuestionAnswers[question.questionIndex]-1)
                    console.log(name+" answered with a random answer.")
                    client.answer(toanswer)
                },getRandomInt(1,20000));
            }
        } 

        if (question.type == "open_ended") {
            if(usercontrolled){
                if (idee==1){
                    everyoneanswerthis=true
                    answer = readline.question('\x1b[31m-\x1b[0m  Type your answer>> ');
                    everyoneanswerthis=answer
                    Arandomint=answer
                    setTimeout(() => {client.answer(answer-1)},getRandomInt(1,20000));

                }else{
                    var waittill=setInterval(() => {
                        if (!everyoneanswerthis==false || !everyoneanswerthis==true){
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint)
                            },getRandomInt(1,20000));
                        }
                    }, 100);
                   
                }
            }else{
                console.log(name+" answered")
            }
        }


    });

    client.on("Disconnect", reason => {
        if(!reason=="Quiz Locked"){
            sendjoin(name,idee)
        }
    })

    client.on("QuestionEnd", data => {
        if (data.isCorrect){
            console.log(name+" Got it correct!")
        }else{
            console.log(name+" Got it wrong.")
        }
    })
    client.on("QuizEnd", data => {
        console.log("The quiz has ended and "+name+" got rank "+data.rank)
    })
    client.on("QuizStart", () => {
        console.clear()
        console.log('\x1b[34m%s\x1b[0m',"The quiz started!")
    });
    process.on("SIGINT", function () {
        process.exit()
    });
}
console.clear()
console.log('\x1b[34m%s\x1b[0m',"Joining bots")
console.log('\x1b[33m%s\x1b[0m',"INFO: If you get (node:171) UnhandledPromiseRejectionWarning most likely one of your bots got kicked.\n")
spam() //congrats kid