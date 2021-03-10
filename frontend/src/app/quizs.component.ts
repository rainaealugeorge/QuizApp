import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { ApiService } from './api.service'

@Component({
    selector: 'quizs',
    templateUrl: './quizs.component.html'
})
export class QuizsComponent{
    quiz:any = {};
    quizs

    constructor(private api: ApiService, private router: Router) {}

    ngOnInit(){
        this.api.getQuizs().subscribe(res => {
            this.quizs = res
        })
    }
    onClick(){
        this.router.navigateByUrl('/login')
    }
}