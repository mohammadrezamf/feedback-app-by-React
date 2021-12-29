import {useState ,useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


//use of Context !!
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'




function FeedbackForm() {
    const {addFeedback , feedbackEdit , updateFeedback} = useContext(FeedbackContext)
// -----------------------------------
    const [text , setText] = useState('')
    const [btnDisabled, SetBtnDisabled] = useState(true)
    const [message , setMessage] = useState('')
    const [rating , setRating] = useState(10)


// use Effect !!
    useEffect(() => {
        if(feedbackEdit.edit === true){
            SetBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }




    },[feedbackEdit])




    // functions!!
    const handleTextChange = (e) => {
        
        if(text===''){
            SetBtnDisabled(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length <=10){
            setMessage('Text must be at least 10 character')
            SetBtnDisabled(true)
        }else{
            setMessage(null)
            SetBtnDisabled(false)
        };

          setText(e.target.value);
    }

    const changeRating = (rating)=>{
       setRating(rating)
       console.log(rating)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id , newFeedback )
            }else{
                 addFeedback(newFeedback)
            }
           
            setText('')
        }  
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={changeRating}/>
                <div  className="input-group">
                    <input type="text"  placeholder='write a review'
                        onChange={handleTextChange}
                        defaultValue={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled} >send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm


