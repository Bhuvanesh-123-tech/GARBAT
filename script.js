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
let music =
document.getElementById("bgm");

if(music){

    music.volume = 0.15;

    music.play().catch(() => {});

}
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

if(finalClassification==="The Forbidden Loaf")
return "forbidden-loaf.png";

if(finalClassification==="Toast Whisperer")
return "toast-whisperer.png";

if(finalClassification==="Fruit Sandwich")
return "fruit-sandwich.png";

if(finalClassification==="Certified Breakfast")
return "certified-breakfast.png";

if(finalClassification==="Reality Auditor")
return "reality-auditor.png";

if(finalClassification==="Unstable Produce")
return "unstable-produce.png";

if(finalClassification==="Cooling System Failure")
return "cooling-system-failure.png";

if(finalClassification==="Quantum Observer")
return "Quantum-Observer.png";

if(finalClassification==="Thermal Negotiator")
return "thermal-negotiator.png";

if(finalClassification==="Frozen Mango Incident")
return "frozen-mango-incident.png";

return "";
}
function showResults(){

    let specialCertificate =

finalClassification ===
"Unknown GARBAT Entity";
    
    let highest = "bread";

    for(let key in scores){

        if(
        scores[key] >
        scores[highest]
        ){

            highest = key;

        }

    }

    let topScores = [];

    for(let key in scores){

        if(
        scores[key] ===
        scores[highest]
        ){

            topScores.push(key);

        }

    }

    if(topScores.length > 1){

        let combo =
        topScores.sort().join("-");

        if(combo==="bread-chaos")
        finalClassification =
        "The Forbidden Loaf";

        else if(combo==="bread-earbat")
        finalClassification =
        "Toast Whisperer";

        else if(combo==="bread-mango")
        finalClassification =
        "Fruit Sandwich";

        else if(combo==="bread-refrigerator")
        finalClassification =
        "Certified Breakfast";

        else if(combo==="chaos-earbat")
        finalClassification =
        "Reality Auditor";

        else if(combo==="chaos-mango")
        finalClassification =
        "Unstable Produce";

        else if(combo==="chaos-refrigerator")
        finalClassification =
        "Cooling System Failure";

        else if(combo==="earbat-mango")
        finalClassification =
        "Quantum Observer";

        else if(combo==="earbat-refrigerator")
        finalClassification =
        "Thermal Negotiator";

        else if(combo==="mango-refrigerator")
        finalClassification =
        "Frozen Mango Incident";

        else
        finalClassification =
        "Unknown GARBAT Entity";

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

    else if(highest==="refrigerator"){

        finalClassification =
        "Refrigerator Mediator";

    }

    else{

        finalClassification =
        "Director of GARBAT";

    }

    certificateID =
    "GARBAT-" +
    Math.floor(
    10000 +
    Math.random()*90000
    );
    document.querySelector(".card").innerHTML = `

   <div
id="certificate"
class="certificate
${specialCertificate ? "danger-cert" : ""}">
        <div class="cert-header">

            <h1>GARBAT</h1>

            <h3>
            Government Agency Ran By A Toaster
            </h3>

            <p>
            Official Certification Document
            </p>

        </div>

        <hr>

      ${
getSpeciesImage() !== ""
?

`<img
src="${getSpeciesImage()}"
class="cert-species">`

:

`<div class="secret-classification">

⚠ CLASSIFIED ENTITY ⚠

</div>`
}
        <h2 class="cert-rank">

        ${finalClassification}

        </h2>

        ${
        finalClassification==="Director of GARBAT"
        ?

        `
        <h3>

        ★★★★★

        <br>

        HOMO GARBATICUS PRIME

        <br>

        TOO POWERFUL FOR CLASSIFICATION

        </h3>
        `

        :

        ""

        }

        <p class="cert-text">

        This certifies that

        <b>${username}</b>

        has successfully completed the

        GARBAT Compatibility Assessment

        and has been assigned the rank of

        <b>${finalClassification}</b>.

        </p>

        <div class="stats">

            <p>Bread: ${scores.bread}</p>
            <p>Mango: ${scores.mango}</p>
            <p>Earbat: ${scores.earbat}</p>
            <p>Refrigerator: ${scores.refrigerator}</p>
            <p>Chaos: ${scores.chaos}</p>

        </div>

        <hr>

        <div class="cert-footer">

            <div>

                <p>ID</p>

                <b>${certificateID}</b>

            </div>

            <div>

                <p>Date</p>

                <b>
                ${new Date().toLocaleDateString()}
                </b>

            </div>

        </div>

        <br>

        <div class="signature">

    <img
    src="signature.png"
    class="autograph">

    <br>

    Toaster Prime

    <br>

    Supreme Director

    <br>

    GARBAT Headquarters

</div>

        <div class="stamp">

            APPROVED

        </div>

    </div>

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
