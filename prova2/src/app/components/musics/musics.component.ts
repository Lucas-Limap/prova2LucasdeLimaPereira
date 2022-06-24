import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Music } from './musics';
import { MusicsService } from './musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  musicList: Music [] = []
  newMusic: Music = {} as Music

  constructor(private service: MusicsService) { }

  ngOnInit(): void {
  }

  loadData(){
    this.service.getMusics().subscribe(items => {
      this.musicList = items
    })
  }

  saveData(form: NgForm){
    this.service.postMusics(this.newMusic).subscribe(items => {
      form.resetForm()
      this.newMusic = {} as Music
      this.loadData()
    } )

  }

}
