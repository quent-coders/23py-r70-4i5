const overall = {'period': 'sep 2, 2021 - may 27, 2023',
                'total_study_hours': '117'}
const topics = ['Introduction to Python - {theory: 0:30}',
                'Basic Program Overview - {theory: 0:40, practice: 1:30}',
                'Introduction to Turtle - {theory: 0:40, practice: 1:30}',
                'Built-in functions, IO operations - {theory: 0:40, practice: 2:00}',
                'PEP, coding style - {theory: 0:40, practice: 1:00}',
                'Introduction to Variables - {theory: 1:00, practice: 2:00}',
                'Data Types, Casting - {theory: 0:40, practice: 2:00}',
                'Easy Drawing in Turtle - {theory: 0:15, practice: 1:30}',
                'Modules, Random - - {theory: 0:40, practice: 2:00}',
                'Introduction to Conditions - {theory: 0:40, practice: 2:00}',
                'While Loop - {theory: 0:40, practice: 2:00}',
                'Boolean Logic, and & or, Truthy & Falsy - {theory: 0:40, practice: 2:00}',
                'Introduction to color coding, RGB - {theory: 0:40, practice: 1:30}',
                'Advanced Drawing in Turtle w/ loops - {theory: 0:40, practice: 1:30}',
                'Introduction to Collections, Lists - {theory: 0:40, practice: 2:00}',
                'For Loop - - {theory: 0:40, practice: 2:00}',
                'Lists Basic Operations - {theory: 0:40, practice: 3:40}',
                'Loop control - {theory: 0:40, practice: 2:00}',
                'Introduction to Nested Lists - {theory: 0:40, practice: 2:00}',
                'Introduction to Dictionaries - {theory: 0:40, practice: 2:00}',
                'Dictionaries Basic Operations - {theory: 0:40, practice: 2:00}',
                'Introduction to Functions - {theory: 0:40, practice: 2:00}',
                'Introduction to PyGame, Built-Ins - {theory: 0:40, practice: 2:00}',
                'Game Sprites - {theory: 0:40, practice: 3:00}',
                'Game Controls - {theory: 0:40, practice: 1:30}',
                'Game Collisions - {theory: 0:40, practice: 3:00}',
                'Game Displays - {theory: 0:40, practice: 2:00}',
                'Game Modes Logic - {theory: 0:40, practice: 2:00}',
                'Game Menus - {theory: 0:40, practice: 2:00}',
                'Game w/ Functions - {theory: 0:40, practice: 3:00}',
]


const projects = ['project name - Rock-Paper-Scissors (backend)',
                    'project difficulty - 2/10',
                    'topics knowlenge required - 10+',
                    'project work time est. - 2+ hrs',
                    'project implementation - loop',
                    'project status - complete (3/3 stages)',

                    'project name - Racing with Bets (turtle)',
                    'project difficulty - 3/10',
                    'topics knowlenge required - 15+',
                    'project work time est. - 4+ hrs',
                    'project implementation - loop',
                    'project status - complete (6/6 stages)',

                    'project name - Battleship (backend)',
                    'project difficulty - 4/10',
                    'topics knowlenge required - 15+',
                    'project time est. - 5+ hrs',
                    'implementation - functions',
                    'status - complete (4/4 stages)',

                    'project name - Simple Runner (PyGame)',
                    'project difficulty - 4/10',
                    'topics knowlenge required - 25+',
                    'project time est. - 4+ hrs',
                    'implementation - PyGame built-ins',
                    'status - complete (3/3 stages)',

                    'project name - Space Wars (PyGame)',
                    'project difficulty - 7/10',
                    'topics knowlenge required - 25+',
                    'project time est. - 8+ hrs',
                    'implementation - PyGame + self functions',
                    'status - complete (6/6 stages)',

                    'project name - Dungeon (PyGame)',
                    'project difficulty - 6/10',
                    'topics knowlenge required - 25+',
                    'project time est. - 7+ hrs',
                    'implementation - PyGame + self functions',
                    'status - complete (6/6 stages)',

                    'project name - Score Mining (PyGame)',
                    'project difficulty - 8/10',
                    'topics knowlenge required - 25+',
                    'project time est. - 10+ hrs',
                    'implementation - PyGame + self functions',
                    'status - complete (7/7 stages)',

                ]
         

let overall_dom = document.querySelector('.overall');
for (const [k, v] of Object.entries(overall)) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${k}: ${v}`, p);
  document.querySelector('.content').appendChild(div);
};


let n = 1;
let topics_dom = document.querySelector('.topics');
for (const topic of topics) {
  let div = document.createElement("div");
  div.classList.add("box");
  let p = document.createElement("p");
  div.append(`${n} - ${topic.split(' - ')[0]}: ${topic.split(' - ')[1]}`, p);
  document.querySelector('.content-1').appendChild(div);
  n++;
};

let projects_dom = document.querySelector('.projects');
n = 0;
for (const project of projects) {
  let div = document.createElement("div");
  div.classList.add("box")
  if (!(n % 6)) {
    div.classList.add("project-name-box");
  }
  
  let p = document.createElement("p");
  div.append(`${project.split(' - ')[0]}: ${project.split(' - ')[1]}`, p);
  document.querySelector('.content-2').appendChild(div);

  n++;
};