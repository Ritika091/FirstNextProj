import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keyword" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil atque quae omnis quaerat consequatur itaque, ratione voluptatem ut eum! Debitis sed cum temporibus, blanditiis non hic. Animi perspiciatis iste tempore impedit dolorum delectus. Doloribus in molestiae minus asperiores, voluptatibus nihil, esse aliquam vitae eum itaque aut! Libero tempora enim architecto voluptate aperiam reiciendis, quo exercitationem vitae explicabo ratione nihil sit accusamus optio obcaecati!</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil atque quae omnis quaerat consequatur itaque, ratione voluptatem ut eum! Debitis sed cum temporibus, blanditiis non hic. Animi perspiciatis iste tempore impedit dolorum delectus. Doloribus in molestiae minus asperiores, voluptatibus nihil, esse aliquam vitae eum itaque aut! Libero tempora enim architecto voluptate aperiam reiciendis, quo exercitationem vitae explicabo ratione nihil sit accusamus optio obcaecati!</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
