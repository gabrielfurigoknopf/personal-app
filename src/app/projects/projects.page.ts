import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectDetailComponent } from '../components/project-detail/project-detail.component';

@Component({
  standalone: false,
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  projetos = [
    {
      nome: 'PWA ADS UPF',
      descricao: 'PWA usando HTML, JS e CSS.',
      link: 'https://github.com/gabrielfurigoknopf/meuapp'
    },
    {
      nome: 'TODO List',
      descricao: 'App de tarefas usando ionic.',
      link: 'https://github.com/gabrielfurigoknopf/todolist'
    },
    {
      nome: 'Personal APP',
      descricao: 'App de apresentação pessoal com ionic.',
      link: 'https://github.com/gabrielfurigoknopf/personal-app'
    }
  ];

  constructor(private modalController: ModalController) {}

  async abrirDetalhe(projeto: any) {
    const modal = await this.modalController.create({
      component: ProjectDetailComponent,
      componentProps: { projeto }
    });
    return await modal.present();
  }
}
