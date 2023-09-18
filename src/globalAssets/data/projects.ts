/**
 * Define data for the projects section.
 */
const projects = [
  {
    title: 'Portfolio',
    image: require('globalAssets/images/projects/portfolio_rebuild_2022.png'),
    desc: 'Rebuild of my portfolio, buit with the ReactJS Boilerplate, and is this app.',
    tech: 'ReactJS, Webpack 5, Babel 7, TypeScript, ESLint, Styled-Components, Jest, React Testing Library',
    git: 'https://github.com/karlchvojka/karl_chvojka_portfolio'
  },
  {
    title: 'ReactJS Boilerplate',
    image: require('globalAssets/images/projects/reactjsbasictemplate2023_screenshot.png'),
    desc: `A CRA Alternative. Set up to have different 'flavors', within the branches.`,
    tech: 'ReactJS, Webpack 5, Babel 7, TypeScript, ESLint, Styled-Components, Jest, React Testing Library',
    git: 'https://github.com/karlchvojka/reactjs_boilerplate'
  },
  {
    title: 'Weather App Rebuild',
    image: require('globalAssets/images/projects/weather_rebuild.png'),
    desc: '2022 Rebuild of the Weather app. An example of a simple API call, and Typescript.',
    tech: 'ReactJS, Webpack 5, Babel 7, TypeScript, Docker, Gitlab CI/CD, ESLint, Styled-Components, React Router',
    git: 'https://github.com/karlchvojka/weather_app'
  },
  {
    title: 'SQUABBLE: FINAL',
    image: require('globalAssets/images/projects/squabble.png'),
    desc: 'Squabble is a budget splitting app. It allows users to view, record, and evenly split budgets while tracking infrequent purchases.',
    tech: 'ReactJS, Ruby on Rails, Bootstrap 4, React Router',
    git: 'https://github.com/karlchvojka/lhl-final-project'
  },
  {
    title: 'JUNGLE APP',
    image: require('globalAssets/images/projects/jungle.png'),
    desc: 'A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails.',
    tech: 'Ruby on Rails, Stripe',
    git: 'https://github.com/karlchvojka/jungle-rails'
  },
]

export default projects