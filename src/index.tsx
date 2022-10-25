import React from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from './App'
import App from './App'

const container = document.getElementById('root');
// containerの設定失敗時のスローを設定しないと
if (!container) throw new Error('root設定エラー');
const root = createRoot(container);
root.render(<App />);