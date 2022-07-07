import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = (props: any) => {

  const handleClick = () => {
    document.cookie = "loggedIn=true";
  }

  return (
   <div>
    <h1>Login page</h1>
    <h1>Is logged in: {props.isLoggedIn}</h1>
    <div>
      <button type="button" onClick={handleClick}>Set login cookie</button>
    </div>
    <div>
      <Link href="/">Go to homepage</Link>
    </div>
   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("login getServerSideProps hit");

  return {
    props: {
      isLoggedIn: context.req.cookies["loggedIn"] === "true" ? "logged in" : "not logged in",
    }
  }
}



export default Home
