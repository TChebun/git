const form = document.querySelector('.contacts__form');
const fields = form.querySelectorAll('.input-field');


// удаление валидации
const removeValidation = () => {
    const errors = form.querySelectorAll('.error');

    for (let k = 0; k < errors.length; k++) {
        errors[k].remove();
    }
}

// проверка валидации
const checkValidation = () => {
    let error;

    for (let i = 0; i < fields.length; i++) {
        if(!fields[i].value) {
            console.log('Пусто', fields[i]);
            error = generateError('Поле не может быть пустым');
            form[i].parentElement.appendChild(error, fields[i]);
        }
    }

    return !!error;
}

// создание ошибки
const generateError = (text) => {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.fontSize = '10px';
    error.innerHTML = text;

    return error
}


// отправка запроса на сервер

const sendForm = async(formData) => {
    const response = await fetch('mail.php', {
        method: 'POST',
        body: formData
    });

    console.log(response);

    if(!response.ok) {
        throw new Error ('Ошибка')
    }

    return await response.text();
}

// запуск проверки формы
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    removeValidation();
    const error = checkValidation();

    if (!error) {
        const formData = new FormData(form);
        sendForm(formData);
    }

});








const sortIt = (a, b) => a - b;

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        swapIt(arr, j, j+1);
      }
    }
  }
  
  return arr
}

// console.log(bubbleSort(arr))

const array = [5, 456, 85, 2, 6, 74, 9, 100];

const swapIt = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

function selectionSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let k = i + 1; k < arr.length; k++) {
            if (arr[min] > arr[k]) {
                min = k
            }
        }

        if (min != i) {
            swapIt(arr, i, min);
        }
    }

    return arr;
}

console.log(selectionSort(array))





























