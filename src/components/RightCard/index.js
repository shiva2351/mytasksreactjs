import {Component} from 'react'
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

class RightCard extends Component {
  renderTasks = () => {
    const {taskList, activeId} = this.props

    return (
      <>
        {taskList.map(eachItem => {
          const {tagSelect, textTask, id} = eachItem
          return (
            <li key={id} value={tagSelect}>
              <p>{textTask}</p>
              <p>{tagSelect}</p>
            </li>
          )
        })}
      </>
    )
  }

  render() {
    const {taskList, addId, activeId} = this.props

    return (
      <DivCard>
        <h1>Tags</h1>
        <ul>
          {tagsList.map(eachItem => {
            const btnFunction = () => {
              addId(eachItem.optionId)
            }
            return (
              <li key={eachItem.optionId} value={eachItem.optionId}>
                <button onClick={btnFunction} type="button">
                  {eachItem.displayText}
                </button>
              </li>
            )
          })}
        </ul>
        <h1>Tasks</h1>

        {taskList.length < 1 ? (
          <p>No Tasks Added Yet</p>
        ) : (
          <ul>{this.renderTasks()}</ul>
        )}
      </DivCard>
    )
  }
}

export default RightCard
