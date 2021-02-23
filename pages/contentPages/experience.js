import Link from 'next/link'

export default function Experience() {
    return <div id="experience">
      <div id="experiencePhoto">
    <h1>Experience</h1>
    <h2> Software Engineering Applications</h2>
    <ul id="applicationInfo">
      <ul>Lvl Up Fitness
        <li>Created the front end functionality that allowed users to save workouts and meals to their profiles using Axios and Node.js. Applied Axios to streamline GET and POST requests.
</li>
        <li>Utilized MongoDb for its ability to quickly handle large amounts of data. When benchmarked against MySQL, MongoDB was faster at updating by nearly 49 seconds and inserting by 12,000 seconds when using over 100,000 sets of data. 
</li>
        <li>Built the schema for other team members to use and reference. As well as seeded it to the cloud using Atlas for persistent data.
</li>
        <li>Elected as assistant project lead to manage the ticket system on Trello to efficiently move production along. Ensured team members were following the ticket system, correctly adding new tickets, and moving tickets to the correct areas.
</li>
        <li>Collaborated with 12 other developers in an agile workflow environment, using code reviews and pair programming to grow our communication teamwork skills. 
</li>
      </ul>
      <ul>HomeRepo
        <li>Deployed a proxy server to run all of the microservices.</li>
        <li>Designed the reviews component for smooth integration among the other components.</li>
        <li>Created an API to send reviews to the front-end and be able to submit reviews to the database using routes.</li>
      </ul>
    </ul>
    <h2>Job Experience</h2>
    <ul id="jobInfo">
      <ul>Galvanize Inc. - Software Engineering Specialist
        <li>Created coding challenges and technical projects for roughly 30 students to complete.</li>
        <li>Provide critical feedback on 10 modules and over 90 lessons. </li>
        <li>Support the development and creation of curriculum for a K12 Intro to Javascript- 1 term course.</li>
      </ul>
      <ul> Galvanize Inc. - Software Engineering Intern
        <li>Created portfolio projects under certain guidelines such as creating a polished, deployed, full-stack application with a focus on MVPs and CRUD.
        </li>
        <li>Researched and utilized new technologies and frameworks such as GraphQL and KnexJS</li>
      </ul>
      <ul> United States Army
        <li>Maintained and accounted for up to 2.5 million dollars’ worth of equipment, Basic Issue Items, and communications platforms, resulting in no losses and mission-ready equipment.
</li>
        <li>Planned and executed the training of up to 32 soldiers, resulting in numerous operational successes during rotations to the National Training Center, the Joint Multi-National Readiness Center, and Poland.
</li>
      </ul>
    </ul>
    <h3>
      <Link href="/contentPages/contentMenu">
      <a>Return to menu</a>
      </Link>
    </h3>
    </div>
      </div>
  }