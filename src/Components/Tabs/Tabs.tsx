import { TabsPropsType } from "./Tabs.types"
import './Tabs.scss'
const Tabs = ({Tabs , HandleTabs}:TabsPropsType) => {
  return (
    <div className="Tabs flex justify-center">
      {Tabs.map(tab => <span key={tab.id} className='Tab' onClick={() => HandleTabs&&HandleTabs(tab.id)}>{tab.title}</span>)}
    </div>
  )
}

export default Tabs