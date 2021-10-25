const events = [
  {
    name: 'Gathering Day',
    description: 'Gather resources',
    image: {
      source: '/gathering-day.png',
      wide: '760px',
      height: '275px',
    },
    events: [
      {
        tasks: ['Increase Building Power', 'Every 1 min of building speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power'],
        dd: false,
      },
      {
        tasks: ['Every 1 min of training speed-up items used', 'Spend VIP points'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Training troops', 'Spend VIP points'],
        dd: false,
      },
      {
        tasks: [
          'Every 1 min of building speed-up items used',
          'Every 1 min of research speed-up items used',
          'Every 1 min of training speed-up items used',
        ],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Training Troops'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power'],
        dd: false,
      },
    ],
  },
  {
    name: 'Building Day',
    description: 'Upgrade Buildings',
    image: {
      source: '/hero-day.png',
      wide: '760px',
      height: '340px',
    },
    events: [
      {
        tasks: ['Increase Building Power', 'Craft Parts'],
        dd: true,
      },
      {
        tasks: ['Building ', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power', 'Craft Parts'],
        dd: true,
      },
      {
        tasks: ['Use Any Speedups'],
        dd: false,
      },
      {
        tasks: ['Building ', 'Tech Research'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Consume Energy Core'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power'],
        dd: true,
      },
    ],
  },
  {
    name: 'Research Day',
    description: 'Research Technology',
    image: {
      source: '/research-day.png',
      wide: '760px',
      height: '355px',
    },
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: false,
      },
      {
        tasks: ['Tech Research', 'Tech Research Speedups'],
        dd: false,
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedup', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Craft Parts'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Craft Parts'],
        dd: true,
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedups', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Training Speedup', 'Consume energy core'],
        dd: true,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research'],
        dd: true,
      },
    ],
  },
  {
    name: 'Hero Day',
    description: 'Recruit and Upgrade Heroes + Defeat Marauders ',
    image: {
      source: '/hero-day.png',
      wide: '760px',
      height: '340px',
    },
    events: [
      {
        tasks: ['Hero Recruitment', 'Kill Marauders '],
        dd: false,
      },
      {
        tasks: ['All Hero Development'],
        dd: true,
      },
      {
        tasks: ['Acquire Wisdom Medals', 'Spend Wisdom Medals', 'Kill Marauders '],
        dd: true,
      },
      {
        tasks: ['All Hero Development'],
        dd: false,
      },
      {
        tasks: ['Hero Recruitment', 'Spend Wisdom Medals'],
        dd: false,
      },
      {
        tasks: ['All Hero Development'],
        dd: false,
      },
      {
        tasks: ['Acquire Wisdom Medals', 'Spend Wisdom Medals', 'Kill Marauders '],
        dd: false,
      },
      {
        tasks: ['All Hero Development'],
        dd: false,
      },
    ],
  },
  {
    name: 'Training Day',
    description: 'Training Troops',
    image: {
      source: '/hero-day.png',
      wide: '760px',
      height: '340px',
    },
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: false,
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedups', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Training Troops'],
        dd: true,
      },
      {
        tasks: ['Tech Research', 'Training Troops'],
        dd: true,
      },
      {
        tasks: ['Use Any Speedups'],
        dd: false,
      },
    ],
  },
  {
    name: 'Kill Event',
    description: 'Conquer The Opposing State, Kill Enemy Soldiers',
    image: {
      source: '/kill-day.png',
      wide: '760px',
      height: '384px',
    },
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: false,
      },
      {
        tasks: ['Tech Research', 'Tech Speedups'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Every minute Every 1 min of building speed-up items used used'],
        dd: false,
      },
      {
        tasks: ['Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: false,
      },
      {
        tasks: ['Increase Building Power', 'Training Troops'],
        dd: false,
      },
      {
        tasks: ['Tech Research', 'Training Troops'],
        dd: false,
      },
    ],
  },
  {
    name: 'Free Development',
    description:
      'On free development days (Sundays and also Saturday during preparation weeks when there is no kill event) You can choose from any of the other days events (eg gathering, building etc). When you choose your Sunday event your hourly events on that day will be the same as the ones on the chosen day. For example if you choose Gathering on Sunday then you will get Day 1 (Monday) event schedule.',
    image: {
      source: '/hero-day.png',
      wide: '760px',
      height: '340px',
    },
  },
]

export default events
