import { Questions, Answers } from './test-ques.component';
import { Tests } from '../test-menu.component';

export const Ans: Answers[] = [
    {
        isCorrect: false,
        id: 1,
        name: 'Ls lal lalal '
    },
    {
        isCorrect: true,
        id: 2,
        name: 'Ds Dal Dalal '
    },
    {
        isCorrect: false,
        id: 3,
        name: 'Ws Wal walal '
    },
    {
        isCorrect: false,
        id: 4,
        name: 'Ts lTl TTlal '
    }
]

export const Ques: Questions[] = [
    {
        answer: Ans,
        id: 1,
        name: 'Правда ли что в графе есть гамильтонов цикл?'
    },
    {
        answer: Ans,
        id: 2,
        name: 'Что такое машина тьюринга?'
    },
    {
        answer: Ans,
        id: 3,
        name: 'Можно ли построить поле Ф64'
    },
    {
        answer: Ans,
        id: 4,
        name: 'Как проиходит запись данных в регистры в МТ1804'
    },
    {
        answer: Ans,
        id: 5,
        name: 'Отличия докера о lxc ?'
    }
]

export const Test1: Tests = {
    question: Ques,
    id: 1,
    name: 'Physics'
}

