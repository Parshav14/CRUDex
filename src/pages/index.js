import Head from "next/head"; 
import ItemTable from "@/components/ItemTable"; 


const Home = () => {
  return (
    <div>
      <Head>
        <title>CRUDex App</title> // Set the title of the page
        <meta
          name="description"
          content="Next.js CRUD app with Axios and Material Table"
        />{" "}
        // Set the meta description
      </Head>
      <main>
        <ItemTable /> // Render the ItemTable component
      </main>
    </div>
  );
};

export default Home; 
