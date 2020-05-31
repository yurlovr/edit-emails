# Описани

Ввод или генерация рандомных emails.
Добавление email происходит при нажатии на кнопку Add email, при вводе в поле ",", при нажатии клавиши enter, при потере фокуса.
Если введено несколько email'ов через пробел, то будут добавленны все, разделитель - пробел.
Инпут может быть встроен в блок отдельно, взаимодействие с внешними модулями идет через возвращаемые методы.


# Подключение

```html
  <head>
    <script src="./main.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const inputElement = document.querySelector('#app')
      const emailsInput = InputEmail(inputElement, { options })
    </script>
  </body>
```
## Опции

`options: object`

```js
const options = {
  predefinedEmails: 2
}
```
`predefinedEmails`  

`чиcло`, тогда в этом случае сгенерится заданное количество случайных email  


## Возвращаемые методы InputEmail

```js
    getCount
    getAllEmails
    addEmail
    deleteAllInvalid
    subscribe
    replaceAll
```

`getCount`  

  Метод, возвращает количество emails  

`getAllEmails`  
  ФунМетодкция, возвращает массив emails  

`addEmail`  
  Метод, добавляет рандомный email в форму

`deleteAllInvalid`  
Метод - удаляет все невалидные emails  

`subscribe`  

Принимает функцию, которая будет вызвана при изменении emails  
В эту функцию передается массив объектов email, возвращает объект с методом отписки  
```js
{
  unsubscribe: func
}

```

```js
const test = emails => console.log(emails)

const model = new InputEmail(document.querySelector('#app'), options)

// подписка
const subscribtion = model.subscribe(test)
// отписка
subscribtion.unsubscribe()

```
при изменении списка emails возвращается следующий массив
```js
[
  {
    email: 'ed@ed.ru',
    id: '123',
    isValid: true
  },
  {
    email: 'qa@qa',
    id: '987',
    isValid: false
  }
]
```
`replaceAll`  
Функция, заменяет все введенные emails новые.  
Принимает в качестве аргумента `число` - количество новых emails
```js
replaceAll(1)
```


## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <script src="./main.js"></script>
    <title>app</title>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const inputElement = document.querySelector('#app)
      const emailsInput = InputEmail(inputElement, {
        defaultCount: 2,
        }
      })
    </script>
  </body>
</html>
```
Также пример подключения можно посмотреть в /dist/index.html