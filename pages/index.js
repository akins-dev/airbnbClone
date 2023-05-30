import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  const exploreData = [
    {"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},
    {"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},
    {"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},
    {"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},
    {"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}
  ]
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      
      <Header/>
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}


          {exploreData.map((item) => (
            <h1 key={item.location}>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

// Use getServerSideProps() for data that changes frequently

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData
//     }
//   }
// }
