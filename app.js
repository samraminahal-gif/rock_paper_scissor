let Userscore=0;
let Compscore=0;
let userWin;


const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const UserscorePara=document.querySelector("#User-score");
const CompscorePara=document.querySelector("#Comp-score");

const genCompChoice=() =>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const DrawGame=() =>{

    msg.innerText ="Game's Draw!";
} ;

const Showwinner=(userWin,userChoice,compChoice) =>{
    if (userWin){
        Userscore++;
        UserscorePara.innerText = Userscore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor ="green";
   }
    else{
        Compscore++;
        CompscorePara.innerText = Compscore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundcolor ="red";
    }
};

const playGame =(userChoice) =>{
    console.log("userchoice =",userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("compchoice=",compChoice)

   if(userChoice === compChoice){
    //Draw Game
    DrawGame();
   }
   else{
    let userWin=true;
    if (userChoice === "rock"){
        // Comp choice scissor,paper
        userWin = compChoice === "Paper" ? false:true;
    }
    else if (userChoice === "paper"){
        // Comp choice rock,scissor
        userWin = compChoice === "scissor" ? false:true;
    }
    else{
        // Comp choice rock,paper
        userWin = compChoice === "rock" ? false:true;
    }
    Showwinner(userWin,userChoice,compChoice);

}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});

