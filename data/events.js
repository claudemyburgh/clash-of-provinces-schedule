const events = [
  {
    name: 'Gathering Day',
    description: 'Gather resources',
    events: [
      {
        tasks: ['Increase Building Power', 'Every 1 min of building speed-up items used'],
        dd: [false, false],
      },
      {
        tasks: ['Increase Building Power'],
        dd: [false],
      },
      {
        tasks: ['Every 1 min of training speed-up items used', 'Spend VIP points'],
        dd: [false, false],
      },
      {
        tasks: ['Increase Building Power', 'Training troops', 'Spend VIP points'],
        dd: [false, false, false],
      },
      {
        tasks: [
          'Every 1 min of building speed-up items used',
          'Every 1 min of research speed-up items used',
          'Every 1 min of training speed-up items used',
        ],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Training Troops'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power'],
        dd: [false],
      },
    ],
  },
  {
    name: 'Building Day',
    description: 'Upgrade Buildings',
    events: [
      {
        tasks: ['Increase Building Power', 'Craft Parts'],
        dd: [true, true],
      },
      {
        tasks: ['Building ', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [true, true, false],
      },
      {
        tasks: ['Increase Building Power', 'Craft Parts'],
        dd: [true, true],
      },
      {
        tasks: ['Use Any Speedups'],
        dd: [false],
      },
      {
        tasks: ['Building ', 'Tech Research'],
        dd: [true, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Consume Energy Core'],
        dd: [true, true, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research'],
        dd: [true, false],
      },
      {
        tasks: ['Increase Building Power'],
        dd: [true, false, false],
      },
    ],
  },
  {
    name: 'Research Day',
    description: 'Research Technology',
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: [false],
      },
      {
        tasks: ['Tech Research', 'Tech Research Speedups'],
        dd: [false, false],
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedup', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Craft Parts'],
        dd: [false, true, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Craft Parts'],
        dd: [false, true, false],
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedups', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Training Speedup', 'Consume energy core'],
        dd: [false, true, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research'],
        dd: [false, true],
      },
    ],
  },
  {
    name: 'Hero Day',
    description: 'Recruit and Upgrade Heroes + Defeat Zombies',
    events: [
      {
        tasks: ['Hero Recruitment', 'Kill Zombies'],
        dd: [false, false],
      },
      {
        tasks: ['All Hero Development'],
        dd: [true],
      },
      {
        tasks: ['Acquire Wisdom Medals', 'Spend Wisdom Medals', 'Kill Zombies'],
        dd: [true, true, true],
      },
      {
        tasks: ['All Hero Development'],
        dd: [false],
      },
      {
        tasks: ['Hero Recruitment', 'Spend Wisdom Medals'],
        dd: [false, false],
      },
      {
        tasks: ['All Hero Development'],
        dd: [false],
      },
      {
        tasks: ['Acquire Wisdom Medals', 'Spend Wisdom Medals', 'Kill Zombies'],
        dd: [false],
      },
      {
        tasks: ['All Hero Development'],
        dd: [false],
      },
    ],
  },
  {
    name: 'Training Day',
    description: 'Training Troops',
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: [false],
      },
      {
        tasks: ['Every 1 min of building speed-up items used', 'Tech Research Speedups', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Training Troops'],
        dd: [false, true],
      },
      {
        tasks: ['Tech Research', 'Training Troops'],
        dd: [false, true],
      },
      {
        tasks: ['Use Any Speedups'],
        dd: [false],
      },
    ],
  },
  {
    name: 'Kill Event',
    description: 'Conquer The Opposing State, Kill Enemy Soldiers',
    events: [
      {
        tasks: ['Use Any Speedups'],
        dd: [false],
      },
      {
        tasks: ['Tech Research', 'Tech Speedups'],
        dd: [false, false],
      },
      {
        tasks: ['Increase Building Power', 'Every minute Every 1 min of building speed-up items used used'],
        dd: [false, false],
      },
      {
        tasks: ['Every 1 min of training speed-up items used'],
        dd: [false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Tech Research', 'Every 1 min of training speed-up items used'],
        dd: [false, false, false],
      },
      {
        tasks: ['Increase Building Power', 'Training Troops'],
        dd: [false, false],
      },
      {
        tasks: ['Tech Research', 'Training Troops'],
        dd: [false, false],
      },
    ],
  },
  {
    name: 'Free Development',
    description: 'Select any of the available events',
  },
]

export default events
