import {navigate} from "../components/link.tsx";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis dolorum eos, id neque nesciunt placeat, quam ratione reiciendis repudiandae sapiente totam. Blanditiis cum deleniti eos exercitationem nihil rerum vitae.</p>
      <button onClick={() => navigate('/')}> Go to Home 🏡</button>
    </>
  )
}