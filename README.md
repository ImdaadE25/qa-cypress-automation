# QA Engineer Assessment – Automation & AI

## 🌐 Section 1 – Cypress Setup

# 1. Clone the project

# 2. Install the packages
npm install 

# 3. Open Cypress Test Runner 
npx cypress cypress:open:qa

# 4. Run Cypress Test Runner in Terminal
npx cypress cypress:run:qa

## 🌐 Section 2 – Cypress Automation Task

# Note:
1. **There is no "EIGHT25" word in the title "eight25" only available**  
2. **There is no "Our Work" word in the available in the page instead took the available word**  


## 🌐 Section 3 – Low-Code / AI Automation

If I had to automate the flow **Homepage → Work → Contact Form** using a low-code or AI-powered automation tool (like Testim, Mabl, or Katalon), I would follow these steps:

1. **📖 Learn the tool**  
   - Go through the tool’s documentation or guides.  
   - Use ChatGPT to quickly understand its features and workflow.

2. **⚙️ Set up a new project**  
   - Open the tool and create a new project.  
   - Set the base URL to: `https://www.eight25media.com/`.

3. **🏠 Homepage test**  
   - Use the tool’s recorder (Chrome extension or built-in).  
   - Navigate to the homepage.  
   - Add a check to confirm the page title contains **“EIGHT25”**.

4. **🖱 Navigation test**  
   - Click on the **Work** menu item.  
   - Add a check to confirm the page contains the text **“Our Work”**.

5. **✉️ Contact form test**  
   - Go to the **Contact** page.  
   - Fill in the fields:  
     - Name: `Test User`  
     - Email: `testuser@example.com`  
     - Message: `This is a test message`  
   - Add checks to confirm the fields are filled correctly (no submission required).

6. **📱 Responsive check (Bonus)**  
   - Switch to mobile view (e.g., 375x667).  
   - Navigate to the homepage and check that the **hamburger menu icon** is visible.

7. **✅ Run and review results**  
   - Save the test flow and execute it.  
   - Check the dashboard for results and screenshots.

---

## 🤖 Section 4 – AI in QA

In the next three years, AI-based test automation will become even more powerful and accessible. I was not very familiar with some of these tools before, but after learning about their capabilities, I see how they can greatly reduce challenges like **flaky tests** by detecting UI changes and updating locators automatically.  

Low-code and AI-driven platforms will also make automation easier to adopt, since **clear dashboards and visual workflows** help even non-technical team members contribute. Another key improvement will be the **automatic generation of test scenarios from real user behavior**, ensuring that critical and high-risk areas are always tested.  

Overall, these advancements will **reduce maintenance work, improve coverage**, and allow QA engineers to focus more on **exploratory and strategic testing**.

---


