import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const Home: NextPage = (props: any) => {
  return (
   <div>
    <h1>Homepage</h1>
    <h1>Is logged in: {props.isLoggedIn}</h1>
    <h1>
      <Link href="/login">Go to login</Link>
    </h1>
   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("homepage getServerSideProps hit");

  return {
    props: {
      isLoggedIn: context.req.cookies["loggedIn"] === "true" ? "logged in" : "not logged in",
    }
  }
}

export default Home;