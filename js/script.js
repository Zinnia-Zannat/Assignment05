let heartCount = 0;

    // from navbar
    const heartCountElement = document.getElementById('heartCount');
    // console.log(heartCountElement);

    // heart button count
    const hearts = document.querySelectorAll('.btn-heart');
    for (const heart of hearts) {
        heart.addEventListener('click', function() {
            // console.log(heart);
            heartCount++;
            heartCountElement.innerText = heartCount;
        });
    }

    // copy button count
    let copyCount = 0;

    // from navbar
    const copyCountElement = document.getElementById('copyCount');
    
    const copies = document.querySelectorAll('.btn-copy');
    for (const copy of copies) {
        copy.addEventListener('click', function(event) {
            // console.log(copy);
            const hotlineElement = event.target.parentNode.parentNode.querySelector('.hotline').innerText;
                
                navigator.clipboard.writeText(hotlineElement);
                // console.log(hotlineElement);

            alert(`${hotlineElement} copied`);
            copyCount++;
            copyCountElement.innerText = copyCount;
        });
    }

    // call button count
    let callCount = 0;
    let coin = 100;


    // from navbar
    const callCountElement = document.getElementById('callCount');
    const coinCountElement = document.getElementById('coinCount');
    
    const history = document.getElementById('call-history');
    const clearBtn = document.getElementById('btn-clear');

    const calls = document.querySelectorAll('.btn-call');
    for (const call of calls) {
        call.addEventListener('click', function(event) {
            const serviceName = event.target.parentNode.parentNode.querySelector('.service-name').innerText;
            // console.log(serviceName);
            const hotline = event.target.parentNode.parentNode.querySelector('.hotline').innerText;
            // console.log(hotline);

            if(coin<20){
                alert('to make a call you need at least 20 coins');
                return;
            }
            else{
                alert(`Calling ${serviceName} : ${hotline}`);
                
                coin -= 20;
                coinCountElement.innerText = coin;
                
                const time = new Date().toLocaleTimeString();
                const div = document.createElement('div');
                div.classList.add('flex', 'gap-4', 'justify-between', 'items-center', 'bg-[#fafafa]', 'rounded-lg', 'p-4', 'mb-2');
                div.innerHTML = `<div>
                                <h4 class="inter-semibold text-lg text-[#111111]">${serviceName}</h4>
                                <p class="hind-madurai-regular text-lg text-[#5c5c5c]">${hotline}</p>
                            </div>
                            <p class="hind-madurai-regular text-lg text-[#111111]" id="time">${time}</p>`;
                history.appendChild(div);
                
                return;
            }
        });
    }
    
    clearBtn.addEventListener('click', function(){
        history.innerHTML ="";
    })
