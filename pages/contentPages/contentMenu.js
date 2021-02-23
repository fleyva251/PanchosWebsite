import Link from 'next/link'

export default function ContentMenu() {
    return <div>
        <h1 id="contentMenu">
        <span class="content">
        Read{''}
        <Link href="/contentPages/bio"><a> my Bio!</a></Link>
        </span>
        <span class="content">
        Read{''}
        <Link href="/contentPages/skills"><a> my Skills!</a></Link>
        </span>
        <span class="content">
        Read{''}
        <Link href="/contentPages/experience"><a> my Experience!</a></Link>
        </span>
        </h1>
        <h2 id="contentMenuHome">
            <Link href="/">Return Home</Link>
        </h2>
        </div>
  }
  