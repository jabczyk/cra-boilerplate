import { Link, RouteComponentProps } from '@reach/router'
import { FormattedMessage } from 'react-intl'
import 'twin.macro'

const Error404: React.FC<RouteComponentProps> = () => {
  return (
    <div tw="text-center mt-10">
      <h1 tw="text-3xl">
        <FormattedMessage id="404.notfound" />
      </h1>
      <Link to="/" tw="text-xl text-blue-500 underline">
        <FormattedMessage id="404.visithome" />
      </Link>
    </div>
  )
}

export default Error404
