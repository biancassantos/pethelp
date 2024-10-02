import Message from '../components/ui/Message';

const ConfirmedRequest = () => {
  return (
    <Message 
    title="Your request has been sent!" 
    msg="Thank you for helping save a pet today. Soon you’ll receive an email with more information about the status of your request and the next steps to be followed." 
    src="/pethelp"
    text2="Go back to the homepage"
    />
  )
}

export default ConfirmedRequest;