let finalClassification = "";
let certificateID = "";
let finalBoss = "";

let username = "";

let currentQuestion = 0;

let reactionRound = 0;
let reactionScore = 0;

let gameWin = false;

let scores = {

bread:0,
mango:0,
earbat:0,
refrigerator:0,
chaos:0

};

const reactionKeys = [
"W",
"A",
"S",
"D"
];

const questions = [

{
question:"Choose a bread.",
answers:[
{text:"White Bread",type:"bread"},
{text:"Garlic Bread",type:"bread"},
{text:"Baguette",type:"bread"},
{text:"Unknown Bread",type:"chaos"}
]
},

{
question:"Choose a transportation method.",
answers:[
{text:"Car",type:"refrigerator"},
{text:"Bus",type:"bread"},
{text:"Earbat",type:"earbat"},
{text:"Bicycle",type:"mango"}
]
},

{
question:"A mango knows your full name.",
answers:[
{text:"Trust It",type:"mango"},
{text:"Ignore It",type:"bread"},
{text:"Report It",type:"refrigerator"},
{text:"Observe It",type:"earbat"}
]
},

{
question:"Which GARBAT department would you join?",
answers:[
{text:"Bread Division",type:"bread"},
{text:"Mango Division",type:"mango"},
{text:"Earbat Division",type:"earbat"},
{text:"Refrigerator Division",type:"refrigerator"}
]
},

{
question:"You receive an unsigned loaf.",
answers:[
{text:"Accept",type:"bread"},
{text:"Decline",type:"refrigerator"},
{text:"Investigate",type:"earbat"},
{text:"Report",type:"mango"}
]
},

{
question:"The refrigerator requests compensation.",
answers:[
{text:"Pay",type:"refrigerator"},
{text:"Appeal",type:"bread"},
{text:"Ignore",type:"chaos"},
{text:"Become Bread",type:"bread"}
]
},

{
question:"Choose a witness.",
answers:[
{text:"Bread",type:"bread"},
{text:"Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"Refrigerator",type:"refrigerator"}
]
},

{
question:"You discover illegal toast.",
answers:[
{text:"Report It",type:"refrigerator"},
{text:"Eat It",type:"bread"},
{text:"Study It",type:"earbat"},
{text:"Run",type:"chaos"}
]
},

{
question:"The mango waves.",
answers:[
{text:"Wave Back",type:"mango"},
{text:"Hide",type:"bread"},
{text:"Report It",type:"refrigerator"},
{text:"Wave Harder",type:"chaos"}
]
},

{
question:"How many Earbats fit in a bus?",
answers:[
{text:"3",type:"bread"},
{text:"12",type:"mango"},
{text:"47",type:"earbat"},
{text:"Ask GARBAT",type:"refrigerator"}
]
},

{
question:"The Earbat has reviewed your previous answer.",
answers:[
{text:"Acknowledge",type:"earbat"},
{text:"Dispute",type:"refrigerator"},
{text:"Ignore",type:"bread"},
{text:"Panic",type:"chaos"}
]
},

{
question:"A refrigerator begins following you.",
answers:[
{text:"Run",type:"chaos"},
{text:"Negotiate",type:"refrigerator"},
{text:"Observe",type:"earbat"},
{text:"Befriend",type:"bread"}
]
}

];

function continueAssessment(){

    username =
    document.querySelector("input").value;

    if(username.trim()===""){

        alert(
        "Identification Required"
        );

        return;

    }

    document.querySelector(".card").innerHTML = `

    <h1>GARBAT</h1>

    <h2>
    Welcome, ${username}
    </h2>

    <p>
    GARBAT acknowledges your existence.
    </p>

    <br>

    <button onclick="beginAssessment()">
    Begin Assessment
    </button>

    `;

}

function beginAssessment(){

    currentQuestion = 0;

    showQuestion();

}questions.push(

{
question:"GARBAT requests clarification.",
answers:[
{text:"Provide",type:"bread"},
{text:"Refuse",type:"chaos"},
{text:"Delay",type:"refrigerator"},
{text:"Ask Why",type:"earbat"}
]
},

{
question:"Which item deserves protection?",
answers:[
{text:"Bread",type:"bread"},
{text:"Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"Refrigerator",type:"refrigerator"}
]
},

{
question:"The loaf is watching.",
answers:[
{text:"Continue",type:"bread"},
{text:"Report",type:"refrigerator"},
{text:"Watch Back",type:"earbat"},
{text:"Leave",type:"chaos"}
]
},

{
question:"The refrigerator has filed paperwork.",
answers:[
{text:"Sign",type:"refrigerator"},
{text:"Appeal",type:"bread"},
{text:"Ignore",type:"chaos"},
{text:"Eat The Paperwork",type:"earbat"}
]
},

{
question:"The mango remembers.",
answers:[
{text:"Good",type:"mango"},
{text:"Concerning",type:"refrigerator"},
{text:"Impossible",type:"bread"},
{text:"Expected",type:"chaos"}
]
},

{
question:"The Earbat disagrees with answer #7.",
answers:[
{text:"Accept",type:"earbat"},
{text:"Challenge",type:"refrigerator"},
{text:"Explain",type:"bread"},
{text:"Ask GARBAT",type:"chaos"}
]
},

{
question:"Choose your emergency contact.",
answers:[
{text:"Bread",type:"bread"},
{text:"Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"Refrigerator",type:"refrigerator"}
]
},

{
question:"An audit has been scheduled.",
answers:[
{text:"Prepare",type:"bread"},
{text:"Hide",type:"chaos"},
{text:"Appeal",type:"refrigerator"},
{text:"Become Bread",type:"bread"}
]
},

{
question:"GARBAT has located previous records.",
answers:[
{text:"Continue",type:"bread"},
{text:"Request Access",type:"earbat"},
{text:"Deny",type:"refrigerator"},
{text:"Panic",type:"chaos"}
]
},

{
question:"Your refrigerator has voted.",
answers:[
{text:"Accept",type:"refrigerator"},
{text:"Recount",type:"earbat"},
{text:"Ignore",type:"bread"},
{text:"Investigate",type:"chaos"}
]
},

{
question:"Are you currently bread?",
answers:[
{text:"Yes",type:"bread"},
{text:"No",type:"refrigerator"},
{text:"Possibly",type:"earbat"},
{text:"Classified",type:"chaos"}
]
},

{
question:"Choose a dimension.",
answers:[
{text:"Standard",type:"bread"},
{text:"Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"BRED",type:"chaos"}
]
}

);

function showQuestion(){

    let q =
    questions[currentQuestion];

    let progress =
    ((currentQuestion + 1) /
    questions.length) * 100;

    let remaining =
    questions.length -
    (currentQuestion + 1);

    let buttons = "";

    q.answers.forEach(answer=>{

        buttons += `

        <button
        onclick="answerQuestion('${answer.type}')">

        ${answer.text}

        </button>

        <br><br>

        `;

    });

    document.querySelector(".card").innerHTML = `

    <h1>GARBAT</h1>

    <p>
    ${remaining} Remaining
    </p>

    <div class="progress-bar">

        <div
        class="progress-fill"
        style="width:${progress}%">

        </div>

    </div>

    <br>

    <h2>${q.question}</h2>

    ${buttons}

    `;

}questions.push(

{
question:"The loaf requires a decision.",
answers:[
{text:"Approve",type:"bread"},
{text:"Reject",type:"refrigerator"},
{text:"Delay",type:"chaos"},
{text:"Delegate",type:"earbat"}
]
},

{
question:"The refrigerator has reached a verdict.",
answers:[
{text:"Accept",type:"refrigerator"},
{text:"Appeal",type:"bread"},
{text:"Ignore",type:"chaos"},
{text:"Become Bread",type:"bread"}
]
},

{
question:"The mango has submitted evidence.",
answers:[
{text:"Review",type:"mango"},
{text:"Reject",type:"refrigerator"},
{text:"Archive",type:"bread"},
{text:"Eat Evidence",type:"chaos"}
]
},

{
question:"Who authorized this assessment?",
answers:[
{text:"Me",type:"bread"},
{text:"GARBAT",type:"chaos"},
{text:"AREA-51",type:"chaos"},
{text:"Unknown",type:"earbat"}
]
},

{
question:"BRO I HAVE NEWS.",
answers:[
{text:"Continue",type:"bread"},
{text:"Panic",type:"chaos"},
{text:"Report To GARBAT",type:"refrigerator"},
{text:"BRO I HAVE NEWS",type:"chaos"}
]
},

{
question:"Pick A Fight",
answers:[
{text:"BRED",type:"boss_bred"},
{text:"Quantum Mango",type:"boss_mango"},
{text:"Earbat",type:"boss_earbat"},
{text:"Refrigerator",type:"boss_fridge"}
]
}

);

function answerQuestion(type){

    if(type==="boss_bred"){
        finalBoss="BRED";
    }

    if(type==="boss_mango"){
        finalBoss="Quantum Mango";
    }

    if(type==="boss_earbat"){
        finalBoss="Earbat";
    }

    if(type==="boss_fridge"){
        finalBoss="Refrigerator";
    }

    if(
        type!=="boss_bred" &&
        type!=="boss_mango" &&
        type!=="boss_earbat" &&
        type!=="boss_fridge"
    ){

        scores[type]++;

    }

    currentQuestion++;

    if(currentQuestion >= questions.length){

        startBossFight();

        return;

    }

    showQuestion();

}

function startBossFight(){

    let roll = Math.random();

    if(finalBoss==="BRED"){

        if(roll < 0.5){

            startReactionTest();

        }else{

            startBreadEscape();

        }

    }

    else if(finalBoss==="Quantum Mango"){

        if(roll < 0.5){

            startReactionTest();

        }else{

            startMangoInspection();

        }

    }

    else if(finalBoss==="Earbat"){

        if(roll < 0.5){

            startReactionTest();

        }else{

            startEarbatAmbush();

        }

    }

    else{

        if(roll < 0.5){

            startReactionTest();

        }else{

            startFridgeShutdown();

        }

    }

}
function startReactionTest(){

    reactionRound = 1;
    reactionScore = 0;

    showReactionRound();

}

function showReactionRound(){

    let correctKey =
    reactionKeys[
    Math.floor(Math.random()*4)
    ];

    currentCorrectKey =
    correctKey;

    document.querySelector(".card").innerHTML = `

    <h1>Reaction Test</h1>

    <p>
    Round ${reactionRound}/5
    </p>

    <h2 id="target">
    ?
    </h2>

    <button onclick="reactionAnswer('W')">W</button>
    <button onclick="reactionAnswer('A')">A</button>

    <br><br>

    <button onclick="reactionAnswer('S')">S</button>
    <button onclick="reactionAnswer('D')">D</button>

    `;

    setTimeout(function(){

        document
        .getElementById("target")
        .innerText =
        correctKey;

    },500);

    reactionTimer =
    setTimeout(function(){

        reactionAnswer("TIMEOUT");

    },2500);

}

document.addEventListener(
"keydown",
function(e){

    let key =
    e.key.toUpperCase();

    if(
    key==="W"||
    key==="A"||
    key==="S"||
    key==="D"
    ){

        reactionAnswer(key);

    }

});

function reactionAnswer(choice){

    clearTimeout(
    reactionTimer
    );

    if(choice===currentCorrectKey){

        reactionScore++;

    }

    reactionRound++;

    if(reactionRound>5){

        finishFight(
        reactionScore>=4
        );

        return;

    }

    showReactionRound();

}
