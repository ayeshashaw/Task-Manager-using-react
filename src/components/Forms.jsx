export const Forms=()=>{



    return(
    <>
    <form>
        <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Title"
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add Body"
          autoComplete="off"
        />
      </div>

      <button type="submit">Add Post</button>
    </form>
    </>
    )
}