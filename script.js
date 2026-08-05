let finalClassification = "";
let certificateID = "";
let finalBoss = "";

let username = "";

let currentQuestion = 0;

let scores = {
    bread: 0,
    mango: 0,
    earbat: 0,
    refrigerator: 0,
    chaos: 0
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
}
];
questions.push(

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
},

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

function continueAssessment(){

    username =
    document.querySelector("input").value;

    if(username.trim()===""){

        document.querySelector(".card").innerHTML = `

        <h1>GARBAT</h1>

        <h2>Identification Failed</h2>

        <p>
        GARBAT requires identification.
        </p>

        <br>

        <button onclick="location.reload()">
        Try Again
        </button>

        `;

        return;
    }

    document.querySelector(".card").innerHTML = `

    <h1>GARBAT</h1>

    <h2>Welcome, ${username}</h2>

    <p>
    GARBAT has acknowledged your existence.
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

function showQuestion(){

    let q =
    questions[currentQuestion];

    let progress =
    ((currentQuestion+1) /
    questions.length) * 100;

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
}
function answerQuestion(type){

    if(type === "boss_bred"){
        finalBoss = "BRED";
    }

    if(type === "boss_mango"){
        finalBoss = "Quantum Mango";
    }

    if(type === "boss_earbat"){
        finalBoss = "Earbat";
    }

    if(type === "boss_fridge"){
        finalBoss = "Refrigerator";
    }

    if(
        type !== "boss_bred" &&
        type !== "boss_mango" &&
        type !== "boss_earbat" &&
        type !== "boss_fridge"
    ){
        scores[type]++;
    }

    currentQuestion++;

    if(currentQuestion >= questions.length){

        showResults();
        return;

    }

    showQuestion();
}

function showResults(){

    let highest = "bread";

    for(let key in scores){

        if(scores[key] > scores[highest]){

            highest = key;

        }
    }

    finalClassification =
    "Bread Citizen";

    if(highest==="mango")
    finalClassification =
    "Quantum Mango Inspector";

    if(highest==="earbat")
    finalClassification =
    "Earbat Negotiator";

    if(highest==="refrigerator")
    finalClassification =
    "Refrigerator Mediator";

    if(
        scores.chaos >= 8 &&
        highest==="chaos"
    ){
        finalClassification =
        "DIRECTOR OF BRED";
    }

    certificateID =
    "GARBAT-" +
    Math.floor(
        10000 +
        Math.random()*90000
    );

    let today =
    new Date().toLocaleDateString();

    document.querySelector(".card").innerHTML = `

    <h1>GARBAT</h1>

    <h2>
    OFFICIAL COMPATIBILITY REPORT
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
    <b>Assessment ID:</b>
    ${certificateID}
    </p>

    <p>
    <b>Final Confrontation:</b>
    </p>

    <img
    src="${getBossImage()}"
    style="
    width:90px;
    margin-top:5px;
    ">

    <p>
    ${finalBoss}
    </p>

    <p>
    <b>Date:</b>
    ${today}
    </p>

    <hr>

    <p
    style="
    font-size:12px;
    opacity:0.7;
    ">
    (JUST FOR NONSENSE:
    NOT TO BE TAKEN SERIOUSLY)
    </p>

    <br>

    <button onclick="downloadCertificate()">
    Download Certificate
    </button>

    <br><br>

    <button onclick="location.reload()">
    New Assessment
    </button>

    `;
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

function downloadCertificate(){

    let text =

`GARBAT OFFICIAL COMPATIBILITY REPORT

Citizen:
${username}

Classification:
${finalClassification}

Assessment ID:
${certificateID}

Final Confrontation:
${finalBoss}

Generated By:
Government Agency Ran by A Toaster`;

    let blob =
    new Blob(
    [text],
    {type:"text/plain"}
    );

    let link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    username +
    "_GARBAT_Certificate.txt";

    link.click();
}
