import { useState, type FormEvent, type ChangeEvent } from 'react';
import { createComment, getSingleThought } from '../../utils/api';

const CommentForm = ({ thoughtId, setThought }: any) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      createComment(thoughtId, { commentText });
      setCommentText('');
      
      const res = await getSingleThought(thoughtId);
      const thought = await res.json();
      setThought(thought);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
