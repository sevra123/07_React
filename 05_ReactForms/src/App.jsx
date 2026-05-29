import TextInput from "./components/forms/TextInput";
import ContactForm from "./components/forms/ContactForm";
import "./App.css";

function App() {
  return (
    <>
      <form>
        <TextInput name="ime" label="Ime:" type="text" />
        <TextInput name="email" label="Email:" type="email" />
        <TextInput name="telefon" label="Telefon:" type="tel" />
        <TextInput name="godine" label="Godine:" type="number:" />
      </form>
      <h2>Contact Form</h2>
      <ContactForm />
    </>
  );
}

export default App;
