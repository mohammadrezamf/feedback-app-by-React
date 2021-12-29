import {FaTimes , FaEdit} from 'react-icons/fa'
import Card from './shared/Card'


// use of Context !!
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'





function FeedbackItem({Item}) {

    const {deleteFeedback , editFeedback} = useContext(FeedbackContext)
    
  


    return (
        <>
             <Card>
                <div className="num-display">{Item.rating}</div>
                <button onClick={ () => deleteFeedback(Item.id)} className='close'>
                    <FaTimes color= 'purple'/>
                </button>
                <button onClick ={() => editFeedback(Item)} className="edit">
                    <FaEdit color='blue'/>
                </button>
                <div className="text-display">{Item.text}</div>
                
            </Card>
        </>
       
    )
}
 
Card.defaultProps = {
    reverse :false,
}

export default FeedbackItem
