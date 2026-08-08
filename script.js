let finalClassification = "";
let certificateID = "";

let username = "";

let currentQuestion = 0;

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

function shuffleArray(array){

    for(
    let i=array.length-1;
    i>0;
    i--
    ){

        let j =
        Math.floor(
        Math.random()*
        (i+1)
        );

        [array[i],array[j]] =
        [array[j],array[i]];

    }

}

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

    shuffleArray(
    questions
    );

    currentQuestion = 0;

    showQuestion();

}
questions.push(

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
question:"Who truly controls GARBAT?",
answers:[
{text:"The Bread",type:"bread"},
{text:"The Mango",type:"mango"},
{text:"The Earbat",type:"earbat"},
{text:"Nobody Knows",type:"chaos"}
]
}

);

function showQuestion(){

    let q =
    questions[currentQuestion];

    shuffleArray(
    q.answers
    );

    let progress =
    ((currentQuestion+1)
    /questions.length)*100;

    let remaining =
    questions.length-
    (currentQuestion+1);

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

}

function answerQuestion(type){

    scores[type]++;

    currentQuestion++;

    if(
    currentQuestion >=
    questions.length
    ){

        showResults();

        return;

    }

    showQuestion();

}

function getSpeciesImage(){

    if(finalClassification==="Bread Citizen")
    return "bred.png";

    if(finalClassification==="Quantum Mango Inspector")
    return "Quantum Mango.png";

    if(finalClassification==="Earbat Negotiator")
    return "earbat.png";

    if(finalClassification==="Refrigerator Mediator")
    return "Refrigerator.png";
    
    if(finalClassification==="Director of GARBAT")
    return "GIGANIGGA.png";

}

function showResults(){

    let highest = "bread";

    for(let key in scores){

        if(
        scores[key] >
        scores[highest]
        ){

            highest = key;

        }

    }

    if(scores.chaos >= 8){

        finalClassification =
        "Director of GARBAT";

    }

    else if(highest==="bread"){

        finalClassification =
        "Bread Citizen";

    }

    else if(highest==="mango"){

        finalClassification =
        "Quantum Mango Inspector";

    }

    else if(highest==="earbat"){

        finalClassification =
        "Earbat Negotiator";

    }

    else{

        finalClassification =
        "Refrigerator Mediator";

    }

    certificateID =
    "GARBAT-" +
    Math.floor(
    10000 +
    Math.random()*90000
    );

    document.querySelector(".card").innerHTML = `

    <div id="certificate">

    <h1>GARBAT</h1>

    <h2>
    Official Compatibility Certificate
    </h2>

    <hr>

    <img
    src="${getSpeciesImage()}"
    style="width:180px;">

    <br><br>

    <p>
    <b>Citizen:</b>
    ${username}
    </p>

    <p>
    <b>Classification:</b>
    ${finalClassification}
    </p>

    <p>
    <b>ID:</b>
    ${certificateID}
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
        "_GARBAT.png";

        link.href =
        canvas.toDataURL(
        "image/png"
        );

        link.click();

    });

}
