// cabbage===focus project
// cabbage===focus project
// cabbage===focus project


// ----- project process overview -------

export const cabbage_projectSteps_Focus = [
  {
    title: 'Intro',
    icon:'✨',
    description: ["Problem", "Solution"],
  },
  {
    title: 'Understand',
    icon:'💭',
    description: ["User interview",
                  "Competitive analysis",
                  "User journey",
                  "Pain points"]
  },
  {
    title: 'Design',
    icon:'🧪',
    description: ["Design requirements",
                  "Lo-fi & mid-fi",
                  "User feedback",
                  "Prototypes"
                ],
  },
  {
    title: 'Testing',
    icon:'🎨',
    description: ["Unmoderated testing",
                  "Future design ideas",
                ]
  },

];
// export const projectSteps_Focus = [
//   { title: 'Focus Calendar',
//     intro:["Problem", "Solution"],
//     understand:["Foundational user interview",
//                 "Competitive analysis",
//                 "User journey",
//                 "Key pain points"
//                   ],
//     design:["Design requirement",
//       "Ideation",
//       "Lo-fi prototype",
//       "User feedback",
//       "Mid-fi prototype",
//       "Final mocks"
//       ],
//     testing:["Unmoderated testing",
//               "Future design ideas",
//               ]
//  },

// ];

// --problem-- //

export const cabbage_problem_1 = [
  { caption: 'Problem', title: 'People can’t accomplish important tasks they set their mind to do in time because they are constantly distracted' },
];


export const cabbage_problem_2 = [
  { icon: 'notifications_active', caption: '', title: '61%', description: 'Reported social media is the greatest distraction', id: 1 },
  { icon: 'phone_iphone', caption: '', title: '53%', description: 'Are most influenced by smartphones', id: 2 },
  { icon: 'live_tv', caption: '', title: '40%', description: 'WFH people are distracted by binging TV shows', id: 3 },
];


// --solution-- //

export const cabbage_solution_1 = [
  {
    caption: 'Solution',
    title: 'A productivity app powered by behavioral science: using goal-setting theories to help people get things done',
    description: 'like task breaker and calendar with focus timer '

  },
];

export const cabbage_solution_2 = [
  {
    caption: '1', title: 'Turn calendar events into a focus timer to easily stick to the schedule',
    description: 'Integrate existing goals and resources: Google Calendar or Microsoft Outlook. Making stick-to-a-goal easier',
    vidPath: '/cabbage/Walkthrough/1_Turn calendar to focus event_2021_V3.mov'
  },
  {
    caption: '2', title: 'Break difficult tasks into smaller tasks',
    description: 'Small wins and short-term goals are more attainable than bigger goals',
    vidPath: '/cabbage/Walkthrough/2_Task breaker_2021_V3.mov'
  },
  {
    caption: '3', title: 'Create a calendar event with focus timer',
    description: 'Making the better choice more cognitively available by setting focus timer as a default',
    vidPath: '/cabbage/Walkthrough/3_Create event_2021_V3.mov'
  },
  {
    caption: '4', title: 'Start a focus timer any time and block the phone',
    description: 'Decrease the efforts needed to enter a focusing space',
    vidPath: '/cabbage/Walkthrough/4_Focus timer_2021_V3.mov'
  },
];


// --research-- //

export const cabbage_research_1 = [
  { caption: 'Research', title: 'Foundational research: 1 round of user interviews with four participants and 1 competitive analysis.' },
];


// --research | user interview -- //
export const cabbage_research_interview_0 = [
  { icon: '', caption: '4 participants', title: '', description: 'from 3 backgrounds: design, business and engineering', id: 1 },
  { icon: '', caption: '1 shared habit', title: '', description: 'all of them use digital calendar in their day-to-day schedule', id: 2 },
];


export const cabbage_research_interview_1 = [
  { icon: 'favorite', caption: '', title: 'Interest level', description: '"For projects I like, I have no problems focusing."', id: 1 },
  { icon: 'event_available', caption: '', title: 'Deadlines', description: '“When there’s a deadline, I can focus on getting tasks done.”', id: 2 },
  { icon: 'border_color', caption: '', title: 'Plan ahead', description: '“If I analyze and write down things to do, I feel better and can focus.”', id: 3 },
];

export const cabbage_research_interview_2 = [
  { icon: 'sentiment_very_dissatisfied', caption: '', title: 'Feeling stressed', description: '“If I find the task difficult, I can’t bring myself to accomplish it.”', id: 1 },
  { icon: 'thumb_down', caption: '', title: 'Low self-efficacy', description: '“I just want to delay the feeling of unconfidence a bit.”', id: 2 },
  { icon: 'mark_unread_chat_alt', caption: '', title: 'Distraction', description: '“Sometimes I receive texts from friends……”', id: 3 },
];

// --research | competitive analysis -- //
export const cabbage_research_compAnalysis_0 = [
  { icon: '', caption: '4 competitors', title: '', description: 'focus apps with various product features', id: 1 },
  { icon: '', caption: '1 opportunity', title: '', description: 'none integrates with digital calendar', id: 2 },
];


// --research | competitive analysis chart -- //
export const cabbage_research_compAnalysis_1 = [
  {
    th: '',
    td1: 'Serene',
    td2: 'Focus To-do',
    td3: 'Flipd',
    td4: 'Forest',

  },
  {
    th: 'Timer',
    td1: '✅',
    td2: '✅',
    td3: '✅',
    td4: '✅',

  },
  {
    th: 'To-do list',
    td1: '❌',
    td2: '✅',
    td3: '❌',
    td4: '❌',

  },
  {
    th: 'Task breaker',
    td1: '✅',
    td2: '❌',
    td3: '❌',
    td4: '❌',

  },
  {
    th: 'Gamification',
    td1: '❌',
    td2: '❌',
    td3: '❌',
    td4: '✅',

  },
  {
    th: 'Website blocker',
    td1: '✅',
    td2: '❌',
    td3: '❌',
    td4: '❌',

  },
  {
    th: 'Live group session',
    td1: '❌',
    td2: '❌',
    td3: '✅',
    td4: '❌',

  },
  {
    th: 'Community',
    td1: '❌',
    td2: '❌',
    td3: '✅',
    td4: '❌',

  },
  {
    th: 'Calendar integration',
    td1: '❌',
    td2: '❌',
    td3: '❌',
    td4: '❌',

  },
];


// --research insights | key pain points -- //
export const cabbage_research_keyPainPoints = [
  { th: '1. Plan & schedule', mid: '😰', td1: 'When tasks are overwhelming, participants feel paralyzed to even start planning' },
  { th: '2. Happen soon', mid: '📈', td1: 'Participants’ emotion and focus state fluctuate drastically right before a scheduled task happens' },
  { th: '3. Happening', mid: '🥱', td1: 'If it’s not interesting to participants, they are easily distracted by external factors' },
];



// Design //

// --Design | Design title -- //

export const cabbage_design_1 = [
  {
    caption: 'Design',
    title: 'Based on key pain points, I created three design principles that prioritize user focus throughout their experience'
  },
];


// --Design | Design requirement -- //
export const cabbage_design_requirement = [

  {
    th: '', mid: '',
    td1: '😰 Pain points',
    mid2: '',
    td2: '✨ Design requirements'
  },
  {
    th: '1. Plan & schedule', mid: '',
    td1: 'Tasks are overwhelming, feel paralyzed',
    mid2: '➡️',
    td2: 'Design needs to guide users through a step-by-step process to prepare for and break down difficult tasks'
  },

  {
    th: '2. Happen soon', mid: '',
    td1: 'Tmotion and focus state fluctuate drastically',
    mid2: '➡️',
    td2: 'Design needs to bridge the gap between digital calendar and focus mode'
  },

  {
    th: '3. Happening', mid: '',
    td1: 'Easily distracted by external factors',
    mid2: '➡️',
    td2: 'Design needs to sustain their focus span as long as possible',
  },
];


export const cabbage_intervention_diagram = [
  {
    caption: '', title: 'Intervention diagram',
    description: '',
    imgPath: '/cabbage/intervention_diagram.png'
  },

];



// Test & future ideas


// -- Testing | Testitngtitle -- //

export const cabbage_testing_1 = [
  {
    caption: 'Testing & future ideas',
    title: "Major tasks: 80% to 100% success rate"
  },
];
export const cabbage_future_ideas = [
  { icon: 'stadia_controller', caption: '', title: 'Gamification', description: 'is helpful to retain users and motivate users to keep using the app', id: 1 },
  { icon: 'group', caption: '', title: 'Community', description: 'users crave a community feature, seeking to benchmark their progress and connect with others', id: 2 },
  { icon: 'timer', caption: '', title: 'Customize timers', description: 'in the task breaker allow users to optimize their workflow for each task', id: 3 },
];

