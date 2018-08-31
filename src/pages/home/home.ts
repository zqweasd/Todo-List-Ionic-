import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
  taskinput:any = [];
  key:string = '';

  constructor(public navCtrl: NavController,
  	private storage: Storage) {
  	this.storage.get('task').then((task) => {
  		if (task){
  			this.taskinput = task;	
  		}
  	})

  }

  saveData(){
  	this.taskinput.push(this.key);
  	this.storage.set('task',this.taskinput);

  }
  
  deleteData(task){
  	var index = this.taskinput.indexOf(task, 0);
  	if (index > -1){
  		this.taskinput.splice(index, 1);
  		this.storage.set('task',this.taskinput);

  	}
  }
  editData(task){
  	var index = this.taskinput.indexOf(task, 0);
  	if (index > -1){
  		this.taskinput[index] = this.key;	
  		this.storage.set('task',this.taskinput);

  	}	

  }


}
