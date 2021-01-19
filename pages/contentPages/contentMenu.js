import Link from 'next/link'

export default function ContentMenu() {
    return <h1>
        Read{''}
        <Link href="/contentMenu/bio">
            <a>my Bio!</a>
        </Link>
        </h1>
  }
  