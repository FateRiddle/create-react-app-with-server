import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions'
import { getFilteredUsers } from '../../redux/reducers/index'
import { fetchData } from '../../api/fetchData'

class ContentTable extends React.Component {

    componentDidMount() {
      fetchData().then(data => {
        this.props.updateUser(data)
      })
    }

    componentWillUnmount() {

    }

  tablehead = ['姓名','电话','面积','报名时间','活动']

  render() {
    const { store } = this.props
    const users = getFilteredUsers(store)

    return <div className='ContentTable'>
      <ul className="TableHeader">
        {this.tablehead.map( (name,index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <div className='ScrollWrapper'>
        <table>
          <tbody>
            {users.map((user,index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{`${user.address} 平`}</td>
                <td>{user.createdAt.substring(0,10)}</td>
                <td>{user.huodong}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  }
}

ContentTable.propTypes = {

}

const mapStateToProps = store => ({store})

ContentTable = connect(mapStateToProps,{updateUser})(ContentTable)

export default ContentTable
