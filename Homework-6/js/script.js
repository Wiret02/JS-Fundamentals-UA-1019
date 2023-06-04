// // Homework №6 //


// // 1
// const listItems = document.querySelectorAll('#list li');
// alert(`${listItems[0].innerHTML},${listItems[4].innerHTML},${listItems[1].innerHTML},${listItems[3].innerHTML},${listItems[2].innerHTML}`);


// // 2
// const title = document.querySelector('h1');

// title.style.background = "lightgreen";

// const div = document.querySelector('#myDiv');

// div.firstElementChild.style.fontWeight = "bold";
// div.children[1].style.color = "red";
// div.children[2].style.textDecoration = "underline";
// div.lastElementChild.style.fontStyle = "italic";

// const horizontalList = document.querySelector('#myList')

// horizontalList.style.display = "flex";
// horizontalList.style.listStyle = "none";

// const invisibleSpan = document.querySelector('span');

// invisibleSpan.style.opacity = "0";

// // 3
// document.body.innerHTML = `
// <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// `;


// // 4
function getValues() {
    const inputFio = document.querySelector('input[name="fio"]');
    const inputPhone = document.querySelector('input[name="phone"]');
    const inputBirthday = document.querySelector('input[name="birthday"]');
    const inputEmail = document.querySelector('input[name="email"]');

    const fio = inputFio.value;
    const phone = inputPhone.value;
    const birthday = inputBirthday.value;
    const email = inputEmail.value;

    return {fio, phone, birthday, email};
}

function OutBox(values) {
    const outBox = document.querySelector('.out');

    outBox.innerHTML = `
    <div class="inner__wrapper">
        <p>ПІБ: ${values.fio}</p>
        <p>Номер телефону: ${values.phone}</p>
        <p>Дата народження: ${values.birthday}</p>
        <p>Електронна пошта: ${values.email}</p>
    </div>
    `;
}

function ShowInfoInOutBox() {
    const values = getValues();
    OutBox(values);
}

const button = document.querySelector('.btn');

button.addEventListener('click', ShowInfoInOutBox);