// Select elements
const submitBtn = document.getElementById('submit-btn');
const commentInput = document.getElementById('comment-input');
const commentsSection = document.getElementById('comments-section');


//when the usre hits the submit button the comment input it added to a card in the comments sections
function addComment(){
    const commentText = commentInput.value.trim();

    if (commentText === ''){
        alert('Please enter a comment');
        return;
    } 
    
    //create a comment element
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('card', 'mb-2', "shadow");

    const commentBody = document.createElement('div');
    commentBody.classList.add('card-body');
    commentBody.textContent = commentText;

    //add the commet body to the comment div
    commentDiv.appendChild(commentBody);
    
    //add the time stamp
    const time = getCurrentTime();
    const timeElement = document.createElement('p');
    timeElement.classList.add('text-muted', 'small');
    timeElement.textContent = `Posted at: ${time}`;

    commentsSection.prepend(timeElement);

    // Create a resolve button
    const resolveButton = document.createElement('button'); // Change 'btn' to 'button'
    resolveButton.classList.add('btn', 'btn-secondary'); // Add Bootstrap classes for styling
    resolveButton.textContent = 'Resolve'; // Set button text
   
    // Optional: Add an event listener to the button (e.g., to handle the resolve action)
    resolveButton.addEventListener('click', () => {
        alert('Comment resolved!'); // Example action
    });
   
    // Append the resolve button to the comment div
    commentDiv.appendChild(resolveButton);


    //append the comment div to the comment secions
    commentsSection.prepend(commentDiv);








    //clear comment sections
    commentInput.value=''

}


//adding functionality to the button
submitBtn.addEventListener('click', addComment);



//time
function getCurrentTime(){

    const date = new Date();

    // Get hours, minutes, and determine AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes with leading zero if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Get the date part (Today or other day)
    const today = new Date().toDateString();
    const commentDate = date.toDateString();

    const day = (today === commentDate) ? 'Today' : commentDate;

    // Return formatted time string
    return `${hours}:${formattedMinutes} ${ampm} ${day}`;


}

    