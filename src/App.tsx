import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import puppeteer from 'puppeteer';
function App() { 
  let JobTitle;

 
  const clickMe = async () => {


    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});
    chrome.scripting.executeScript({
      target: { tabId : tab.id!},
      func: () =>{
      const collection = document.body;
      // const jobdescr = collection.getElementsByClassName('jobs-details__main-content jobs-details__main-content--single-pane full-width');
      JobTitle = collection.getElementsByClassName("t-24 t-bold job-details-jobs-unified-top-card__job-title")[0].textContent;
              let companyLocationPlaceholder = collection.getElementsByClassName("job-details-jobs-unified-top-card__primary-description-without-tagline mb2")[0].textContent;
              let sep = companyLocationPlaceholder?.split("·");
              alert(JobTitle);
              let company = sep?.at(0);
        alert(company);
              alert(sep?.at(0));
              alert(sep?.at(1));
              let remote = collection.getElementsByClassName("job-details-jobs-unified-top-card__job-insight-view-model-secondary")[0].textContent;
              alert(remote);
      
                }

    });
    
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Job Scraping</h1>
      <form>
      <input type ="text" id ="jobTitle" name ="JobTitle" placeholder='Job Title'/>
      </form>
      <div className="card">
        <button onClick={() => clickMe()}>Load
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
