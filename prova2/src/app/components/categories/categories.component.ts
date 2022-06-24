import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categories } from './categories';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Categories[] =[]
  newCategorie: Categories = {} as Categories

  constructor(private service: CategoriesService) { }

  ngOnInit(): void {
  
  }

  loadData(){
    this.service.getCategoriesList().subscribe(items => {
      this.categoriesList = items
    })
  }

  saveData (form: NgForm){
    this.service.postCategories(this.newCategorie).subscribe(items => {
      form.resetForm()
      this.newCategorie = {} as Categories
      this.loadData()
    })
  }

}
