import { useState } from "react";

const AddArticle = (props) => {
//i eilutė sukuria naują būseną su pavadinimu formData ir funkciją setFormData, kuri leidžia keisti šią būseną.
  const [formData, setFormData] = useState({
  })
// Funkcija, kuri keičia formos duomenis priklausomai nuo įvesties
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
// Funkcija, kuri išsaugo įvestus duomenis ir kviečia onSave funkciją
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(formData);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-group">
        <input type="text" name="title" placeholder="naujienos pavadinimas" className="m-1 form-control" onChange={handleChange} value={formData.title || ""}/>
      </div>
      <div className="form-group">
        <textarea name="description" placeholder="naujienos tekstas" className="m-1 form-control" onChange={handleChange} value={formData.description || ""}></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">saugoti</button>
      </div>
    </form>
  );
}

export default AddArticle;