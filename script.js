const conrrectAns = ["A","B"];
const questNumb = 2;

const form = document.querySelector(".quiz-form");

function percent (res){
    let score;
    if (res==0){
        score = 0;
    }else{
        score = (100*res)/questNumb;
    }
    return score;
}

form.addEventListener("submit", e=>{
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value];
    //check
    userAns.forEach((answer,index)=>{
        if(answer === conrrectAns[index]){
            score++;
        }
    });
    console.log(percent(score));
});