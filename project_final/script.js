// ========================== Main =====================================
var information1 = [
    {
        id     : 1,
        img    : "img/test-english-home-Grammar-points.jpg",
        title  : "Grammar lessons",
        detail : "Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!",
        color  : "#198dc1",
    },
    {
        id     : 2,
        img    : "img/Listening.jpg",
        title  : "Listening Tests",
        detail : "Improve your listening skills by practicing with audio and video tests. There are tests for each level: A1, A2, B1, B1+, B2. You will be able to see the transcription of the audio after you submit your answers.",
        color  : "#fecc00",
    },
    {
        id     :3,
        img    :"img/Reading.webp", 
        title  :"Reading Tests",
        detail :"Need to improve your reading skills? Work on our reading tests. There are reading tests for A1, A2, B1, B1+ and B2. You will find different types of texts and there are different types of questions in each test.",
        color  :"#ee1b24",
    },
    {
        id     :4,
        img    :"img/Use_of_english.webp", 
        title  :"Use of english Tests",
        detail :"In each of these tests you will find 15 multiple-choice questions about the different grammar lessons that you have studied for a specific level: A1, A2, B1, B1+ and B2.  You will get feedback for every answer.",
        color  :"#eb6925;",
    },
    {
        id     :5,
        img    :"img/Writing.jpg", 
        title  :"Writing Lesson",
        detail :"Improve your writing with the exercises suggested in each lesson. Different types of texts for each level: A1, A2, B1, B1+, or B2. You will learn how to organise and connect the text in your compositions.",
        color  :"#a84d9a",
    },
    {
        id     :6,
        img    :"img/Exam.webp", 
        title  :"Exam",
        detail :"Improve your exam skills and achieve better results with our practice materials. Test-English will help you with your Cambridge KEY, Cambridge Preliminary, Cambridge First, IELTS, or TOEFL iBT exam.",
        color  :"#4ca930",
    },
    {
        id     :7,
        img    :"img/Level.webp", 
        title  :"Level Test",
        detail :"If you are not sure about your level, don't worry, you can take this online test. There are 60 multiple-choice questions and there is no time limit. You will be able to see the answers when you finish the test.",
        color  :"#4ca930",
    },
    {
        id     :8,
        img    :"img/Vocabulary.webp", 
        title  :"Vocabulary Lessons",
        detail :"Boost your vocabulary with exercises tailored for each level: A1, A2, B1, B1+, B2. Every lesson features keywords, definitions, pictures and quizzes with personalized feedback to enhance your learning.",
        color  :"rgb(238,44,130)",
    },
    {
        id     :9,
        img    :"img/Online_course.webp", 
        title  :"Online Course",
        detail :"If you are not sure about your level, don't worry, you can take this online test. There are 60 multiple-choice questions and there is no time limit. You will be able to see the answers when you finish the test.",
        color  :"#00093f",
    },
]
var result1 = '';
information1.forEach(el => {
    result1 += `
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="col-11 bg-light mx-auto rounded-3 overflow-hidden border border-light shadow mb-5">
                <img src="${el.img}" alt="" width="100%">
                <div class="text p-2">
                    <h3 style="color: ${el.color};" class="my-3">${el.title}</h3>
                    <p class="fs-6" style="color: rgb(114, 114, 114); line-height: 20px;">
                        ${el.detail}
                    </p>
                    <button class="btn btn-outline-primary"
                        style="
                            border: 1px solid ${el.color}; 
                            --bs-btn-hover-bg: ${el.color};
                            --bs-btn-color: ${el.color};
                        ">
                        Go to the lessons
                    </button>
                </div>
            </div>
        </div>
    `;
});
var demo = document.querySelector('#demo').innerHTML = result1;
// ==========================================================

var information2 = [
    {
        id     : 1,
        img    : "img/A2-Multi_choise.webp",
        detail : "A<small>2</small> English test <small>10</small> - multiple choise questions",
    },
    {
        id     : 2,
        img    : "img/Compound-adj.webp",
        detail : "Compound adjectives in English",
    },
    {
        id     : 3,
        img    : "img/listening-test.webp",
        detail : "Are exams necessay? - B<small>1</small>English listening test",
    },
    {
        id     : 4,
        img    : "img/Reading-test.webp",
        detail : "Seeding clousd to make rain - B<small>1+</small> English Reading test",
    },
    {
        id     : 5,
        img    : "img/How-to-write-article.webp",
        detail : "How to write an acticle - B<small>1</small> Preliminary (PET) Exam",
    },
    {
        id     : 6,
        img    : "img/A1-Multi_choise.webp",
        detail : "A<small>1</small> English test <small>10</small> - multiple choise questions",
    },
]
var result2 = '';
information2.forEach(el => {
    result2 +=`
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
            <div class="bg-light mx-auto rounded-3 overflow-hidden border border-light shadow mb-5" style="height: 180px; width: 180px;">
                <img src="${el.img}" class="img-fluid" alt="">
                <div class="text p-2">
                    <p class="fs-6" style="color: rgb(114, 114, 114); line-height: 18px;">
                        ${el.detail}
                    </p>
                </div>
            </div>
        </div>         
    `;
});
var more = document.querySelector('#more').innerHTML = result2;
// ============== Btn Login And Sign up ===============
var btn_login       = document.querySelector('#btn-login');
var btn_signup      = document.querySelector('#btn-signup');
var form_login      = document.querySelector('.form-login');
var form_signup     = document.querySelector('.form-signup');
var f_password      = document.querySelector('.f-password');
var btn_cr_acc      = document.querySelector('#btn-cr-acc');
var signup_exit     = document.querySelector('#signup-exit');
var login_exit      = document.querySelector('#login-exit');
var f_password_exit = document.querySelector('#f-password-exit');
var had_acc         = document.querySelector('#had-acc');
var forgot_acc      = document.querySelector('#forgot-acc');

btn_login.addEventListener('click',function() {
    // alert(1290)
    form_login.classList.remove('d-none');
})
btn_signup.addEventListener('click',function() {
    // alert(9090)
    form_signup.classList.remove('d-none');
})
btn_cr_acc.addEventListener('click',function() {
    // alert(90);
    form_login.classList.add('d-none');
    form_signup.classList.remove('d-none');
})
signup_exit.addEventListener('click',function() {
    form_signup.classList.add('d-none');
})
login_exit.addEventListener('click',function() {
    form_login.classList.add('d-none');
})
had_acc.addEventListener('click',function() {
    form_login.classList.remove('d-none');
    form_signup.classList.add('d-none');
})
forgot_acc.addEventListener('click',function() {
    form_login.classList.add('d-none');
    f_password.classList.remove('d-none');
})
f_password_exit.addEventListener('click',function() {
    f_password.classList.add('d-none');
})