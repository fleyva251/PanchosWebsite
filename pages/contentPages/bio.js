import Link from 'next/link'

export default function Bio() {
    return <div id='bioPage'>
    <h1>Bio</h1>
    <p id="bioPara">Currently, I work as a Software Engineering specialist with Galvanize Inc. I have been there since September 2020.<br/>
      My resposibilities include developing coding challenges and technical project for over 30 students to complete, <br/>
      providing critical feedback on 10 modules and over 90 lessons, and supporting the development and creation <br/> of curriculum 
      for a Stride Intro to Javascript- 1 term course.
    </p>
    <h2> Return to
      <Link href="/contentPages/contentMenu">
      <a className='contentMenuLink'> menu</a>
      </Link>
    </h2>
    </div>
  }
  