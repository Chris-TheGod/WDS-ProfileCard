import { ProfileCard } from './ProfileCard'
import user from './user.json'

function App() {
  return (
    <>
      <ProfileCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </>
  )
}

export default App
