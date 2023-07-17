import {Link, navigate} from "../components/link.tsx";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis dolorum eos, id neque nesciunt placeat, quam ratione reiciendis repudiandae sapiente totam. Blanditiis cum deleniti eos exercitationem nihil rerum vitae.</p>
      <button onClick={() => navigate('/about')}> Go to about 🕵️‍♀️ </button>
      <Link to='/about'> Go to about 🕵️‍♀️ </Link>
      <Link to='/about'> Go to Search 🔎️ </Link>
    </>
  )
}