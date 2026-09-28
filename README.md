# 🧠 Swiggy Dynamic Operations Brain

A scalable, multi-restaurant **hyper-local operations memory engine** built using the **Hindsight Memory Stack**. This system acts as a central corporate brain connecting restaurant kitchen realities, delivery fleet alerts, and customer care responses through semantic AI memory.

## 📁 Project Structure
Ensure your local project directory is structured exactly like this:
```text
swiggy-ops-brain/
├── index.html        (Interactive Frontend UI Command Center)
├── index.mjs         (Express Backend & Hindsight Cloud Router)
├── package.json      (Node.js Dependency Configurations)
└── README.md         (Project Setup & Documentation Guide)
```

## 🚀 Setup & Installation Instructions

Follow these step-by-step instructions to get the application running on your local machine:

### 1. Configure the Cloud Token
Open the `index.mjs` file in your code editor and ensure your official **Hindsight Cloud API Key** is pasted into the client initialization block:
```javascript
const hindsight = new HindsightClient({
  baseUrl: 'https://vectorize.io',
  apiKey: 'YOUR_ACTUAL_HSK_TOKEN_HERE' // Replace with your dashboard key
});
```

### 2. Install Project Dependencies
Open your terminal window inside the project directory and execute the setup installation command:
```bash
npm install
```

### 3. Spin Up the Application Server
Kickstart your local development backend server loop by executing:
```bash
node index.mjs
```
*Your terminal will display confirmation:* `🚀 Swiggy Ops Brain server running at http://localhost:3000`

### 4. Access the Interactive Graphical UI
Open your desktop web browser and navigate directly to:
```text
http://localhost:3000/index.html
```

---

## 🛠️ How it Works under the Hood

The architecture leverages **Hindsight's core memory operations** rather than static databases to scale across infinite restaurant profiles:

*   **Semantic Retention (`/api/retain`):** Converts unstructured human log statements into dense mathematical vectors tagged with dynamic properties (e.g., `restaurant:meghana_foods`, `visibility:shared`).
*   **Contextual Scoped Recall (`/api/recall`):** Performs real-time vector similarity matching to isolate history threads according to selected restaurant tags.
*   **Empty State Guardrail:** If an entity has no relevant logs, the application catches the response natively and returns a clean, non-hallucinated status message to prevent error leakage.
