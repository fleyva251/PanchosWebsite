import Link from 'next/link'

export default function Skills() {
    return <div>
    <h1>Technical Skills</h1>
    <ul id="skills">
        <ul><span class="techSkills">Front-End:</span>
            <li>Javascript</li>
            <li>React.js</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul >
        <ul><span class="techSkills">Back-End</span>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
        </ul>
        <ul><span class="techSkills">Libraries</span>
            <li>Axios</li>
            <li>Babel</li>
            <li>Webpack</li>
            <li>Bootstrap</li>
            <li>React-Router</li>
            <li>React-Hooks</li>
            <li>Next.js</li>
        </ul>
        <ul><span class="techSkills">Miscellaneous</span>
            <li>Agile Workflow</li>
            <li>Git Workflow</li>
            <li>Microservice Architecture</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Heroku</li>
        </ul>
    </ul>
    <h2>
      <Link href="/contentPages/contentMenu">
      <a>Return to menu</a>
      </Link>
    </h2>
    </div>
  }