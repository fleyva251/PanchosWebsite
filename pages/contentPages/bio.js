import Link from 'next/link'

export default function Bio() {
    return <div>
    <h1>Bio</h1>
    <p id="bioPara">Currently, I work as a Software Engineering specialist with Galvanize Inc. I have been there since September 2020.
      My resposibilities include developing coding challenges and technical project for over 30 students to complete, 
      providing critical feedback on 10 modules and over 90 lessons, and supporting the development and creation of curriculum 
      for a Stride Intro to Javascript- 1 term course.
    </p>
    <h2>
      <Link href="/contentPages/contentMenu">
      <a>Return to menu</a>
      </Link>
    </h2>
    </div>
  }
  