import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Largecard from '@/components/Largecard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
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

  const cardsData = [
    {"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},
    {"img":"https://links.papareact.com/q7j","title":"Unique stays"},
    {"img":"https://links.papareact.com/s03","title":"Entire homes"},
    {"img":"https://links.papareact.com/8ix","title":"Pet allowed"}
  ];
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      
      <Header/>
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl sm:text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={location} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <Largecard 
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
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
