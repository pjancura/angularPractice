import { Injectable } from '@angular/core';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skills[] = [
    {
      name: 'Javascript'
    },
    {
      name: 'Python'
    },
    {
      name: 'MySQL'
    },
    {
      name: 'HTML / CSS'
    },
    {
      name: 'Angular'
    },
  ]

  constructor() { }

  getSkills(): Skills[]{
    return this.skills;
  }
}
