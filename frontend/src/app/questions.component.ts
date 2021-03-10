import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent{
    question:any = {};
    questions

    constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
        var quizId = this.route.snapshot.paramMap.get('quizId')

        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res
        })
    }
    onClick(){
        this.router.navigateByUrl('/login')
    }
}