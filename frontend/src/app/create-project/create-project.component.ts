import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent {
  projects: { name: string; description: string; tasks: { name: string; description: string }[] }[] = [];

  // Método para crear proyecto
  onCreateProject(event: Event, projectNameInput: HTMLInputElement, projectDescriptionInput: HTMLTextAreaElement) {
    event.preventDefault();
    
    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;

    if (projectName && projectDescription) {
      const newProject = {
        name: projectName,
        description: projectDescription,
        tasks: []  // Inicializamos las tareas vacías para cada proyecto
      };
      console.log('Nuevo proyecto creado:', newProject);
      this.projects.push(newProject);
      projectNameInput.value = '';
      projectDescriptionInput.value = '';
    } else {
      console.log('Formulario de proyecto no válido');
    }
  }

  // Método para crear tarea
  onCreateTask(event: Event, taskNameInput: HTMLInputElement, taskDescriptionInput: HTMLTextAreaElement) {
    event.preventDefault();
    
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;

    if (taskName && taskDescription) {
      // Asumiendo que la tarea se agrega al último proyecto creado (puedes ajustar esto)
      const lastProject = this.projects[this.projects.length - 1];
      if (lastProject) {
        lastProject.tasks.push({
          name: taskName,
          description: taskDescription
        });
        console.log('Nueva tarea creada:', { name: taskName, description: taskDescription });
      }
      taskNameInput.value = '';
      taskDescriptionInput.value = '';
    } else {
      console.log('Formulario de tarea no válido');
    }
  }
}
