# ∫ Calculus Studio

### A complete workspace for solving, visualizing, exploring, and learning calculus.

Calculus Studio is an open-source calculus platform built to bring symbolic mathematics, numerical computation, graphing, learning tools, and mathematical experimentation into one clean web application.

Instead of jumping between a calculator, graphing tool, formula sheet, notebook, and practice system, Calculus Studio puts them together in a single workspace.

Built with **Next.js, TypeScript, Math.js, Plotly.js, and KaTeX**, the platform is designed to run directly on the web and deploy easily with Vercel.

---

## ✨ What is Calculus Studio?

Calculus Studio is designed around a simple idea:

> **Enter mathematics. Understand the result. Explore it visually.**

The platform combines several calculus workflows into one interface:

* Symbolic differentiation
* Higher-order derivatives
* Numerical definite integration
* Limits
* Equation and root solving
* Taylor polynomial generation
* Mathematical expression evaluation
* Interactive function graphing
* Calculus reference material
* Practice-problem generation
* Calculation history
* Personal mathematical notes
* Responsive desktop and mobile interface

No separate desktop software is required.

---

# 🚀 Features

## Symbolic Differentiation

Calculate derivatives symbolically with respect to `x`.

```text
diff sin(x)*x^2
```

Calculus Studio parses the expression, applies symbolic differentiation rules, simplifies the result, and displays the solution method.

Higher-order differentiation is also supported.

```text
diff2 exp(x)*cos(x)
```

---

## ∫ Definite Integrals

Calculate numerical approximations of definite integrals.

```text
integrate x^2 from 0 to 3
```

The numerical integration engine uses composite Simpson quadrature.

This makes the solver useful even when an elementary symbolic antiderivative is unavailable.

---

## Limits

Investigate limits numerically from both sides of a point.

```text
limit sin(x)/x at 0
```

The engine evaluates progressively smaller neighborhoods around the target value to estimate the limiting behavior.

---

## Root Finding

Solve nonlinear equations using Newton's method.

Write the equation in zero form and provide an initial guess.

```text
root x^3-x-2 guess 1
```

The solver iteratively approximates a root until the value stabilizes.

---

## Taylor Polynomials

Generate Taylor polynomial approximations around an arbitrary center.

```text
taylor exp(x) at 0 order 6
```

The engine:

1. Computes successive symbolic derivatives.
2. Evaluates them at the expansion point.
3. Divides each coefficient by the appropriate factorial.
4. Constructs the resulting Taylor polynomial.

Maclaurin polynomials are obtained by choosing a center of `0`.

---

## Mathematical Expression Evaluation

Calculus Studio can also operate as a general mathematical calculator.

```text
eval sin(pi/4)+sqrt(2)
```

Standard mathematical functions and constants can be used directly.

---

# 📈 Interactive Graphing

Calculus Studio includes an interactive function visualization workspace.

Enter a function such as:

```text
sin(x)
```

or:

```text
x^3 - 4*x
```

The graphing system samples the function and renders an interactive Plotly visualization.

The graph automatically supports capabilities provided by the Plotly interface such as:

* Zooming
* Panning
* Hover coordinates
* Autoscaling
* Resetting the viewport
* Interactive inspection

Graphing and computation live inside the same application, making it easy to move between analytical and visual approaches to a problem.

---

# 🎓 Practice Mode

Calculus Studio includes a built-in practice generator covering multiple problem types.

Practice exercises can include:

* Polynomial derivatives
* Chain-rule problems
* Definite integrals
* Limits
* Nonlinear root finding
* Taylor approximations

Problems can be sent directly into the solver workspace for exploration.

---

# 📚 Calculus Reference

A built-in reference section provides quick access to important calculus identities and theorems.

Topics include:

### Derivative Rules

```text
d/dx(x^n) = nx^(n-1)
```

### Product Rule

```text
(fg)' = f'g + fg'
```

### Quotient Rule

```text
(f/g)' = (f'g - fg') / g²
```

### Chain Rule

```text
d/dx f(g(x)) = f'(g(x))g'(x)
```

### Fundamental Theorem of Calculus

```text
d/dx ∫ₐˣ f(t)dt = f(x)
```

### Integration by Parts

```text
∫u dv = uv - ∫v du
```

### Taylor Series

```text
f(x) = Σ f⁽ⁿ⁾(a)(x-a)ⁿ / n!
```

The reference also introduces major multivariable and vector-calculus concepts including:

* Gradient
* Green's theorem
* Stokes' theorem
* Divergence theorem

---

# 📝 Mathematical Notebook

Calculus Studio contains a lightweight browser-based notebook.

Use it for:

* Definitions
* Derivations
* Study notes
* Formula reminders
* Problem-solving observations
* Exam preparation

Notes are automatically stored locally in the browser.

---

# 🕘 Calculation History

Successful calculations are automatically recorded.

History entries include:

* Original expression
* Calculated result
* Timestamp

Previous calculations can be reopened directly in the solver.

History is stored using browser local storage, so no account or database is required.

---

# ⌨️ Command Reference

| Operation         | Syntax                                  |
| ----------------- | --------------------------------------- |
| Evaluate          | `eval expression`                       |
| Derivative        | `diff expression`                       |
| Second derivative | `diff2 expression`                      |
| Definite integral | `integrate expression from a to b`      |
| Limit             | `limit expression at a`                 |
| Root              | `root expression guess a`               |
| Taylor polynomial | `taylor expression at a order n`        |
| Graph             | Enter a function in the Graph workspace |

### Examples

```text
diff x^5 - 3*x^2 + 7
```

```text
diff sin(x^2)
```

```text
diff2 exp(x)*cos(x)
```

```text
integrate x^3 + 2*x from 0 to 2
```

```text
limit (x^2-1)/(x-1) at 1
```

```text
root cos(x)-x guess 1
```

```text
taylor sin(x) at 0 order 7
```

```text
eval sqrt(2)+sin(pi/4)
```

---

# 🏗️ Architecture

Calculus Studio uses a straightforward web architecture designed for easy deployment and maintenance.

```text
┌───────────────────────────────────────┐
│              USER                    │
│         Desktop / Mobile             │
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│            NEXT.JS UI                 │
│                                       │
│ Solver                                │
│ Graph                                 │
│ Reference                             │
│ Practice                              │
│ Notebook                              │
└───────────────┬───────────────────────┘
                │
                │ /api/calc
                ▼
┌───────────────────────────────────────┐
│       CALCULATION API                 │
│                                       │
│ Expression Parsing                    │
│ Symbolic Differentiation              │
│ Numerical Integration                 │
│ Limit Approximation                   │
│ Newton Root Finding                   │
│ Taylor Polynomial Generation          │
└───────────────┬───────────────────────┘
                │
                ▼
┌───────────────────────────────────────┐
│        MATHEMATICS ENGINE             │
│                                       │
│ Math.js                               │
│ Numerical Algorithms                  │
└───────────────────────────────────────┘

Browser Visualization
        │
        └──────────────► Plotly.js

Browser Persistence
        │
        └──────────────► Local Storage
```

---

# 🧰 Technology Stack

### Application

* Next.js
* React
* TypeScript

### Mathematics

* Math.js

### Visualization

* Plotly.js

### Mathematical Typesetting

* KaTeX

### Persistence

* Browser Local Storage

### Deployment

* Vercel

The project does not require a database for its included functionality.

---

# 📁 Project Structure

```text
calculus-studio/
│
├── app/
│   ├── api/
│   │   └── calc/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── .gitignore
├── LICENSE
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

### `app/page.tsx`

Contains the primary application interface, including:

* Solver
* Graphing workspace
* Reference section
* Practice mode
* Notebook
* Calculation history

### `app/api/calc/route.ts`

Contains the server-side mathematics API.

It implements the computational logic for:

* Differentiation
* Numerical integration
* Limits
* Newton root finding
* Taylor polynomials
* General expression evaluation

### `app/globals.css`

Contains the responsive visual system and application styling.

---

# 💻 Local Development

## Requirements

Install:

* Node.js 18+
* npm
* Git

Clone the repository:

```bash
git clone <YOUR-REPOSITORY-URL>
cd calculus-studio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Changes made to the application will automatically appear during development.

---

# 🏭 Production Build

Before deploying, verify that the application builds successfully:

```bash
npm run build
```

Then run the production server locally with:

```bash
npm start
```

---

# ▲ Deploying to Vercel

Calculus Studio is configured for Vercel deployment.

## 1. Create a GitHub Repository

Create a new GitHub repository and push the project files.

```bash
git init
git add .
git commit -m "Initial Calculus Studio release"
git branch -M main
git remote add origin <YOUR-REPOSITORY-URL>
git push -u origin main
```

## 2. Import into Vercel

Open Vercel and choose:

```text
Add New
→ Project
→ Import Git Repository
```

Select the Calculus Studio repository.

Vercel should automatically recognize the project as a Next.js application.

## 3. Deploy

Deploy the project.

No environment variables are required for the included functionality.

After deployment, Vercel will provide a production URL for the application.

---

# 🔐 Privacy

Calculus Studio's notebook and calculation-history functionality use browser local storage.

That means these values remain associated with the user's browser rather than requiring them to be uploaded to an application database.

Users should still avoid storing sensitive or confidential information in the notebook.

---

# ⚠️ Numerical Mathematics

Some operations in Calculus Studio use numerical approximation rather than exact symbolic computation.

In particular:

* Definite integration uses numerical quadrature.
* Limits are estimated numerically.
* Root finding depends on an initial guess.
* Floating-point calculations have finite precision.

Numerical results should therefore be understood as approximations unless the operation explicitly produces a symbolic result.

For educational, scientific, engineering, or other important work, results should be independently verified when precision or mathematical rigor is required.

---

# 🧪 Example Workflow

Suppose we want to differentiate:

```text
x^2 sin(x)
```

Enter:

```text
diff sin(x)*x^2
```

Calculus Studio sends the expression to the calculation API.

The symbolic mathematics engine differentiates the expression and returns the result.

You can then open the graph workspace and enter:

```text
sin(x)*x^2
```

to explore the original function visually.

This solver → explanation → visualization workflow is the core philosophy behind Calculus Studio.

---

# 🎯 Design Philosophy

Calculus Studio is built around five principles.

**One workspace.**
Calculation, visualization, reference material, practice, and notes should not require separate applications.

**Mathematics first.**
The computational engine should produce mathematical results rather than relying on natural-language guessing.

**Fast experimentation.**
A mathematical idea should take seconds to enter, calculate, and visualize.

**Transparent methods.**
Where practical, the platform explains the method used to obtain a result.

**Accessible anywhere.**
A calculus environment should work from a modern browser without requiring specialized desktop software.

---

# 🤝 Contributing

Contributions are welcome.

When contributing:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Verify that the production build succeeds.
5. Commit your work with a descriptive message.
6. Open a pull request explaining the change.

Example:

```bash
git checkout -b feature/my-improvement
npm install
npm run dev
npm run build
git add .
git commit -m "Add calculus improvement"
git push origin feature/my-improvement
```

When changing mathematical functionality, include representative test cases and verify edge cases whenever possible.

---

# 🐛 Bug Reports

A useful mathematics bug report should include:

* The exact expression entered
* The expected result
* The result produced
* The operation being performed
* Browser/device information when relevant
* Steps needed to reproduce the problem

For numerical operations, include the expected precision when applicable.

---

# 📜 License

Calculus Studio is distributed under the **MIT License**.

See `LICENSE` for the full license text.

---

# ∫ Calculus Studio

**Solve it. Understand it. Visualize it.**

A unified calculus workspace for the web.
