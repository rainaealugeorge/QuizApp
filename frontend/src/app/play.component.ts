import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from './api.service'

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent{

    quizs

    constructor(private api: ApiService, private router: Router) {}
    
    ngOnInit(){
        this.api.getAllQuizs().subscribe(res => {
            this.quizs = res
        })
    }
    onClick(){
        this.router.navigateByUrl('/login')
    }
}