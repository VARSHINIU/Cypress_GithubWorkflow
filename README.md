# Cypress Login Test — CI/CD with GitHub Actions

Automated login test using Cypress, integrated with GitHub Actions for continuous testing on every push and pull request.

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** to automatically run Cypress tests on every push or pull request to the `master` branch.

### What the workflow does:
1. Checks out the repository
2. Sets up Node.js v20
3. Installs dependencies via `npm ci`
4. Verifies Cypress installation
5. Runs tests on **Chrome (headless)**
6. Uploads **screenshots** on test failure
7. Uploads **test reports** after every run

---

## 🛠 Tech Stack

- **Cypress** — Test automation
- **GitHub Actions** — CI/CD pipeline
- **Chrome (headless)** — Browser for test execution
- **Node.js 20**

---

## 📁 Project Structure

```
├── cypress/
│   ├── e2e/              # Test spec files
│   ├── fixtures/         # Test data
│   ├── screenshots/      # Auto-captured on failure
│   └── support/          # Commands & hooks
├── reports/              # Test reports (uploaded as artifact)
├── .github/
│   └── workflows/
│       └── cypress.yml   # GitHub Actions workflow
└── package.json
```

---

## ⚙️ GitHub Actions Workflow

**Trigger:** Push or Pull Request to `master`  
**Environment:** `QA`  
**Runner:** `ubuntu-latest`

```yaml
name: Cypress Tests
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
```

### Secrets Required

Add these in your GitHub repo under **Settings → Secrets → Actions**:

| Secret | Description |
|---|---|
| `BASE_URL` | The URL of the login site to test |

---

## 🏃 Running Locally

```bash
# Install dependencies
npm ci

# Run tests
npx cypress run --browser chrome --headless

# Or open interactive mode
npx cypress open
```

---

## 📊 Artifacts

After each workflow run, you can download these from the **Actions** tab:

- **`cypress-screenshots`** — Screenshots captured on test failure
- **`cypress-reports`** — Full test report for every run

---

## 👩‍💻 Author

**Varshini U** — [GitHub](https://github.com/VARSHINIU)
