//Method 1---

// const input = document.querySelector('#KeyInput');

// function OnKeysDown(e) {
//     const first = document.querySelector('.key');
//     first.innerHTML = `${e.key === ' ' ? 'Space' : e.key} <small>e.key</small>`;

//     const second = document.querySelector('.key:nth-child(2)');
//     second.innerHTML = `${e.keyCode} <small>e.keyCode</small>`;

//     const third = document.querySelector('.key:last-child');
//     third.innerHTML = `${e.code} <small>e.code</small>`;
// }

// input.addEventListener('keydown' , OnKeysDown);


// Method 2--Let's make this from scratch--- *** More Performant ***

const input = document.querySelector('#KeyInput');

const onKeysDown = (e) => {
    const insert = document.querySelector('.insert');
    insert.innerHTML = '';

    const KeyCodes = {
        'e.key' : e.key === ' ' ? 'Space' : e.key,
        'e.keyCode' : e.keyCode,
        'e.code' : e.code,
    };

    for(let keys in KeyCodes) {
        const div = document.createElement('div');
        div.className = 'key';

        const small = document.createElement('small');
        const smallText = document.createTextNode(keys);
        small.appendChild(smallText);
        div.appendChild(small);

        const ValueText = document.createTextNode(KeyCodes[keys]);
        div.appendChild(ValueText);
        
        insert.appendChild(div);
    };
};
input.addEventListener('keydown' , onKeysDown);

//Other Fun Activity-----

const h1 = document.querySelector('h1');

setTimeout(() => h1.click(), 5000);

const OnClicked = (e) => {
    h1.style.color !== 'black' ? h1.style.color = 'black' : h1.style.color = 'blue';
}
h1.addEventListener('click', OnClicked);