export const projectCategories = [
  {
    id: 2,
    name: 'Android',
    showCategory: true,
    projects: [
      {
        id: 3,
        name: 'The New York Times Bestseller List',
        description: 'An application that calls the NYT API and shows a list of bestselling books and most recent articles. It allows buying the books and reading the articles.',
        tools: 'Kotlin, Android Studio, NYT API',
        github: 'https://github.com/chiuannica/and102-lab3-starter',
        img: 'nyt.gif'
      },
      {
        id: 4,
        name: 'Photocards and Yutaro',
        description: 'An application that shows photocards, allows winning new photocards, editing messages, and choosing random motivating messages..',
        tools: 'Kotlin, Android Studio',
        github: 'https://github.com/chiuannica/PhotocardApp',
        img: 'photocards.gif'
      },
      {
        id: 1,
        name: 'Wishlist',
        description: 'A wishlist with automatic saving, creation, deletion abilities',
        tools: 'Kotlin, Android Studio',
        github: 'https://github.com/chiuannica/Wishlist',
        img: 'wishlist.gif'
      },
      {
        id: 2,
        name: 'Capybarable',
        description: 'An application inspired by Wordle, with a Capybara twist.',
        tools: 'Kotlin, Android Studio',
        github: 'https://github.com/chiuannica/Wordle',
        img: 'wordle.gif'
      },
      {
        id: 0,
        name: 'To Do List',
        description: 'A simple to do list with automatic saving, update, creation, and deletion abilities',
        tools: 'Kotlin, Android Studio',
        github: 'https://github.com/chiuannica/SimpleToDo',
        img: 'todolist.gif'
      }
    ]
  },
  {
    id: 0,
    name: 'iOS',
    showCategory: false,
    projects: [
      {
        id: 0,
        name: 'Tippy',
        description: 'Helps you split the bill',
        tools: 'Swift, xcode',
        github: 'https://github.com/chiuannica/CalculatorApp',
        img: 'tippy.gif'
      }
    ]
  },
  {
    id: 1,
    name: 'Web Development',
    showCategory: false,
    projects: [
      {
        id: 1,
        name: 'DogeBook',
        description: 'This is a mock Facebook application. The application supports profile, timeline, friend recommendations, and friends!',
        tools: 'ASP.NET, C#, Microsoft SQL Database, SQL HTML/CSS',
        github: 'https://github.com/chiuannica/DogeBook'
      },
      {
        id: 2,
        name: 'DogeMail',
        description: 'This is a mock email application. This is a school project! Please don\'t enter any real information in this application.',
        tools: 'ASP.NET, C#, Microsoft SQL Database, SQL HTML/CSS',
        link: 'http://cis-iis2.temple.edu/Spring2021/CIS3342_tui30639/Project3/',
        img: 'dogemail.gif'
      },
      {
        id: 2,
        name: 'Doge\'s Pizza House',
        description: 'This is a simple pizza ordering website.',
        tools: 'ASP.NET, C#, Microsoft SQL Database, SQL HTML/CSS',
        link: 'http://cis-iis2.temple.edu/Spring2021/CIS3342_tui30639/Project2/',
        img: 'dogepizza.gif'
      },
      {
        id: 14,
        name: 'Svelte Pokemon Shopping Cart Tutorial',
        description: 'This is a tutorial on how to create a Svelte Shopping Cart for my frontend class.',
        tools: 'HTML/CSS, Svelte, JavaScript',
        link: 'https://cis-iis2.temple.edu/Fall2020/CIS3344_tui30639/tutorial_page/index.html'
      },
      {
        id: 3,
        name: 'Video Game Store',
        description: 'A website that allows you to search video games in a video game store.',
        tools: 'JavaScript, HTML/CSS',
        link: 'http://cis-iis2.temple.edu/Fall2020/CIS3344_tui30639/lab3/Games.html'
      },
      {
        id: 4,
        name: 'ACM-W Website',
        description: 'A website for Temple\'s chapter of the Association of Computing Machinery',
        tools: 'Vue, JavaScript, HTML/CSS',
        link: 'https://tuacmw.onrender.com',
        github: 'https://github.com/chiuannica/acmw-vue'
      },
      {
        id: 5,
        name: "Valentine's Day Card Generator",
        description: 'A website that take user input and generates a card with a random meme',
        tools: 'JavaScript, Meme API, HTML/CSS',
        link: 'https://chiuannica.github.io/valentinesdaycard/meme.html',
        github: 'https://github.com/chiuannica/valentinesdaycard'
      }
    ]
  },
  {
    id: 3,
    name: 'Data Science',
    showCategory: false,
    projects: [
      {
        id: 0,
        name: 'Finding Doge: Cryptocurrency Value and Search Trends',
        description: 'An investigation of the relationship between Google search trends and cryptocurrency values<br> Best Financial Hack at PearlHacks (255 participants). <br>Two years later, my predition was proved to be true.',
        tools: 'Python, Pandas, Matplotlib, Scipy',
        link: 'https://devpost.com/software/search-trends-and-cryptocurrencies',
        github: 'https://gist.github.com/chiuannica/b40328c39bd816d9e3dd5886925eccfd'
      },
      {
        id: 1,
        name: 'Comparing Cryptocurrencies: Dogecoin vs. Ethereum',
        description: 'An analysis of Dogecoin and Ether to evaluate if it is a wise investment or has reliable growth<br> Best Financial Hack at FemmeHacks (210 participants). <br>Two years later, my predition was proved to be true.',
        tools: 'Python, Pandas, Matplotlib, Keras',
        link: 'https://devpost.com/software/ethereuming',
        github: 'https://gist.github.com/chiuannica/df4c95917450d64517750f4e5dd93b1b'
      }
    ]
  }
]
