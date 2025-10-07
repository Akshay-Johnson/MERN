const btn=document.getElementById('calculate');

btn.addEventListener('click',function(){
    let height=document.querySelector('#height').value;
    let weight=document.querySelector('#weight').value;

    if(height=='' || weight==''){
        alert('Please fill in all the fields');
        return;
    }

    height=height/100;

    let bmi=(weight/(height*height));

    console.log(bmi);

    bmi=bmi.toFixed(2);

    document.querySelector('#result').innerHTML=bmi;

    let status='';
    if(bmi<18.5){
        status='Underweight';
    }  
        
    if(bmi>=18.5 && bmi<24.9){
        status='Normal weight';
    } 
    
    if(bmi>=25 && bmi<29.9){
        status='Overweight';
    }

    document.querySelector('.comment').innerHTML= `comment : you are <span id ="comment">${status}</span>`;
    

});   