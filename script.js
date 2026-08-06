let finalClassification = "";
let certificateID = "";
let finalBoss = "";
let bossResult = "";

let username = "";

let currentQuestion = 0;

let reactionRound = 0;
let reactionScore = 0;

let scores = {

bread:0,
mango:0,
earbat:0,
refrigerator:0,
chaos:0

};

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

}
questions.push(

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
},

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
}

);

function showQuestion(){

    let q =
    questions[currentQuestion];

    let progress =
    ((currentQuestion + 1)
    / questions.length)
    * 100;

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
    ${remaining}
    Remaining
    </p>

    <div class="progress-bar">

        <div
        class="progress-fill"
        style="width:${progress}%">

        </div>

    </div>

    <br>

    <h2>
    ${q.question}
    </h2>

    ${buttons}

    `;

}

function answerQuestion(type){

    scores[type]++;

    currentQuestion++;

    if(
    currentQuestion >=
    questions.length
    ){

        showBossSelection();

        return;

    }

    showQuestion();

}
function showBossSelection(){

    document.querySelector(".card").innerHTML = `

    <h1>GARBAT</h1>

    <h2>
    Choose Your Boss
    </h2>

    <br>

    <button onclick="selectBoss('BRED')">
    🥖 BRED
    </button>

    <br><br>

    <button onclick="selectBoss('Quantum Mango')">
    🥭 Quantum Mango
    </button>

    <br><br>

    <button onclick="selectBoss('Earbat')">
    🦇 Earbat
    </button>

    <br><br>

    <button onclick="selectBoss('Refrigerator')">
    🧊 Refrigerator
    </button>

    `;

}

function selectBoss(boss){

    finalBoss = boss;

    startBossFight();

}

function startBossFight(){

    let roll =
    Math.random();

    if(roll < 0.5){

        startReactionTest();

    }

    else{

        if(finalBoss==="BRED"){

            startBreadEscape();

        }

        else if(finalBoss==="Quantum Mango"){

            startMangoInspection();

        }

        else if(finalBoss==="Earbat"){

            startEarbatAmbush();

        }

        else{

            startFridgeShutdown();

        }

    }

}

let correctColor = "";

function startReactionTest(){

    reactionRound = 1;
    reactionScore = 0;

    showReactionRound();

}

function showReactionRound(){

    let colors = [
    "red",
    "blue",
    "lime",
    "yellow"
    ];

    correctColor =
    colors[
    Math.floor(
    Math.random()*4
    )
    ];

    document.querySelector(".card").innerHTML = `

    <h1>
    Reaction Test
    </h1>

    <p>
    Round ${reactionRound}/5
    </p>

    <br>

    <button
    style="background:red"
    onclick="reactionAnswer('red')">
    </button>

    <br><br>

    <button
    style="background:blue"
    onclick="reactionAnswer('blue')">
    </button>

    <br><br>

    <button
    style="background:lime"
    onclick="reactionAnswer('lime')">
    </button>

    <br><br>

    <button
    style="background:yellow;color:black"
    onclick="reactionAnswer('yellow')">
    </button>

    `;

    setTimeout(function(){

        let buttons =
        document.querySelectorAll(
        ".card button"
        );

        let index = {

            red:0,
            blue:1,
            lime:2,
            yellow:3

        };

        buttons[
        index[correctColor]
        ].style.boxShadow =
        "0 0 30px white";

    },500);

}

function reactionAnswer(choice){

    if(choice===correctColor){

        reactionScore++;

    }

    reactionRound++;

    if(reactionRound > 5){

        finishFight(
        reactionScore >= 4
        );

        return;

    }

    showReactionRound();

}

function startBreadEscape(){

    let answer =
    prompt(
    "Type TOAST"
    );

    finishFight(
    answer &&
    answer.toUpperCase()
    === "TOAST"
    );

}

function startMangoInspection(){

    let answer =
    prompt(
    "12 + 17 = ?"
    );

    finishFight(
    Number(answer)===29
    );

}

function startEarbatAmbush(){

    let answer =
    prompt(
    "Type EARBAT"
    );

    finishFight(
    answer &&
    answer.toUpperCase()
    === "EARBAT"
    );

}

function startFridgeShutdown(){

    let answer =
    prompt(
    "8 × 7 = ?"
    );

    finishFight(
    Number(answer)===56
    );

}

function finishFight(victory){

    bossResult =
    victory
    ? "VICTORY"
    : "DEFEAT";

    showResults();

}
function getBossImage(){

    if(finalBoss==="BRED")
    return "bred.png";

    if(finalBoss==="Quantum Mango")
    return "Quantum Mango.png";

    if(finalBoss==="Earbat")
    return "earbat.png";

    return "Refrigerator.png";

}

function showResults(){

    let highest =
    "bread";

    for(let key in scores){

        if(
        scores[key] >
        scores[highest]
        ){

            highest =
            key;

        }

    }

    finalClassification =
    highest;

    certificateID =
    "GARBAT-" +
    Math.floor(
    10000 +
    Math.random()*90000
    );

    let today =
    new Date()
    .toLocaleDateString();

    document.querySelector(".card").innerHTML = `

    <div id="certificate">

    <h1>GARBAT</h1>

    <h2>
    Official Report
    </h2>

    <hr>

    <p>
    <b>Citizen:</b>
    ${username}
    </p>

    <p>
    <b>Classification:</b>
    ${finalClassification}
    </p>

    <p>
    <b>Boss:</b>
    ${finalBoss}
    </p>

    <img
    src="${getBossImage()}"
    style="
    width:120px;
    margin:15px 0;
    ">

    <p>
    <b>Result:</b>
    ${bossResult}
    </p>

    <p>
    <b>ID:</b>
    ${certificateID}
    </p>

    <p>
    <b>Date:</b>
    ${today}
    </p>

    <br>

    <button
    onclick="downloadCertificate()">
    Download Certificate
    </button>

    <br><br>

    <button
    onclick="location.reload()">
    New Assessment
    </button>

    </div>

    `;

}

function downloadCertificate(){

    let certificate =
    document.getElementById(
    "certificate"
    );

    html2canvas(
    certificate
    ).then(function(canvas){

        let link =
        document.createElement(
        "a"
        );

        link.download =
        username +
        "_GARBAT_Certificate.png";

        link.href =
        canvas.toDataURL(
        "image/png"
        );

        link.click();

    });

}
