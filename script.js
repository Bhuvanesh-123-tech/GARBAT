let username = "";

let currentQuestion = 0;

let scores = {

bread:0,
mango:0,
earbat:0,
refrigerator:0,
chaos:0

};

let finalClassification = "";
let finalBoss = "";
let certificateID = "";

let selectedBoss = "";

let reactionRound = 0;
let reactionScore = 0;
let reactionTimer = null;
let currentCorrectKey = "";

const reactionKeys = [

"W",
"A",
"S",
"D"

];

const questions = [

{
question:"Choose a breakfast.",
answers:[
{text:"Toast",type:"bread"},
{text:"Quantum Mango",type:"mango"},
{text:"Bat Soup",type:"earbat"},
{text:"Ice Cubes",type:"refrigerator"}
]
},

{
question:"Choose a hobby.",
answers:[
{text:"Baking Bread",type:"bread"},
{text:"Quantum Research",type:"mango"},
{text:"Listening To Wall Noises",type:"earbat"},
{text:"Organising Refrigerators",type:"refrigerator"}
]
},

{
question:"Choose a weapon.",
answers:[
{text:"Bread Launcher",type:"bread"},
{text:"Quantum Cannon",type:"mango"},
{text:"Sonic Ear Screech",type:"earbat"},
{text:"Frozen Refrigerator",type:"refrigerator"}
]
},

{
question:"Choose a vehicle.",
answers:[
{text:"Toastmobile",type:"bread"},
{text:"Quantum Train",type:"mango"},
{text:"Flying Earbat",type:"earbat"},
{text:"Rolling Fridge",type:"refrigerator"}
]
},

{
question:"Which sounds most useful?",
answers:[
{text:"Infinite Bread",type:"bread"},
{text:"Quantum Mango Engine",type:"mango"},
{text:"Earbat Radar",type:"earbat"},
{text:"Self Cooling Refrigerator",type:"refrigerator"}
]
},

{
question:"Press the weirdest option.",
answers:[
{text:"Bread",type:"bread"},
{text:"Quantum Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"Government Agency Ran By A Toaster",type:"chaos"}
]
},

{
question:"Choose A Bread.",
answers:[
{text:"White Bread",type:"bread"},
{text:"Quantum Mango Bread",type:"mango"},
{text:"Earbat Bread",type:"earbat"},
{text:"Frozen Bread",type:"refrigerator"}
]
},

{
question:"Choose A Place.",
answers:[
{text:"Bakery",type:"bread"},
{text:"Laboratory",type:"mango"},
{text:"Cave",type:"earbat"},
{text:"Refrigerator Factory",type:"refrigerator"}
]
},

{
question:"Pick A Power.",
answers:[
{text:"Bread Multiplication",type:"bread"},
{text:"Quantum Manipulation",type:"mango"},
{text:"Ultra Hearing",type:"earbat"},
{text:"Absolute Cooling",type:"refrigerator"}
]
},

{
question:"Pick A Pet.",
answers:[
{text:"Bread Dog",type:"bread"},
{text:"Quantum Mango",type:"mango"},
{text:"Earbat",type:"earbat"},
{text:"Mini Fridge",type:"refrigerator"}
]
}

];function continueAssessment(){

    let input =
    document.getElementById(
    "usernameInput"
    );

    username =
    input.value.trim();

    if(username === ""){

        alert(
        "Enter your name first."
        );

        return;

    }

    beginAssessment();

}

function beginAssessment(){

    currentQuestion = 0;

    scores = {

    bread:0,
    mango:0,
    earbat:0,
    refrigerator:0,
    chaos:0

    };

    showQuestion();

}

function showQuestion(){

    let q =
    questions[
    currentQuestion
    ];

    let answersHTML = "";

    q.answers.forEach(answer => {

        answersHTML += `

        <button
        onclick="
        answerQuestion(
        '${answer.type}'
        )
        ">
        ${answer.text}
        </button>

        <br><br>

        `;

    });

    document.querySelector(
    ".card"
    ).innerHTML = `

    <h1>
    GARBAT
    </h1>

    <p>
    Question
    ${currentQuestion+1}
    /
    ${questions.length}
    </p>

    <h2>
    ${q.question}
    </h2>

    <br>

    ${answersHTML}

    `;

}

function answerQuestion(type){

    if(
    scores[type]
    !== undefined
    ){

        scores[type]++;

    }

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

    document.querySelector(
    ".card"
    ).innerHTML = `

    <h1>
    GARBAT
    </h1>

    <h2>
    Pick A Fight
    </h2>

    <br>

    <button
    onclick="
    selectBoss(
    'BRED'
    )
    ">
    BRED
    </button>

    <br><br>

    <button
    onclick="
    selectBoss(
    'Quantum Mango'
    )
    ">
    Quantum Mango
    </button>

    <br><br>

    <button
    onclick="
    selectBoss(
    'Earbat'
    )
    ">
    Earbat
    </button>

    <br><br>

    <button
    onclick="
    selectBoss(
    'Refrigerator'
    )
    ">
    Refrigerator
    </button>

    `;

}

function selectBoss(boss){

    selectedBoss = boss;
    finalBoss = boss;

    chooseBossMinigame();

}

function chooseBossMinigame(){

    if(selectedBoss === "BRED"){

        let roll =
        Math.random();

        if(roll < 0.50){

            startReactionTest();

        }

        else if(roll < 0.75){

            startMathQuiz();

        }

        else{

            startDodgeGame();

        }

    }

    else if(
    selectedBoss ===
    "Quantum Mango"
    ){

        let roll =
        Math.random();

        if(roll < 0.25){

            startReactionTest();

        }

        else if(roll < 0.75){

            startMathQuiz();

        }

        else{

            startDodgeGame();

        }

    }

    else if(
    selectedBoss ===
    "Earbat"
    ){

        let roll =
        Math.random();

        if(roll < 0.50){

            startReactionTest();

        }

        else{

            startDodgeGame();

        }

    }

    else{

        let roll =
        Math.random();

        if(roll < 0.33){

            startReactionTest();

        }

        else if(roll < 0.66){

            startMathQuiz();

        }

        else{

            startDodgeGame();

        }

    }

}function startReactionTest(){

    reactionRound = 1;
    reactionScore = 0;

    showReactionRound();

}

function showReactionRound(){

    clearTimeout(
    reactionTimer
    );

    currentCorrectKey =

    reactionKeys[
    Math.floor(
    Math.random()*4
    )
    ];

    document.querySelector(
    ".card"
    ).innerHTML = `

    <h1>GARBAT</h1>

    <h2>
    Reaction Test
    </h2>

    <p>
    Round
    ${reactionRound}/5
    </p>

    <p>
    Score:
    ${reactionScore}
    </p>

    <br>

    <div
    style="
    display:grid;
    grid-template-columns:
    1fr 1fr;
    gap:15px;
    "
    >

    <button
    id="btnW"
    onclick="reactionAnswer('W')">
    W
    </button>

    <button
    id="btnA"
    onclick="reactionAnswer('A')">
    A
    </button>

    <button
    id="btnS"
    onclick="reactionAnswer('S')">
    S
    </button>

    <button
    id="btnD"
    onclick="reactionAnswer('D')">
    D
    </button>

    </div>

    `;

    setTimeout(function(){

        document
        .getElementById(
        "btn"+currentCorrectKey
        )
        .style.boxShadow =
        "0 0 30px cyan";

    },500);

}

function reactionAnswer(choice){

    if(
    choice ===
    currentCorrectKey
    ){

        reactionScore++;

    }

    reactionRound++;

    if(
    reactionRound > 5
    ){

        finishFight(
        reactionScore >= 4
        );

        return;

    }

    showReactionRound();

}

function startMathQuiz(){

    let a =
    Math.floor(
    Math.random()*20
    )+1;

    let b =
    Math.floor(
    Math.random()*20
    )+1;

    let answer =
    a+b;

    let user =
    prompt(
    `${a} + ${b} = ?`
    );

    finishFight(
    Number(user)
    === answer
    );

}

function startDodgeGame(){

    let success =
    Math.random() > 0.4;

    finishFight(
    success
    );

}

function finishFight(win){

    document.querySelector(
    ".card"
    ).innerHTML = `

    <h1>GARBAT</h1>

    <h2>

    ${
    win
    ?
    "VICTORY"
    :
    "DEFEAT"
    }

    </h2>

    <p>

    ${
    win
    ?
    "Boss Defeated"
    :
    "Boss Survived"
    }

    </p>

    <br>

    <button
    onclick="
    showResults()
    ">
    Continue
    </button>

    `;

}

function showResults(){

    let highest =
    "bread";

    for(
    let key
    in scores
    ){

        if(
        scores[key]
        >
        scores[highest]
        ){

            highest =
            key;

        }

    }

    finalClassification =
    "Bread Citizen";

    if(
    highest ===
    "mango"
    ){

        finalClassification =
        "Quantum Mango Inspector";

    }

    if(
    highest ===
    "earbat"
    ){

        finalClassification =
        "Earbat Negotiator";

    }

    if(
    highest ===
    "refrigerator"
    ){

        finalClassification =
        "Refrigerator Mediator";

    }

    certificateID =

    "GARBAT-" +

    Math.floor(
    10000+
    Math.random()*90000
    );

    document.querySelector(
    ".card"
    ).innerHTML = `

    <h1>
    GARBAT
    </h1>

    <h2>
    Compatibility Report
    </h2>

    <p>
    Citizen:
    ${username}
    </p>

    <p>
    Classification:
    ${finalClassification}
    </p>

    <p>
    Boss:
    ${finalBoss}
    </p>

    <p>
    ID:
    ${certificateID}
    </p>

    <br>

    <button
    onclick="
    downloadCertificate()
    ">
    Download Certificate
    </button>

    <br><br>

    <button
    onclick="
    location.reload()
    ">
    New Assessment
    </button>

    `;

}

function downloadCertificate(){

    let text =

`GARBAT OFFICIAL REPORT

Citizen:
${username}

Classification:
${finalClassification}

Boss:
${finalBoss}

ID:
${certificateID}

Government Agency Ran By A Toaster`;

    let blob =
    new Blob(
    [text],
    {
    type:
    "text/plain"
    }
    );

    let link =
    document.createElement(
    "a"
    );

    link.href =
    URL.createObjectURL(
    blob
    );

    link.download =

    username +

    "_GARBAT_Report.txt";

    link.click();

}
