import { Link, RouteComponentProps } from '@reach/router'

const Error404: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Visit the homepage</Link>
    </>
  )
}

export default Error404
