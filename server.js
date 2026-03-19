import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node.js K8s App</title>
        <style>
          /* Reset default margins and paddings */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Full-page background gradient */
          body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            color: #ffffff;
            text-align: center;
          }

          h1 {
            font-size: 2.5rem;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
            margin-bottom: 20px;
          }

          p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
          }

          /* Add subtle animation to the text */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          h1, p {
            animation: fadeIn 1.5s ease forwards;
          }

          /* Responsive adjustments */
          @media (max-width: 600px) {
            h1 { font-size: 1.8rem; }
            p { font-size: 1rem; }
          }
        </style>
      </head>
      <body>
        <div>
          <h1>Hello from Node.js on Kubernetes with GitOps & ArgoCD!</h1>
          <p>Deploying apps has never looked this good 🌟</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
