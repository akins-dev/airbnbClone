import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useRouter } from "next/router"
import { format } from "date-fns"
import InfoCard from "@/components/InfoCard";


function Search({ searchResults }) {

    const router = useRouter();

    // IMPLEMENT
    // Push to home page if router.query is empty

    // ES 6 Destructuring
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedDate = (date) => {
        return format(new Date(date), "dd MMMM yy");
    }
    const range = `${formattedDate(startDate)} - ${formattedDate(endDate)}`

    return (
        <div>
            {/* 
                props = { placeholder: blah blah blah } will be sent to Header
                so it can be destructured as { placeholder } in Header
            */}
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest${noOfGuests == 1 ? "" : "s"}`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs ">300+ Stays - {range} - for {noOfGuests} guest{noOfGuests == 1 ? "" : "s"}</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                    {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard 
                            key={img} 
                            img={img} 
                            location={location} 
                            title={title} 
                            description={description} 
                            star={star} 
                            price={price} 
                            total={total} 
                        />
                    ))}
                    </div>
                </section>

                <section>
                    
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://prolearn.onrender.com/airbnb/search_results").then(
    (res) => res.json()
  )

  return {
    props: {
        searchResults
    }
  }
}