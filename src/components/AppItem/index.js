// Write your code here
import './index.css'

const AppItem = props => {
  const {appsListDetails} = props
  const {appName, imageUrl} = appsListDetails

  return (
    <li className="appItem-container">
      <img alt={appName} className="app-item-image" src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
