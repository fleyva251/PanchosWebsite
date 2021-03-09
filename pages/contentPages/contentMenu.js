import Link from 'next/link'

export default function ContentMenu() {
    return <div>
        <h1 id="contentMenu">
        <span class="content">
        <Link href="/contentPages/bio"><a> My bio!</a></Link>
        </span>
        <span class="content">
        <Link href="/contentPages/skills"><a> My skills!</a></Link>
        </span>
        <span class="content">
        <Link href="/contentPages/experience"><a> My experience!</a></Link>
        </span>
        </h1>
        <h2 id="contentMenuHome">
           Return <Link href="/"><a id='homePageLink'>Home</a></Link>
        </h2>
        </div>
  }
  