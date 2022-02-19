const conrrectAns = ["A","B","B","B"];
const questNumb = document.querySelectorAll(".ask").length;
const point = document.querySelector("#score");

const form = document.querySelector(".quiz-form");

function percent (res){
    let score;
    if (res==0){
        score = 0;
    }
    else{
        score = (100*res)/questNumb;
    }
    return score;
}
form.addEventListener("submit", e=>{
    e.preventDefault();
    let score = 0;
    let userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    
    // form.querySelectorAll(".ask").forEach(q=>{ FALTA INDEX
    //     userAns.push(q.value);
    //     console.log(q.value);
    //     i++;
    // })
    // check
    userAns.forEach((answer,index)=>{
        if(answer === conrrectAns[index]){
            score++;
        }
    });
    scrollTo(0,0);
    score = percent(score);
    point.classList.remove("d-none");
    let i=0;
    const timer=setInterval(()=>{
        point.querySelector("span").textContent=`${i}%`
        if(i===score){
            clearInterval(timer);
        }else{
            i++;
        }
    },10);
});
