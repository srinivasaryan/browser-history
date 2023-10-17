import './index.css'

const BrowserItems = props => {
  const {browserDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = browserDetails
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt={title} />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
    </li>
  )
}
export default BrowserItems
