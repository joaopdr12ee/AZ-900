

container = document.querySelector('.container');
question = document.getElementById('question');
answer = document.getElementById('question-answer');


questions = ['files/1.png','https://img.itexams.com/assets/media/exam-media/04227/0005800001.jpg','files/3.png','files/4.png','files/5.png','files/6.png','files/7.png','files/8.jpg','files/9.png'
,'files/10.png','files/11.png','files/12.png','files/13.png','files/14.png','files/15.png','files/16.png','files/17.png','files/18.png','files/19.png','files/20.png','files/21.png','files/22.png'
,'files/23.png','files/24.png','files/25.png','files/26.png','files/27.png','files/28.png','files/29.png','files/30.png','files/31.png','files/32.png','files/33.png','files/34.png','files/35.png'
,'files/36.png','files/37.png','files/38.png','files/39.png','files/40.png','files/41.png','files/42.png','files/43.png','files/44.png','files/45.png','files/46.png','files/47.png','files/48.png'
,'files/49.png','files/50.png','files/51.png','files/52.png','files/53.png','files/54.png','files/55.png','files/56.png','files/57.png','files/58.png','files/59.png','files/60.png'];



answers = ['https://img.itexams.com/assets/media/exam-media/04227/0005700002.png', 'https://img.itexams.com/assets/media/exam-media/04227/0005900001.jpg','files/3a.png','files/4a.jpg','files/5a.png','files/6a.png','files/7a.png','files/8a.jpg','files/9a.png'
,'files/10a.png','files/11a.png','files/12a.png','files/13a.png','files/14a.png','files/15a.png','files/16a.png','files/17a.png','files/18a.png','files/19a.png','files/20a.png','files/21a.png','files/22a.png'
,'files/23a.png','files/24a.png','files/25a.png','files/26a.png','files/27a.png','files/28a.png','files/29a.png','files/30a.png','files/31a.png','files/32a.png','files/33a.png','files/34a.png','files/35a.png'
,'files/36a.png','files/37a.png','files/38a.png','files/39a.png','files/40a.png','files/41a.png','files/42a.png','files/43a.png','files/44a.png','files/45a.png','files/46a.png','files/47a.png','files/48a.png'
,'files/49a.png','files/50a.png','files/51a.png','files/52a.png','files/53a.png','files/54a.png','files/55a.png','files/56a.png','files/57a.png','files/58a.png','files/59a.png','files/60a.png'];

id=[];



function generate_id(){
    
    while(id.length != 30){
        let min = 0;
        let max = 59;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if(id.includes(randomNumber)){
            console.log('repeated number');
        }else{
            id.push(randomNumber);
            console.log(randomNumber);
        }
    }

}


function display_questions(){
    i = 0;

    while(i < 30){
        r = id[i];
        container.innerHTML += ` <label id='question-number'>Question ${i+1}</label><br> <img src='${questions[r]}'alt='' id='question'> <div class='answer'>        <button class='reveal' value='${i}' onclick='reveal(this.value)'>Reveal Answer</button>         <div class='correct-answer' id='${i}' style='display: none;'>             <img src='${answers[r]}' alt='' >         </div>         <p>Did you answer to it <button id='y' value='y' onclick='correct(this.value)'>Correctly</button> or <button id='n' value='n' onclick='wrong(this.value)'>Wrong</button>?</p>   </div>   `
        i++;
    }
    container.innerHTML += "<button onclick='result()'>Reveal Results</button>"
    container.innerHTML += "<br>"
    container.innerHTML += "<br>"
    container.innerHTML += "<br>"
    container.innerHTML += "<br>"
    container.innerHTML += "<input type='text' class='c' name='' id='c' value=''>"
    container.innerHTML += "<br>"
    container.innerHTML += "<br>"
    container.innerHTML += "<br>"
    container.innerHTML += "<input type='text' class='w' name='' id='w' value=''>"
}


generate_id();
display_questions();




function reveal(ids){
    answer_display = document.getElementById(ids);
    answer_display.style.display = 'flex';

}

correct_list = [];
wrong_list = [];

function correct(prc){
    correct_list.push(prc);
    alert('Registered');
}
function wrong(prcw){
    wrong_list.push(prcw);
    alert('Registered');
}

w = document.getElementById('w');
c = document.getElementById('c');


function result(){
    c_value = correct_list.length/30;
    c_value = c_value*100;
    
    w_value = wrong_list.length/30;
    w_value = w_value*100;

    c.value = "Correct: " + c_value + "%";
    w.value = "Wrong: " + w_value + "%";
}