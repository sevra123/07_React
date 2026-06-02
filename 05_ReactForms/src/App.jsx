import TextInput from "./components/forms/TextInput";
import ContactForm from "./components/forms/ContactForm";
import RegistrationForm from "./components/forms/RegistrationForm";
import DynamicForm from "./components/forms/DynamicForm";
import "./App.css";

function App() {
  const fields = [
    {
      name: "ime",
      label: "Ime i Prezime",
      type: "text",
      required: true,
      placeholder: "Unesite ime i prezime",
      hint: "Minimalno 3, maksimalno 20 znakova.",
      minLength: {
        enabled: true,
        value: 3,
        message: "Ime mora imati barem 3 znaka.",
      },
      maxLength: {
        enabled: true,
        value: 20,
        message: "Ime može imati najviše 20 znakova.",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "primjer@domena.com",
      email: {
        enabled: true,
        message: "Molimo unesite ispravnu email adresu.",
      },
    },
    {
      name: "godine",
      label: "Godine",
      type: "number",
      required: true,
      placeholder: "npr. 25",
      range: {
        enabled: true,
        min: 18,
        max: 65,
        message: "Godine moraju biti između 18 i 65.",
      },
    },
    {
      name: "opis",
      label: "Kratki opis",
      type: "textarea",
      placeholder: "Recite nam nešto o sebi...",
      rows: 4,
      maxLength: {
        enabled: true,
        value: 120,
        message: "Opis može imati najviše 120 znakova.",
      },
    },
    {
      name: "grad",
      label: "Grad",
      type: "select",
      required: true,
      options: ["Zagreb", "Split", "Rijeka", "Osijek"],
      placeholder: "-- odaberite grad --",
    },
    {
      name: "spol",
      label: "Spol",
      type: "radio",
      required: true,
      options: ["Muško", "Žensko"],
    },
    {
      name: "newsletter",
      label: "Newsletter",
      type: "checkbox",
      checkboxLabel: "Želim primati newsletter",
      required: true,
    },
    {
      name: "korisnickoIme",
      label: "Korisničko ime",
      type: "text",
      required: true,
      pattern: "^[a-zA-Z0-9_.-]{4,16}$",
      patternMessage: "Dozvoljena su slova, brojevi i _.- (4–16 znakova).",
      // Primjer custom validatora: zabranimo 'admin'
      validator: (value) => {
        if (String(value).toLowerCase() === "admin") {
          return "Korisničko ime 'admin' nije dopušteno.";
        }
        return "";
      },
    },
  ];
  function handleFormSubmit(data) {
    console.log("Podaci iz forme:", data);
    alert("Forma poslana! Pogledaj konzolu.");
  }

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
      <h2>Registration Form</h2>
      <RegistrationForm />
      <h2>Dynamic Form</h2>
      <DynamicForm fields={fields} onSubmit={handleFormSubmit} />
    </>
  );
}

export default App;
