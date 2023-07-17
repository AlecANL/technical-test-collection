
interface IUrlParameters {
  routeParams?: any;
}

export default function Search(props: IUrlParameters) {

  return (
    <>
      <h1>Search</h1>
      <p>You have search: {props?.routeParams?.query}</p>
    </>
  )
}