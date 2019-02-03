class Skill {
  constructor(
    public name: string,
    public rating: number
  ) { }
}

export class Emp {
  constructor(
    public name: string,
    public dob: Date,
    public salary: number,
    public skills: Skill[]
  ) { }

  addSkill(skill, rating) {
    this.skills.push(new Skill(skill, rating));
  }
}
