import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { User } from './user.model';

@Injectable()
export class ApiService {
    

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuestions(quizId){
        return this.http.get(`http://localhost:49561/api/questions/${quizId}`)
    }

    getQuizs(){
        return this.http.get('http://localhost:49561/api/quizs')
    }

    getAllQuizs(){
        return this.http.get('http://localhost:49561/api/quizs/all')
    }


    postQuestion(question){
        this.http.post('http://localhost:49561/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }

    putQuestion(question) {
        this.http.put(`http://localhost:49561/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }

    postQuiz(quiz){
        this.http.post('http://localhost:49561/api/quizs', quiz).subscribe(res => {
            console.log(res)
        })
    }

    putQuiz(quiz) {
        this.http.put(`http://localhost:49561/api/quizs/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question)
    }

    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz)
    }

}