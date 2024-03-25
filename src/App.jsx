import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign Up Data',data)
  }

  const handleUpdateProfile = data => {
    console.log('Update Profile Data',data)
  }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
       </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update' >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your Profile update</p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
