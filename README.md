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
  defaultCount: 2,
  predefinedEmails: ['ws@ws.eu', 'sx@rf.tu', 'fvv.rf.dh'],
  showButtons: true,
  position: {
    top: '100px',
    left: '100px'
  },
  timeOut: 0
}
```
`defaultCount`  

`чиcло`, тогда в этом случае сгенерится заданное количество случайных email  
 `не обязательный параметр`

`predefinedEmails`  

 `массивом реальных email`, тогда при инициализации формы они добавяться в форму  
 `не обязательный параметр`


`showButtons`
>-`true` - отобрязяться кнопки `Add mail` и `Get count email`  
>-`false` - кнопки не отобразятсья  
Если не передан, то `true`

`position`  
Объект для позиционирования формы, если передан, то форма становится абсолютно спозиционированной.  
Если контейнер для подключения формы `position: relative / fixed / absolute`, то позиционирование будет относительно него,
в противном случае - относительно окна браузера
```css
  position: absolute;
```
```js
 position: {
    top: '100px',
    left: '100px'
  },
```

`timeOut`  
Задержка отрисовки формы в мсек  
`не обязательный параметр`

## Возвращаемые методы InputEmail

```js
    getCount
    getAll
    addEmail
    delAllInvalid
    subscribe
    replaceAll
    deleteAll
    show
    hide
```

`getCount`  

  Функция, возвращает количество emails  

  `getAll`  
  Функция, возвращает массив emails  

`addEmail`  

Функция, добавляет email принимает `объект`,  
```js
{
  email: "ex@ex.ex",
  id: "12345",
  isValid: true
}
```
`массив объектов email` - в этом случае добавятся все переданные email, (свойтсва email, id, isValid - обязательные)
```js
[
  {
    email: "ex@ex.ex",
    id: "12345",
    isValid: true
  },
  {
    email: "ex@ex.ex",
    id: "12345",
    isValid: true
  }
]
```
`число` - в этом случае в форму добавятся рандомные email, количество которых будет равно переданному числу  
`строка` - в этом случае добавится переданный email  
`массив email` - в этом случае добавятся переданные email  
```js
['ws@ws.eu', 'sx@rf.tu', 'fvv.rf.dh']
```
И добавляет данный email в форму

`delAllInvalid`  

Функция - удаляет все невалидные emails  

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
`deleteAll`  
Функция, удаляет все введенные emails  

`replaceAll`  
Функция, заменяет все введенные emails на переданные.  
Принимает в качестве аргумента `строку` или `массив строк`  
```js
replaceAll('email@email.ru')

replaceAll(['email@email.ru', 'example@example.ru'])
```

`show`  
Функция отображает форму  

`hide`  

Функция скрывает форму  


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
        predefinedEmails: ['ws@ws.eu', 'sx@rf.tu', 'fvv.rf.dh'],
        showButtons: true,
        timeOut: 5000,
        position: {
          top: '100px',
          left: '100px'
        }
      })
    </script>
  </body>
</html>
```
Также пример подключения можно посмотреть в /dist/index.html