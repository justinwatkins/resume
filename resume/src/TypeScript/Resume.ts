interface Skill {
    Name: string;
    Proficiency: number;
}

interface SkillCategory {
    Name: string;
    Skills: Array<Skill>;
}

class ResumeController {
    public SkillCategories: Array<SkillCategory>
    public ChunkedSkills: Array<Array<SkillCategory>>;

    static $inject: Array<String> = ['$rootScope'];
    constructor($rootScope: IRootStateService) {
        this.SkillCategories = [
            {
                Name: "Languages",
                Skills: [
                    { Name: "C#", Proficiency: 5 },
                    { Name: "JavaScript", Proficiency: 5 },
                    { Name: "HTML5", Proficiency: 5 },
                    { Name: "CSS (SCSS/LESS)", Proficiency: 5 },
                    { Name: "PHP", Proficiency: 4 }, 
                    { Name: "Java", Proficiency: 3 },
                    { Name: "C++", Proficiency: 2 },
                ]
            },
            {
                Name: "Frameworks",
                Skills: [
                    { Name: "MVC", Proficiency: 5 },
                    { Name: "AngularJS", Proficiency: 5 },
                    { Name: "KnockoutJS", Proficiency: 5 },
                    { Name: "Bootstrap", Proficiency: 5 },
                    { Name: "EntityFramework", Proficiency: 4.5 },
                    { Name: "SharePoint", Proficiency: 4 }
                ]
            },
            {
                Name: "Platforms",
                Skills: [
                    { Name: "Windows", Proficiency: 5 },
                    { Name: "CentOS/RHEL", Proficiency: 4.5 },
                    { Name: "Ubuntu", Proficiency: 3.5 },
                    { Name: "Debian", Proficiency: 3.5 }
                ]
            },
            {
                Name: "Databases",
                Skills: [
                    { Name: "MS-SQL", Proficiency: 4 },
                    { Name: "MySQL", Proficiency: 4 }
                ]
            },
        ]
        this.ChunkedSkills = this.ChunkSkills(2);
    }
    
    ChunkSkills(size: number): Array<Array<SkillCategory>> {
        var newArray = [];
        for (var i = 0; i < this.SkillCategories.length; i += size) {
            newArray.push(this.SkillCategories.slice(i, i + size));
        }
        return newArray;
    }

    NumberToArray(number): Array<any> {
        var numberArray = [];
        for (var i = 0; i < 5; i++) {
            numberArray[i] = number >= (i + 1) ? 'fa-star' : number >= (i + .5) ? 'fa-star-half-o' : 'fa-star-o';
        }
        return numberArray;
    }
    
    doClick() {
        alert('clicked me');
    }
}