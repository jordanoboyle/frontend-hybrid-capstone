import axios from "axios"
import { useState } from "react";


export function PostUpdate(props) {
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");

  const handlingSubmitPostUpdate = (event) => {
    event.preventDefault();
    console.log("Update article/blog post from modal");
    let params = new FormData(event.target); 
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
      console.log(response.data);

      window.location.href = "/userprofile";
    })
    .catch(error => {
      console.log('There was an error during the update.', error);
      setError("There was an error on the update. Please try again later.")
    })
  }
  // console.log(props.post) //For purposes of seeing data structures
  const handlingPostDelete = (pID) => {
    console.log("sending destroy post request");
    // props.onPostDelete(props.post.id); //post.id passed in props to handlePostDelete in Content
    axios.delete(`http://localhost:3000/posts/${pID}.json`)
    .then(response => {
      console.log(response.data)
      window.location.href = "/userprofile";
    })
    .catch(error => {
      console.error("There was an error during delete", error);
      setDeleteError("Encountered error during delete. Please try again later.");
    })

  }

  return (
    <div>
      <h1>Update your thoughts and opinions here:</h1>
      <form onSubmit={handlingSubmitPostUpdate} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title:</label>
          <input name="title" type="text" defaultValue={props.post.title} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Game:</label>
          <input name="game_title" type="text" defaultValue={props.post.game_title} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Article:</label>
          <textarea name="body" defaultValue={props.post.body} style={textareaStyle}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Update The Article</button>
      </form>
      {error && (
        <div style={{ color: 'red' }}>
          {error}
        </div>
      )}
      <div style={formStyle}>
        <button style={buttonStyle} onClick={() => handlingPostDelete(props.post.id)}>Remove Article</button>
      </div>
      {deleteError && (
        <div style={{ color: 'red' }}>
          {deleteError}
        </div>
      )}
    </div>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};



const formGroupStyle = {
  marginBottom: '15px',
  width: '100%',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '20px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  width: '100%',
  height: '150px',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '20px',
  border: '1px solid #ccc',
  resize: 'vertical',
  overflowY: "auto"  //This is what allows for the vertical scrolling(basically overflow the y, you can scroll)
};

const buttonStyle = {
  padding: '10px 20px',
  paddingTop: "10px",
  marginTop: "10px",
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};