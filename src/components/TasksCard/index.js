import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import LeftCard from '../LeftCard'
import RightCard from '../RightCard'
import {DivCard} from './StyledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TasksCard extends Component {
  state = {
    taskList: [],
    activeId: [],
  }

  addTask = object => {
    this.setState(preState => ({
      taskList: [...preState.taskList, {...object, id: uuidv4()}],
    }))
  }

  addId = id => {
    this.setState(preState => {
      const {activeId} = preState
      if (activeId.includes(id)) {
        const filterList = activeId.filter(eachItem => eachItem !== id)
        return {activeId: filterList}
      }
      return {activeId: [...activeId, id]}
    })
  }

  renderTasks = () => {
    console.log('rendertasks taskcard')
    const {taskList, activeId} = this.state
    const filtertasks = taskList.filter(eachItem =>
      activeId.includes(eachItem.tagSelect),
    )
    console.log(filtertasks, 'fillter')
    return activeId.length === 0 ? taskList : filtertasks
  }

  render() {
    const {taskList, activeId} = this.state
    console.log(uuidv4())
    const kk = this.renderTasks()
    console.log(kk, 'rendertasks')
    return (
      <DivCard>
        <LeftCard addTask={this.addTask} />
        <RightCard
          addId={this.addId}
          activeId={activeId}
          addTask={this.addTask}
          taskList={kk}
        />
      </DivCard>
    )
  }
}

export default TasksCard
