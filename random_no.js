
let range = document.getElementById("range");
let enter = document.getElementById('enter');

document.getElementById('input').style.display = "none";
document.getElementById('guess').style.display = "none";
enter.addEventListener('click', () => {
    if ((parseInt(range.value)) >= 2) {

        console.log(parseInt(range.value)); //To print the range on console

        range.style.display = "none";
        enter.style.display = "none";

        document.getElementById('input').style.display = "inline-block";
        document.getElementById('guess').style.display = "inline-block";

        document.getElementById('label').innerHTML = 'Please Enter Your Guess Below';
        let l = parseInt(range.value);

        let no = Math.floor(Math.random() * (parseInt(range.value)));
        var guess = document.getElementById("input");
        console.log(no); //To print the guessed value on console

        let c = 0;
        let btn = document.getElementById('guess');
        btn.addEventListener('click', () => {
            let g = parseInt(guess.value);
            console.log(g, no);
            document.getElementById('input').value = '';
            setTimeout(()=>{
                document.getElementById('label').innerHTML='';
            },300);
            if (g == no) {
                document.getElementById('input').style.display = "none";
                document.getElementById('guess').style.display = "none";
                document.getElementById('label').style.display = "none";
                let v = document.createElement('p');
                v.innerHTML = `Hurray!!!! your guess is correct and your score is ${c + 1}.`;
                document.getElementById('box').appendChild(v);
            }
            else if (g < no) {
                setTimeout(() => {
                    document.getElementById('label').innerHTML = "Your guess is low. Try again";
                }, 500);

            }
            else {
                setTimeout(() => {
                    document.getElementById('label').innerHTML = "Your guess is high. Try again";
                }, 500);
            }
            c += 1;
            console.log(c);
        })

    }
    else {
        document.getElementById('label').innerHTML = "please enter a valid input";
    }

}) 