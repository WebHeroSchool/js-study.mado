let question1 = {
  question: 'Какая игрушка была первой рекламируемой на телевидении?',
  answer: ['a - Миссис Веселая Смешинка ','b - Мистер Картофельная Голова','c - Мисс Пушистая Шапочка','d - Чаки-Чаки'] ,
  currectAnswer: ['b','Мистер Картофельная Голова']
}

let question2 = {
  question: 'В какой стране производится больше всего кофе в мире?',
  answer: ['a - Индия','b - США','c - Бразилия ','d - Мексика'],
  currectAnswer: ['c', 'Бразилия']
}

let question3 = {
  question: 'Копрастастафобия - боязнь чего?',
  answer: ['a - Кобр ','b - Запора','c - Устриц ','d - Башен'],
  currectAnswer: ['b', 'Запора']
}

let question4 = {
  question: 'Как еще называют День Благодарения?',
  answer: ['a - День благодарности','b - Благодарственный день ','c - День индейки','d - Благодарность Индии '],
  currectAnswer : ['c','День индейки']
}

let num,
    score;
let arrayQuest = [question1, question2, question3, question4];

alert('Добро пожаловать на нашу викторину! В поле для ответа оставляйте лишь букву предполагаемого правильного ответа!')
function buildQuiz(q) {
  for (let i=0; i<q.length; i++){
  let myAnswer = prompt(q[i].question, q[i].answer);
  if (myAnswer == q[i].currectAnswer[0]) alert('Верно')
  else alert('Не верно');
}
}

buildQuiz(arrayQuest);
