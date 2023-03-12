import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Business Request</h1>
          <h2>
            Create visual to display the correlation between the Actual and
            Budgets Monthly phone sales
          </h2>
        </p>

        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Dashboard Here
        </a>
        <a
          className="App-link"
          href="https://github.com/JohnKimaiyo/Month-Phone-Sales-Visualisation/blob/main/src/data/Actual%20and%20Budgeted%20Analysis.xlsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the  excel file here
        </a>
      </header>
    </div>
  );
}

export default App;
