var com;
(function (com) {
    var justinwatkins;
    (function (justinwatkins) {
        var ResumeController = (function () {
            function ResumeController($rootScope) {
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
                ];
                this.ChunkedSkills = this.ChunkSkills(2);
            }
            ResumeController.prototype.ChunkSkills = function (size) {
                var newArray = [];
                for (var i = 0; i < this.SkillCategories.length; i += size) {
                    newArray.push(this.SkillCategories.slice(i, i + size));
                }
                return newArray;
            };
            ResumeController.prototype.NumberToArray = function (number) {
                var numberArray = [];
                for (var i = 0; i < 5; i++) {
                    numberArray[i] = number >= (i + 1) ? 'fa-star' : number >= (i + .5) ? 'fa-star-half-o' : 'fa-star-o';
                }
                return numberArray;
            };
            ResumeController.prototype.doClick = function () {
                alert('clicked me');
            };
            ResumeController.$inject = ['$rootScope'];
            return ResumeController;
        })();
        justinwatkins.ResumeController = ResumeController;
    })(justinwatkins = com.justinwatkins || (com.justinwatkins = {}));
})(com || (com = {}));
