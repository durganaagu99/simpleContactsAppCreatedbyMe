import {Component} from 'react'

import ContactProfile from './components/ContactProfile'

import './App.css'

const initialContactList = [
  {
    uniqueNo: 1,
    imgUrl:
      'https://cdn-icons-png.flaticon.com/512/290/290686.png?w=740&t=st=1678547869~exp=1678548469~hmac=012fd0b929bab100ea479546341dc1ee89ac2de12af71f7152e8751c0fc944ed',
    name: 'Ajay',
  },
  {
    uniqueNo: 2,
    imgUrl:
      'https://img.freepik.com/free-icon/bold_318-313765.jpg?size=338&ext=jpg&ga=GA1.2.1690030139.1655277708&semt=ais',
    name: 'Bhavani',
  },
  {
    uniqueNo: 3,
    imgUrl:
      'https://img.freepik.com/free-vector/c-letter_53876-60347.jpg?size=338&ext=jpg&ga=GA1.2.1690030139.1655277708&semt=ais',
    name: 'Charan',
  },

  {
    uniqueNo: 4,
    imgUrl:
      'https://img.freepik.com/premium-photo/red-alphabet-d-with-inner-shadow-isolated-white-with-shadow-3d-illustration_669435-957.jpg?w=740',
    name: 'Durga',
  },
  {
    uniqueNo: 5,
    imgUrl:
      'https://img.freepik.com/free-vector/e-letter_53876-60349.jpg?size=338&ext=jpg&ga=GA1.1.1690030139.1655277708&semt=ais',
    name: 'Eshwar',
  },
  {
    uniqueNo: 6,
    imgUrl:
      'https://img.freepik.com/free-photo/hand-holding-letter_53876-63812.jpg?size=338&ext=jpg&ga=GA1.1.1690030139.1655277708&semt=ais',
    name: 'Guru',
  },
  {
    uniqueNo: 7,
    imgUrl:
      'https://img.freepik.com/premium-photo/red-alphabet-h-with-inner-shadow-isolated-black-background-3d-illustration_669435-684.jpg?w=740',
    name: 'Hemanth',
  },
  {
    uniqueNo: 8,
    imgUrl:
      'https://cdn-icons-png.flaticon.com/512/15/15367.png?w=740&t=st=1678548167~exp=1678548767~hmac=e806b89116ceb0fafad557d10ba91fa724f9cec401056db8d7b5c95d2f345466',
    name: 'Ishanth',
  },
  {
    uniqueNo: 9,
    imgUrl:
      'https://img.freepik.com/free-vector/j-letter_53876-60354.jpg?t=st=1678548193~exp=1678548793~hmac=9d3df7cc720c698d013af77837c8d55595e42a3cdefced26d4995054bd13d971',
    name: 'John',
  },
  {
    uniqueNo: 10,
    imgUrl:
      'https://img.freepik.com/free-photo/red-letter-s_1232-690.jpg?w=826&t=st=1678548241~exp=1678548841~hmac=8daab97a376bfbe744663b491cb36dac63f873824bb1352fa54f87d3776eefd9',
    name: 'Sai',
  },
  {
    uniqueNo: 11,
    imgUrl:
      'https://img.freepik.com/free-photo/red-letter-s_1232-690.jpg?w=826&t=st=1678548241~exp=1678548841~hmac=8daab97a376bfbe744663b491cb36dac63f873824bb1352fa54f87d3776eefd9',
    name: 'Satish',
  },
  {
    uniqueNo: 12,
    imgUrl:
      'https://cdn-icons-png.flaticon.com/512/496/496077.png?w=740&t=st=1678548266~exp=1678548866~hmac=006b416869cd320b5f078b08faa435de3149dbf41518ef1227357fc619a3b4f8',
    name: 'Vijay',
  },
]
class App extends Component {
  state = {searchInput: ' ', contactList: initialContactList}

  onChangeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteContact = uniqueNo => {
    const {contactList} = this.state
    const filteredData = contactList.filter(
      eachContact => eachContact.uniqueNo !== uniqueNo,
    )
    this.setState({contactList: filteredData})
  }

  render() {
    const {searchInput, contactList} = this.state
    const searchResults = contactList.filter(eachContact =>
      eachContact.name.includes(searchInput),
    )

    return (
      <div className="search-container">
        <h1 className="heading">Contacts</h1>

        <input
          type="search"
          className="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          placeholder="Search Contact"
        />

        <ul className="list-container">
          {searchResults.map(eachContact => (
            <ContactProfile
              contactDetails={eachContact}
              key={eachContact.uniqueNo}
              onDeleteContact={this.onDeleteContact}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
