// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListDetails, clickTabButton, isActive} = props
  const {displayText, tabId} = tabsListDetails

  const textStyle = isActive ? 'button active' : 'button'

  const onClickChangeTab = () => {
    clickTabButton(tabId)
  }

  return (
    <li className="tab-item">
      <button className={textStyle} type="button" onClick={onClickChangeTab}>
        <p className="tab-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
